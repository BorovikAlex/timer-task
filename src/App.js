import "./App.css";
import { useState } from "react";
import Settings from "./Settings/Settings";
import SettingsContext from "./Contexts/SettingsContext";
import TimerWidget from "./TimerWidget/TimerWidget";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);

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
        {showSettings ? <Settings /> : <TimerWidget />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
