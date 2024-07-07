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
          Software Engineer looking to grow through problem solving and building
          code. Experienced deploying Full-stack systems with React and Node.js,
          and open and eager to learn additional languages and systems.
        </p>
        <p>
          Atlas Technology Engineer 2024-Present Utilized Visual Basic to
          quickly extract needed data for thousands of products from engineer
          models in a fraction of required time Organized, edited, combined, and
          created mechanical drawings and models
        </p>
        <p>
          Scheduling and CRM System Contract Full Stack Programmer 2021-2022
          Created stream-lined and user-friendly scheduling system with React,
          Express, Postgres, Docker, Nginx, Bcrypt and Passport JS
        </p>
        <p>
          Dev Mountain Capstone Project 2021 Formulated application to help
          track data, notes, and personalized tips for insomnia Integrated
          ChartJS library to visually display data input by users Created
          PostgreSQL tables to effectively store and organize data with
          SQLAlchemy as an ORM
        </p>
        <p>
          Smith Design & Technology Web Designer, User Interface Design, and
          Graphic Design 2019 to 2021 Partnered with a Senior Dev and
          implemented a multi-stage registration flow that included email
          verification, responsive options, and payment processing Built a SASS
          custom-styled React information website that featured a shopping cart
          experience and email contact integration for a startup company to
          build their web presence
        </p>
      </div>
    </>
  )
}

export default App
