import { createRoot } from "react-dom/client"
import { browser } from "webextension-polyfill-ts"
import { getPage } from "@/utils/urls"

const Popup = () => {
  const handleOpenPage = () => {
    browser.tabs.create({
      url: browser.runtime.getURL(getPage("index.html")),
    })
  }

  return (
    <div>
      <button onClick={handleOpenPage}>Open page</button>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<Popup />)
