import { toast } from "react-toastify";

const POSITION = {
  TOP_LEFT: "top-left",
  TOP_CENTER: "top-center",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center",
  BOTTOM_RIGHT: "bottom-right",
};

export const notifySuccess = (msg) => {
  toast.success(msg, {
    position: POSITION.TOP_RIGHT,
    autoClose: 1500,
  });
};

export const notifyError = (msg) => {
  toast.error(msg, {
    position: POSITION.TOP_RIGHT,
    autoClose: 1500,
  });
};
