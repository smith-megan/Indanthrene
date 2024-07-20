import header from "./assets/images/shore.jpg"
import drift from "./assets/images/drift.png"
import rock from "./assets/images/rock.png"
import downloadImage from "./assets/download.png"
import matImage from "./assets/images/mat guide.jpg"
import ticImage from "./assets/images/habit.jpg"
import sleepImage from "./assets/images/sleep.jpg"
import timeImage from "./assets/images/timelapse.jpg"
import "./App.css"
import Nav from "./Nav"
import Contact from "./Contact"

function App() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 bg-black place-content-center">
        <div>
          <img src={header} alt="Rocks and waves" />
        </div>
        <div className="self-center">
          <h1 className="text-gray-200 font-special">Megan Smith</h1>
          <p className="text-gray-400">Software Engineer</p>
          <a className="self-center" href="#Intro">
            <button className="bg-gray-300 mt-4 rounded-none w-1/2 text-sm">
              Let me introduce myself
            </button>
          </a>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:p-20" id="Intro">
        <div className="grid p-10 pb-2 sm:pb-10 sm:p-2 grid-cols-12 relative">
          <div className="row-start-1 col-overlap pt-10 sm:pt-12 z-10">
            <img src={drift} />
          </div>
          <div className="row-start-1 col-underlap grid-rows-1;">
            <img src={rock} />
          </div>
        </div>
        <div className="p-1 sm:p-5 self-center">
          <h1 className="p-4 pt-2 sm:pt-4 text-white">
            Grow, Create, and Deliver
          </h1>
          <p className="text-white">
            I am a Software Engineer looking to deliver through problem solving
            with code. Experienced creating Full-stack systems with React and
            Node.js, and open and eager to grow as I learn additional languages
            and systems.
          </p>
          <a className="self-center" href="#Resume">
            <button className="bg-gray-300 m-5 rounded-none">
              Where I've been
            </button>
          </a>
        </div>
      </div>
      <div
        className="bg-black grid grid-cols-2 justify-center items-center place-content-around p-4 w-full"
        id="Resume"
      >
        <h1 className="text-white sm:p-2">Resume</h1>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <a
            href={"/MeganTSmithResume.docx"}
            className="bg-gray-300 rounded-none flex justify-center self-center items-center"
          >
            .docx
            <img src={downloadImage} className="w-1/5 pl-1 sm:p-2" />
          </a>
          <a
            href={"/MeganTSmithResume.pdf"}
            className="bg-gray-300 rounded-none flex justify-center self-center items-center"
          >
            .pdf
            <img src={downloadImage} className="w-1/5 pl-1 sm:p-2" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 pt-2 pb-2 sm:pt-7 sm:pb-7 relative bg-lightgray after:content-[''] after:absolute after:h-full after:bg-white after:w-[6px] after:top-0 after:left-1/2 after:ml-[-3px] after:animate-scroll-slow">
        <div className="relative sm:col-start-1 justify-center place-self-center w-3/5 bg-white z-10">
          <img className="w-full h-10 object-cover" src={rock} />
          <div className="textbox p-7 relative">
            <h1 className="text-4xl">Atlas Technology</h1>
            <small>2024-present</small>
            <p className="text-left pt-3 pb-2">
              • Utilized Visual Basic to quickly extract data for thousands of
              products from engineer models in a fraction of required time
            </p>
            <p className="text-left">
              • Organized, edited, combined, and created mechanical drawings and
              models
              <span className="opacity-0 sm:opacity-100 h-0 w-0 absolute top-1 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-l-[35px] border-l-white right-[-30px] z-0"></span>
            </p>
          </div>
        </div>

        <div className="relative sm:col-start-2 sm:row-start-2 justify-center place-self-center w-3/5 bg-white z-10">
          <img
            className="w-full h-10 object-cover object-top-left"
            src={header}
          />
          <div className="textbox p-7 relative">
            <h1 className="text-4xl">CRM Contract</h1>
            <small>2021-2022</small>
            <p className="text-left pt-3">
              • Created stream-lined and user-friendly scheduling system with
              React, Express, Postgres, Docker, Nginx, Bcrypt and Passport JS
              <span className="opacity-0 sm:opacity-100 h-0 w-0 absolute top-1 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-r-[35px] border-r-white left-[-30px] z-0"></span>
            </p>
          </div>
        </div>
        <div className="relative sm:col-span-1 sm:row-start-3 justify-center place-self-center w-3/5 bg-white z-10">
          <img
            className="w-full h-10 object-cover object-bottom"
            src={header}
          />
          <div className="textbox p-7 relative">
            <h1 className="text-4xl">Dev Mountain Final</h1>
            <small>2021</small>
            <p className="text-left pt-3 pb-2">
              •Formulated application to help track data, notes, and
              personalized tips for insomnia
            </p>
            <p className="text-left pb-2">
              • Created PostgreSQL tables to effectively store and organize data
              with SQLAlchemy as an ORM
            </p>
            <p className="text-left">
              • Integrated ChartJS library to visually display data input by
              users
            </p>
            <span className="opacity-0 sm:opacity-100 h-0 w-0 absolute top-1 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-l-[35px] border-l-white right-[-30px] z-0"></span>
          </div>
        </div>
        <div className="relative sm:col-start-2 sm:row-start-4 justify-center place-self-center w-3/5 bg-white z-10">
          <img className="w-full h-10 object-cover object-bottom" src={rock} />
          <div className="textbox p-7 relative">
            <h1 className="text-4xl">Smith Design & Technology</h1>
            <small>2019 – 2021</small>
            <p className="text-left pt-3 pb-2">
              • Partnered with a Senior Dev and implemented a multi-stage
              registration flow that included email verification, responsive
              options, and payment processing
            </p>
            <p className="text-left">
              • Built a SASS custom-styled React information website that
              featured a shopping cart experience and email contact integration
              for a startup company to build their web presence
            </p>
            <span className="opacity-0 sm:opacity-100 h-0 w-0 absolute top-1 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-r-[35px] border-r-white left-[-30px] z-0"></span>
          </div>
        </div>
        <div className="relative sm:col-span-1 sm:row-start-5 justify-center place-self-center w-3/5 bg-white z-10">
          <img className="w-full h-10 object-cover object-top" src={rock} />
          <div className="textbox p-7 relative">
            <h1 className="text-4xl">K2 Energy</h1>
            <small>2017-2019</small>
            <p className="text-left pt-3 pb-2">
              • Marketing Manager of Battery Engineering company
            </p>
            <span className="opacity-0 sm:opacity-100 h-0 w-0 absolute top-1 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-l-[35px] border-l-white right-[-30px] z-0"></span>
          </div>
        </div>
      </div>
      <div className="p-4 text-white" id="Portfolio">
        <div className="text-left flex p-2">
          <h1>Portfolio</h1>
          <p className="p-2 justify-center self-center">
            Recent projects, hover for details
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 p-10">
          <div>
            <div
              className="bg-cover bg-center h-60 group z-10 items-center overflow-hidden"
              style={{ backgroundImage: `url(${timeImage})` }}
            >
              <div className="grid z-20 items-center duration-500 justify-center w-full transition-all h-60 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70">
                <div className="h-30 text-white transition-all duration-500 translate-y-[50%] group-hover:translate-y-0">
                  <p className="text-sm p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Photo capturing timelapse written in Python for Rasberry Pi
                    System
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-lg">Pi Timelapse</h2>
          </div>
          <div>
            <div
              className="bg-cover bg-center h-60 group z-10 items-center overflow-hidden"
              style={{ backgroundImage: `url(${matImage})` }}
            >
              <div className="grid z-20 items-center duration-500 justify-center w-full transition-all h-60 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70">
                <div className="h-30 text-white transition-all duration-500 translate-y-[50%] group-hover:translate-y-0">
                  <p className="text-sm p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Timed yoga session guide software written in React with
                    Typescript
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-lg">Mat Guide</h2>
          </div>
          <div>
            <div
              className="bg-cover bg-center h-60 group z-10 items-center overflow-hidden"
              style={{ backgroundImage: `url(${ticImage})` }}
            >
              <div className="grid z-20 items-center duration-500 justify-center w-full transition-all h-60 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70">
                <div className="h-30 text-white transition-all duration-500 translate-y-[50%] group-hover:translate-y-0">
                  <p className="text-sm p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Habit tracking system written in React with Typescript,
                    NodeJs with Express, Postgres with Sequilize
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-lg">Habit System</h2>
          </div>
          <div>
            <div
              className="bg-cover bg-center h-60 group z-10 items-center overflow-hidden"
              style={{ backgroundImage: `url(${sleepImage})` }}
            >
              <div className="grid z-20 items-center duration-500 justify-center w-full transition-all h-60 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70">
                <div className="h-30 text-white transition-all duration-500 translate-y-[50%] group-hover:translate-y-0">
                  <p className="text-sm p-2 invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    Sleep graph data system with React frontend and Python
                    backend
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-lg self-end">Sleep Tracker</h2>
          </div>
        </div>
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div className="bg-black h-10"></div>
    </>
  )
}

export default App
