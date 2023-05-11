import React from "react";

const Button = ({ filter, button }) => {
  return (
    <div>
      <button onClick={() => filter("All")}>All</button>
      <button onClick={() => filter("Python")}>Python</button>
      <button onClick={() => filter("Net")}>Net</button>
      <button onClick={() => filter("Tips")}>Tips</button>
    </div>
  );
};

export default Button;
