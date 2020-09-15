import React from "react";
import "./SongText.css";

interface SongTextProps {
  text: string;
}

const SongText: React.FC<SongTextProps> = (props: SongTextProps) => {
  const { text } = props;

  return <div className="TextContainer">{text}</div>;
};

export default SongText;
