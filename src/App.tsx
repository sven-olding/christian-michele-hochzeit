import React, { useRef, useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import SongText from "./components/SongText";
import { SongPart, useSong } from "./song";

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const song = useSong();

  const onPlay = () => {
    console.log("onPlay triggered");
  };

  const onTimeUpdate = () => {
    const currentTime: number | undefined = audioRef.current?.currentTime;
    if (!currentTime) {
      return;
    }
    const part: SongPart | null = song.getSongPart(currentTime);
    if (!part) {
      setCurrentText("");
    } else {
      setCurrentText(part.text);
    }
  };

  const [currentText, setCurrentText] = useState("");

  return (
    <div className="App">
      <div className="BackgroundContainer">
        <h1>Christian & Michèle</h1>
        <SongText text={currentText}></SongText>
      </div>
      <AudioPlayer
        audioRef={audioRef}
        onPlay={onPlay}
        onTimeUpdate={onTimeUpdate}
      ></AudioPlayer>
    </div>
  );
};

export default App;
