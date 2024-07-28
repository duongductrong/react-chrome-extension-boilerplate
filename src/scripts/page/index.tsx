import { createRoot } from "react-dom/client"

const Page = () => {
  return <div>Page</div>
}

createRoot(document.getElementById("root")!).render(<Page />)
