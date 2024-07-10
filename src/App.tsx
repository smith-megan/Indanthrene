// import { useState } from "react"
import header from "./assets/images/shore.jpg"
import logo from "./assets/logo.png"
import drift from "./assets/images/drift.png"
import rock from "./assets/images/rock.png"
import beachImage from "./assets/images/beachsteps.png"
import downloadImage from "./assets/download.png"
import "./App.css"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-special grid grid-flow-col align-middle mb-2">
        <img src={logo} className="self-center w-20 pl-4 pt-3"></img>
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
      <div className="grid grid-cols-2 box-border p-20">
        <div className="p-10 self-center">
          <h1 className="p-4">Impact</h1>
          <p>
            Software Engineer looking to grow through problem solving and
            building code. Experienced deploying Full-stack systems with React
            and Node.js, and open and eager to learn additional languages and
            systems.
          </p>
        </div>
        <div className="grid grid-cols-12 relative">
          <div className="row-start-1 col-overlap pt-12 z-10">
            <img src={drift} />
          </div>
          <div className="row-start-1 col-underlap grid-rows-1;">
            <img src={rock} />
          </div>
        </div>
      </div>
      <div className="bg-black grid grid-flow-col gap-4 justify-center p-4">
        <button className="bg-gray-300 mt-5 rounded-none p-3">
          <img src={downloadImage} className="w-1/12" />
          .docx
        </button>
        <button className="bg-gray-300 mt-5 rounded-none p-2">
          <img src={downloadImage} className="w-1/12" />
          .pdf
        </button>
        <h1 className="text-white p-2">Paper Resume</h1>
      </div>
      <div className="timeline relative bg-lightgray after:content-['*'] after:absolute after:h-full after:bg-white after:w-[6px] after:top-0 after:left-1/2 after:ml-[-3px] z-[-1] after:animate-scroll-slow">
        <div className="container p-3 relative w-96 bg-white opacity-0 animate-move-down [animation-delay: 200ms]">
          <img
            className="absolute w-20 right-[-220px] rounded-full"
            src={rock}
          />
          <div className="textbox p-2 relative">
            <h1>Atlas Technology</h1>
            <small>2024-present</small>
            <p>
              Atlas Technology Engineer 2024-Present Utilized Visual Basic to
              quickly extract needed data for thousands of products from
              engineer models in a fraction of required time Organized, edited,
              combined, and created mechanical drawings and models
              <span className="h-0 w-0 absolute top-1 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-l-[35px] border-l-white right-[-30px] z-0"></span>
            </p>
          </div>
        </div>

        <div className="container p-2 relative w-96 left-1/2 bg-white opacity-0 animate-move-down delay-700">
          <img
            className="absolute w-20 z-10 left-[-220px] rounded-full"
            src={drift}
          />
          <div className="textbox p-2 relative">
            <h1>CRM Contract</h1>
            <small>2024-present</small>
            <p>
              Scheduling and CRM System Contract Full Stack Programmer 2021-2022
              Created stream-lined and user-friendly scheduling system with
              React, Express, Postgres, Docker, Nginx, Bcrypt and Passport JS
              <span className="h-0 w-0 absolute top-1 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-r-[35px] border-r-white left-[-30px] z-0"></span>
            </p>
          </div>
        </div>
        <div className="container p-2 relative w-96 left-1/2 bg-white opacity-0 animate-move-down delay-700">
          <img
            className="absolute w-20 z-10 left-[-220px] rounded-full"
            src={drift}
          />
          <div className="textbox p-2 relative">
            <h1>CRM Contract</h1>
            <small>2024-present</small>
            <p>
              Dev Mountain Capstone Project 2021 Formulated application to help
              track data, notes, and personalized tips for insomnia Integrated
              ChartJS library to visually display data input by users Created
              PostgreSQL tables to effectively store and organize data with
              SQLAlchemy as an ORM
              <span className="h-0 w-0 absolute top-1 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-r-[35px] border-r-white left-[-30px] z-0"></span>
            </p>
          </div>
        </div>
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
      <div>
        <h1>Projects</h1>
        <p>projects here</p>
      </div>
      <div className="grid grid-cols-2">
        <img src={beachImage} />
        <div>
          <h1>Contact</h1>
          <form></form>
          <button>Send</button>
        </div>
      </div>
    </>
  )
}

export default App
