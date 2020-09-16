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
    if (!part || part.text.length === 0) {
      setCurrentText("~ 10.10.2020 ~");
    } else {
      setCurrentText(part.text);
    }
  };

  const [currentText, setCurrentText] = useState("~ 10.10.2020 ~");

  return (
    <div className="App">
      <div className="BackgroundFrame">
        <div className="Card">
          <div className="InnerCard">
            <div className="Title">Christian & Michèle</div>
            <hr></hr>
            <div className="CardContent">
              <SongText text={currentText}></SongText>
              <div className="Heart"></div>
            </div>
          </div>
        </div>
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
