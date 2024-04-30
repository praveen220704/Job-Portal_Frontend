import { ToastContainer, toast } from "react-toastify";

export const showToast = (message, type = "info") => {
    toast(message, { type: type });
};

export const ToastManager = () => {
    <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
}