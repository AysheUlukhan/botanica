import AppRouter from "./router"
import { ToastContainer } from "react-toastify"
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";
function App() {
  const [mode] = useContext(ModeContext)
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        draggable
        theme="light"
      />
      <Toaster />
      <div className={mode}>
        <AppRouter />
      </div>
    </>
  )
}

export default App
