import logo from "./logo.svg";
import "./App.css";
import Timer from "./Timer/Timer";
import SettingsButton from "./Buttons/SettingsButton";
import { useState } from "react";
import Settings from "./Settings/Settings";
import SettingsContext from "./Contexts/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(45);
  const [seconds, setSeconds] = useState(15);

  const settings = { hours, minutes, seconds };

  return (
    <main className="main">
      <SettingsContext.Provider
        value={{
          setHours,
          setMinutes,
          setSeconds,
          hours,
          minutes,
          seconds,
          showSettings,
          setShowSettings,
        }}
      >
        {showSettings ? (
          <Settings />
        ) : (
          <div>
            <Timer settings={settings} />
            <div className="button-group">
              <SettingsButton onClick={() => setShowSettings(true)} />
            </div>
          </div>
        )}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
