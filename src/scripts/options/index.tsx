import React from "react";
import { createRoot } from "react-dom/client";

type Props = {};

const Popup = (props: Props) => {
  return <div>Options</div>;
};

createRoot(document.getElementById("root")!).render(<Popup />);
