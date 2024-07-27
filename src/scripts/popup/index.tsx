import { createRoot } from "react-dom/client";

console.log("🦄", "Hello from Popup");

const Popup = () => {
  return <div>Popup</div>;
};

createRoot(document.getElementById("root")!).render(<Popup />);
