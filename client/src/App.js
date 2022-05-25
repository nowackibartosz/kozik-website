import "./App.css";
import WebsiteContainer from "./WebsiteContainer/WebsiteContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <WebsiteContainer />
    </div>
  );
}

export default App;
