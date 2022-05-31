import { useContext } from "react";
import "react-circular-progressbar/dist/styles.css";
import SettingsButton from "../Buttons/SettingsButton";
import SettingsContext from "../Contexts/SettingsContext";
import Timer from "../Timer/Timer";

function TimerWidget() {
  const settingsInfo = useContext(SettingsContext);

  function onTimerCompleted() {
    alert("Finish");
  }

  return (
    <div>
      <Timer
        id="timer-1"
        settings={settingsInfo}
        onCompleted={() => onTimerCompleted()}
      />
      <div className="button-group">
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default TimerWidget;
