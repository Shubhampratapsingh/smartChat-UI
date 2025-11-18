import { toast as hotToast } from "react-hot-toast";

export default function toast(message = "", type = "default") {
  const lower = type.toLowerCase();

  switch (lower) {
    case "success":
      hotToast.success(message);
      break;
    case "error":
      hotToast.error(message);
      break;
    case "loading":
      return hotToast.loading(message);
      break;
    case "default":
    default:
      hotToast(message);
      break;
  }
}

toast.dismiss = hotToast.dismiss;
