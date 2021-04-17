// import logo from "./logo.svg";
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Card from "./components/Card/Card";

function App() {
  // sesuatu didalam return disebut jsx

  return (
    <div className="App">
      <h1>Component</h1>
      <Avatar />
      <Card />
    </div>
  );
}

export default App;
