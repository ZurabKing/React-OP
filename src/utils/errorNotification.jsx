import { toast } from "react-toastify";

export const errorNotification = (error) => {
  const options = {
    autoClose: 5000,
    type: toast.TYPE.ERROR,
    hideProgressBar: true,
    position: toast.POSITION.TOP_RIGHT,
  };

  toast(error, options);
};
