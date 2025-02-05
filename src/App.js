import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer>
        This project is{" "}
        <a href="https://github.com/annesura/weather-react-app">
          open-sourced on Git-Hub
        </a>
        , and <a href="funny-llama-3e0b51.netlify.app">hosted on Netlify</a>.
      </footer>
    </div>
  );
}

export default App;
