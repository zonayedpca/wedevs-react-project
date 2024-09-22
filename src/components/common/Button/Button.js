import React from "react";

const Button = ({ children, type, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export { Button };
