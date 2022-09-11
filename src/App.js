import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import ScrollToTop from "react-scroll-to-top";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import Image from "./assets/img/logo-white.png";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <>
          <div className="modularize-loader">
            <img style={{ width: "150px" }} src={Image} />
            <BeatLoader size={10} loading={loading} color="#000" />
          </div>
        </>
      ) : (
        <>
          <ScrollToTop smooth color="#000" />
          <Router>
            <AppRoutes />
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
