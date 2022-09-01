import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#000" />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
