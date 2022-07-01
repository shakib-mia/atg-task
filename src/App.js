import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/shared/Navigation";
import Home from "./components/pages/Home/Home";
import Entry from "./components/pages/Register/Entry";

function App() {
  return (
    <div>
      <Entry></Entry>
      <Navigation></Navigation>
      <Home></Home>
    </div>
  );
}

export default App;
