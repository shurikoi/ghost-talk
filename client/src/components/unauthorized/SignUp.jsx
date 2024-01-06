import { useState } from "react"
import SubmitIcon from "../ui/icon/SubmitIcon"
import "./SignUp.css"

export default function SignUp({ email, setCurrentState }) {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:4000/create-user", {
      method: "POST",
      body: JSON.stringify({ email, name, surname, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()
  }

  const handleKeyDown = (e) => {
    if (e.key == "Enter" && isFilled) handleSubmit()
  }

  return (
    <>
      <div className="title">Sign up</div>
      <div className="description">creating an account using {email}</div>

      <div className="inputs-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value.trim())
            }}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value.trim())
            }}
          />
        </div>
      </div>

      <div className="input-wrapper w-18">
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value.trim())
          }}
          onKeyDown={handleKeyDown}
        />
        <SubmitIcon
          className="submitBtn"
          onClick={handleSubmit}
          //   isFilled={isFilled} // TODO!!
        />
      </div>
      <button onClick={() => setCurrentState("default")}>
        Back to 'default'
      </button>
    </>
  )
}
