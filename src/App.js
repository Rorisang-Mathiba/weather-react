import "./App.css";

export default function App() {
  return (
    <main>
      <div className="current-weather">
        <div>
          <h1 className="current-city" id="current-city">
            Milan
          </h1>
          <p className="current-details">
            <span id="current-date"></span>, moderate rain <br />
            Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
          </p>
        </div>
        <div className="current-temperature">
          <span className="temperature-icon">☀️</span>
          <span className="temperature-value" id="current-temperature">
            24
          </span>
          <span className="temperature-unit">°C</span>
        </div>
      </div>
    </main>
  );
}
