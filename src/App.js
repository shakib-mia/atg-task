import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/shared/Navigation";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register";

function App() {
  return (
    <div>
      <Register></Register>
      <Navigation></Navigation>
      <Home></Home>
    </div>
  );
}

export default App;
