import React, { SyntheticEvent } from "react";
import "./AudioPlayer.css";

export interface AudioPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  onPlay?: (event: SyntheticEvent<HTMLAudioElement, Event>) => void;
  onTimeUpdate?: (event: SyntheticEvent<HTMLAudioElement, Event>) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = (props: AudioPlayerProps) => {
  const { audioRef, onPlay, onTimeUpdate } = props;

  return (
    <audio
      ref={audioRef}
      id="audioControl"
      controls
      onPlay={onPlay}
      onTimeUpdate={onTimeUpdate}
    >
      <source src="/song.m4a" type="audio/aac"></source>
      <source src="/song.mp3" type="audio/mpeg"></source>
      <source src="/song.ogg" type="audio/ogg"></source>
    </audio>
  );
};

export default AudioPlayer;
