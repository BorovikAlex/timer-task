import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "../Buttons/PauseButton";
import PlayButton from "../Buttons/PlayButton";
import SettingsContext from "../Contexts/SettingsContext";

function Timer(settings) {
  const settingsInfo = useContext(SettingsContext);
  let hours = settings.hours;
  console.log(hours);
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          textColor: "white",
        })}
      />
      <div className="button-group">
        <PlayButton />
        <PauseButton />
      </div>
    </div>
  );
}

export default Timer;
