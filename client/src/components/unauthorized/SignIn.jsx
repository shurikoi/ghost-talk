import { useState } from "react"
import SubmitIcon from "../ui/icon/SubmitIcon"

export default function SignIn({ email, setCurrentState }) {
  const [password, setPassword] = useState("")
  let isFilled = !!password

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:4000/api/check-password", {
      method: "POST",
      body: JSON.stringify({ email, password }), // maybe it is better to pass the password hashed?
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
      <div className="description">via {email}</div>
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
          isFilled={isFilled}
        />
      </div>
      <button onClick={() => setCurrentState("default")}>
        Back to 'default'
      </button>
    </>
  )
}
