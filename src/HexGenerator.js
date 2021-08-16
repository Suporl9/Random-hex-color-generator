import React, { useState } from "react";
import "./styles.css";

export const HexGenerator = () => {
  const [color, setColor] = useState("#0ffc34");
  const getRandomRgb = () => {
    const random = Math.floor(Math.random() * 256);
    console.log(random);
    return random;
  };

  const convertToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((each) => {
        const hex = each.toString(16);
        return hex;
      })
      .join("");

  const colorGenerator = () => {
    const color = {
      r: getRandomRgb(),
      g: getRandomRgb(),
      b: getRandomRgb(),
    };
    setColor(convertToHex(color.r, color.g, color.b));
    console.log("color", color);
    // console.log(color);
  };
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="btncard">
        <h3 style={{ color: "aliceblue" }}>Click to generate hex colors</h3>
        <button
          className="btn"
          onClick={colorGenerator}
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      </div>
    </div>
  );
};
