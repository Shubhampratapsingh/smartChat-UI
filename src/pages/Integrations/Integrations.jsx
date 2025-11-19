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

  const fetchData = async () => {
    setPending(true);
    try {
      const [providersRes, userConnectionsRes] = await Promise.all([
        apiService.getProvidersList(),
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
          <span className="capitalize text-base">{row?.name || "—"}</span>
        ),
        sortable: false,
      },
      {
        name: "Status",
        cell: (row) => {
          let text = "Not connected";
          let badgeClasses = "bg-gray-200 text-black";

          if (row.userConnection) {
            const status = row.userConnection.status;
            if (status?.toLowerCase() === "initiated") {
              text = "Initiated";
              badgeClasses = "bg-yellow-300 text-black";
            } else if (status?.toLowerCase() === "active") {
              text = "Connected";
              badgeClasses = "bg-green-600 text-white";
            }
          }

          return (
            <span
              className={`inline-block ${badgeClasses} rounded-full px-2 py-0.5 text-xs`}
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
                className={`inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white`}
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
                className="text-sm px-3 py-1.5 rounded bg-yellow-300 text-black"
                onClick={() => handleComplete(row)}
              >
                Complete
              </button>
            );
          } else if (status?.toLowerCase() === "active") {
            return (
              <button
                className="text-sm px-3 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white"
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

  const subHeaderComponent = useMemo(() => {
    return (
      <input
        type="text"
        className="border rounded px-3 py-2 max-w-xs"
        placeholder="Search connectors..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    );
  }, [filterText]);

  const filteredProviders = providers.filter((provider) =>
    provider.name?.toLowerCase().includes(filterText.toLowerCase())
  );

  if (pending) return <Loader text="Loading providers..." />;

  return (
    <div className="container mx-auto py-4 my-4 px-4 h-screen">
      <div className="bg-white shadow-sm rounded-lg">
        <div className="p-6">
          <h5 className="text-lg font-semibold mb-3">Available Connectors</h5>
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
