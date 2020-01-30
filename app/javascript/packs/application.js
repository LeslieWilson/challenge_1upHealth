console.log("Hello World from Webpacker")

import React from "react"
import ReactDOM from "react-dom"
import MedInfo from './MedInfo.js'

document.addEventListener("DOMContentLoaded", () => {
  let reactElement = document.getElementById("app")

  if (reactElement) {
    ReactDOM.render(<MedInfo />, reactElement)
  }
})
