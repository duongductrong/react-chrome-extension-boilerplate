import { useState } from "react"
import { renderer } from "@/lib/renderer"

import "../../globals.css"

const containerId = "chrome-extension-boilerplate-container-id"
const containerClassName = "chrome-extension-boilerplate-container-class"
const tag = "chrome-extension-boilerplate-container"

function App() {
  const [isActive] = useState(false)

  // Please remove default_popup from manifest.json
  // And you can enable this code to open to communicate with content
  // useEffect(() => {
  //   const handleListener = (message) => {
  //     console.log(message);

  //     setIsActive(() => !isActive);
  //   };

  //   browser.runtime.onMessage.addListener(handleListener);

  //   return () => {
  //     browser.runtime.onMessage.removeListener(handleListener);
  //   };
  // }, [isActive]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-100 rounded-md p-2">
      Content Script {isActive ? "Active" : "Inactive"}
    </div>
  )
}

renderer(<App />, { tag, containerId, containerClassName })
