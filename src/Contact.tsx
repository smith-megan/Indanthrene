import { useState } from "react"
import axios from "axios"
import beachImage from "./assets/images/beachsteps.png"

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: { ok: "", msg: "" },
  })
  const handleServerResponse = (ok: any, msg: any, form: any) => {
    const newServerState = serverState
    newServerState.submitting = false
    newServerState.status = { ok, msg }

    setServerState(newServerState)
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    const form = e.target
    const newServerState = serverState
    newServerState.submitting = true
    setServerState(newServerState)
    axios({
      method: "post",
      url: "https://formspree.io/xyynbnyr",
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div>
      <div className="grid w-full grid-cols-3 items-center pb-3" id="Contact">
        <img src={beachImage} className="col-span-1" />
        <div className="bg-black h-full p-8 col-span-2 justify-center grid gap-5 items-center">
          <h1 className="text-white">Contact</h1>
          <form
            className="h-full w-full grid grid-cols-1 gap-2 p-8 bg-white items-center"
            onSubmit={handleOnSubmit}
          >
            <input
              id="name"
              type="name"
              name="name"
              placeholder="Name"
              className="bg-white border-2 border-white border-b-gray-500 p-2 col-span-2 outline-gray-200"
            />
            <input
              placeholder="Contact Info"
              name="contact"
              type="Text"
              className="bg-white border-2 border-white border-b-gray-500 p-2 col-span-2 outline-gray-200"
            />
            <textarea
              id="message"
              name="message"
              className="bg-white border-2 border-white border-b-gray-500 p-2 col-span-2 outline-gray-200"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              disabled={serverState.submitting}
              className="bg-gray-300 rounded-none mt-3"
            >
              Send
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
