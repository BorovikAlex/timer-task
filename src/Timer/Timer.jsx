import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "../Buttons/PauseButton";
import PlayButton from "../Buttons/PlayButton";

function Timer(props) {
  const settingsHours = props.settings.hours;
  const settingsMinutes = props.settings.minutes;
  const settingsSeconds = props.settings.seconds;
  const totalSeconds =
    settingsHours * 60 * 60 + settingsMinutes * 60 + settingsSeconds;

  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const timerSeconds = secondsLeft;
  let hours = Math.floor(secondsLeft / 3600);
  let minutes = Math.floor((secondsLeft / 60) % 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;
  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;

  function play() {
    if (timerSeconds === totalSeconds) {
      setSecondsLeft(totalSeconds);
    } else {
      setSecondsLeft(timerSeconds);
    }
    setIsPaused(false);
  }
  function pause() {
    setIsPaused(true);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) {
        return;
      }
      if (secondsLeft === 0) {
        setSecondsLeft(totalSeconds);
        setIsPaused(true);
        props.onCompleted();
      }
      if (secondsLeft > 0) {
        setSecondsLeft(timerSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused, secondsLeft, props, totalSeconds, timerSeconds]);

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={hours + ":" + minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "white",
        })}
      />
      <div className="button-group">
        {isPaused ? (
          <PlayButton onClick={() => play()} />
        ) : (
          <PauseButton onClick={() => pause()} />
        )}
      </div>
    </div>
  );
}

export default Timer;
