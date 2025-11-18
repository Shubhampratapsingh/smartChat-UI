import { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { Plug } from "lucide-react";
import Loader from "../../components/Loader/Loader";
import { useAPIService } from "../../services";
import toast from "../../utils/notification";

const Integrations = () => {
  const [providers, setProviders] = useState([]);
  const [pending, setPending] = useState(true);
  const [connectingId, setConnectingId] = useState(null);
  const [filterText, setFilterText] = useState("");
  const apiService = useAPIService();

  // Fetch providers and user connections then merge
  const fetchData = async () => {
    setPending(true);
    try {
      const [providersRes, userConnectionsRes] = await Promise.all([
        apiService.getProvidersListForHomepage(),
        apiService.getConnectionsList(),
      ]);

      const providersList =
        providersRes?.success && Array.isArray(providersRes.connections)
          ? providersRes.connections
          : [];

      const userConnectionsList =
        userConnectionsRes?.success &&
        Array.isArray(userConnectionsRes.connections)
          ? userConnectionsRes.connections
          : [];

      const userConnMap = {};
      userConnectionsList.forEach((uc) => {
        if (uc.toolkit?.slug) userConnMap[uc.toolkit.slug] = uc;
      });

      const merged = providersList.map((provider) => ({
        ...provider,
        userConnection: userConnMap[provider?.name?.toLowerCase()] || null,
      }));
      setProviders(merged);
    } catch (error) {
      console.error("Error fetching data:", error);
      setProviders([]);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // called on connect button
  const handleConnect = async (provider) => {
    setConnectingId(provider.id);
    try {
      const response = await apiService.connectWithProvider(provider.id);
      if (response?.success && response.redirectUrl) {
        window.open(response.redirectUrl, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Error connecting provider:", error);
    } finally {
      setConnectingId(null);
    }
  };

  //called on complete button if status initiated
  const handleComplete = (provider) => {
    const redirectUrl = provider.userConnection?.data?.redirectUrl;
    if (redirectUrl) {
      window.open(redirectUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleDelete = async (provider) => {
    console.log(provider);
    if (!provider?.userConnection?.id) {
      toast("Invalid provider", "error");
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete your connection with "${(
        provider?.toolkit?.slug || provider?.name
      )?.toUpperCase()}"?`
    );

    if (!confirmed) return;

    try {
      const response = await apiService.deleteUserConnection(
        provider?.userConnection?.id
      );

      if (response?.success) {
        toast("Connection deleted successfully", "success");
        await fetchData();
      } else {
        toast(response?.error || "Failed to delete connection", "error");
      }
    } catch (error) {
      console.error("Error deleting connection:", error);
      toast("Failed to delete connection", "error");
    }
  };

  // Memoize columns to avoid recalculation on every render
  const columns = useMemo(
    () => [
      {
        name: "Logo",
        cell: (row) => (
          <img
            src={row?.logo || ""}
            alt={row.name}
            className="rounded"
            style={{ width: "35px", height: "35px", objectFit: "cover" }}
          />
        ),
      },
      {
        name: "Name",
        cell: (row) => (
          <span className="text-capitalize fs-6">{row?.name || "—"}</span>
        ),
        sortable: false,
      },
      {
        name: "Status",
        cell: (row) => {
          let text = "Not connected";
          let colorClass = "bg-secondary";

          if (row.userConnection) {
            const status = row.userConnection.status;
            if (status?.toLowerCase() === "initiated") {
              text = "Initiated";
              colorClass = "bg-warning text-dark";
            } else if (status?.toLowerCase() === "active") {
              text = "Connected";
              colorClass = "bg-success";
            }
          }

          return (
            <span
              className={`badge ${colorClass} rounded-pill px-2 py-1`}
              style={{ fontSize: "0.7rem" }}
            >
              {text}
            </span>
          );
        },
        sortable: false,
      },
      {
        name: "Action",
        cell: (row) => {
          if (!row.userConnection) {
            return (
              <button
                className="btn btn-primary btn-sm d-flex align-items-center gap-1"
                onClick={() => handleConnect(row)}
                disabled={connectingId === row.id}
              >
                <Plug size={14} />
                {connectingId === row.id ? "Connecting..." : "Connect"}
              </button>
            );
          }

          const status = row.userConnection.status;
          if (status?.toLowerCase() === "initiated") {
            return (
              <button
                className="btn btn-warning btn-sm"
                onClick={() => handleComplete(row)}
              >
                Complete
              </button>
            );
          } else if (status?.toLowerCase() === "active") {
            return (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(row)}
              >
                Delete
              </button>
            );
          }

          return null;
        },
        ignoreRowClick: true,
        width: "150px",
      },
    ],
    [connectingId]
  );

  //Search Filter in table
  const subHeaderComponent = useMemo(() => {
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Search connectors..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ maxWidth: "300px" }}
      />
    );
  }, [filterText]);

  //to be used in table search
  const filteredProviders = providers.filter((provider) =>
    provider.name?.toLowerCase().includes(filterText.toLowerCase())
  );

  if (pending) return <Loader text="Loading providers..." />;

  return (
    <div className="container py-4 my-4">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="card-title mb-3">Available Connectors</h5>
          <DataTable
            columns={columns}
            data={filteredProviders}
            pagination
            paginationPerPage={20}
            highlightOnHover
            striped
            responsive
            noDataComponent="No connectors found."
            subHeader
            subHeaderComponent={subHeaderComponent}
          />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
