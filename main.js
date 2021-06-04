import { helloWorld } from "./hello-world.js"

helloWorld()

import canvasConfetti from "./web_modules/canvas-confetti.js"
canvasConfetti.create(document.getElementById("canvas"), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 })

import canvas from "/web_modules/full-page-canvas.js"
import ConfettiJS from "/web_modules/confetti-js.js"

const canvasEl = canvas.mount()
const confetti = new ConfettiJS({ target: canvasEl })
confetti.render()

// need babel for jsx syntax
import React from "./web_modules/react.js"
import ReactDOM from "./web_modules/react-dom.js"

import htm from "https://unpkg.com/htm?module"
const html = htm.bind(React.createElement)

function Hello({ toWhat }) {
  return React.createElement("div", null, `Hello ${toWhat}`)
}

const Counter = ({ toWhat }) => {
  const [count, setCount] = React.useState(parseInt(0))
  return html`
    <div>
      <${Hello} toWhat=${toWhat} />
      <h1>${count}</h1>
      <button onClick=${(e) => setCount(count - 1)}>Decrement</button>
      <button onClick=${(e) => setCount(count + 1)}>Increment</button>
    </div>
  `
}

ReactDOM.render(
  React.createElement(Counter, { toWhat: "World in React." }, null),
  document.getElementById("root")
)
