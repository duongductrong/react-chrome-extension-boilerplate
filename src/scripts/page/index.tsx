import { createRoot } from "react-dom/client"

import "../../globals.css"

const Page = () => {
  return <div className="text-base">Page</div>
}

createRoot(document.getElementById("root")!).render(<Page />)
