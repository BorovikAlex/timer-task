import "./App.css";
import Timer from "./Timer/Timer";
import SettingsButton from "./Buttons/SettingsButton";
import { useState } from "react";
import Settings from "./Settings/Settings";
import SettingsContext from "./Contexts/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);

  const settings = { hours, minutes, seconds };
  function onTimerCompleted() {
    alert("Finish");
  }
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
            <Timer
              id="timer-1"
              settings={settings}
              onCompleted={() => onTimerCompleted()}
            />
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
