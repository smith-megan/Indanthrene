// import { useState } from "react"
import header from "./assets/images/shore.jpg"
import logo from "./assets/logo.png"
import "./App.css"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-special grid grid-flow-col align-middle mb-2">
        <img src={logo} className="self-center w-20"></img>
        <h2 className="self-center">Projects</h2>
        <h2 className="self-center">Resume</h2>
        <h2 className="self-center">Contact</h2>
      </div>
      <div className="grid grid-cols-2 bg-black place-content-center">
        <div>
          <img src={header} alt="Rocks and waves" />
        </div>
        <div className="self-center">
          <h1 className="text-gray-200 font-special">Megan Smith</h1>
          <p className="text-gray-400">Software Engineer</p>
          <button className="bg-gray-300 mt-5 rounded-none">
            Let me introduce myself
          </button>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  )
}

export default App
