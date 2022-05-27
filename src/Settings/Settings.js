import { useContext } from "react";
import BackButton from "../Buttons/BackButton";
import SettingsContext from "../Contexts/SettingsContext";
import ReactSlider from "react-slider";
import "./styles/Settings.css";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="settings">
      <label className="settings__label">Hours: {settingsInfo.hours}</label>
      <ReactSlider
        className="slider slider-red"
        thumbClassName="thumb thumb-red"
        trackClassName="track"
        value={settingsInfo.hours}
        onChange={(newValue) => settingsInfo.setHours(newValue)}
        min={0}
        max={24}
      />
      <label className="settings__label">Minutes: {settingsInfo.minutes}</label>
      <ReactSlider
        className="slider slider-green"
        thumbClassName="thumb thumb-green"
        trackClassName="track"
        value={settingsInfo.minutes}
        onChange={(newValue) => settingsInfo.setMinutes(newValue)}
        min={0}
        max={60}
      />
      <label className="settings__label">Seconds: {settingsInfo.seconds}</label>
      <ReactSlider
        className="slider slider-blue"
        thumbClassName="thumb thumb-blue"
        trackClassName="track"
        value={settingsInfo.seconds}
        onChange={(newValue) => settingsInfo.setSeconds(newValue)}
        min={0}
        max={60}
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
