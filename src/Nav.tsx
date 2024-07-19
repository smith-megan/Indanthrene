import logo from "./assets/logo.png"
function Nav() {
  return (
    <>
      <div className="font-special bg-white grid grid-flow-col align-middle sticky top-0 z-20 p-2 shadow-sm">
        <img src={logo} className="self-center w-20 pl-4 p-1"></img>
        <a className="self-center" href="#Portfolio">
          <h2>Projects</h2>
        </a>
        <a className="self-center" href="#Resume">
          <h2>Resume</h2>
        </a>
        <a className="self-center" href="#Contact">
          <h2>Contact</h2>
        </a>
      </div>
    </>
  )
}
export default Nav
