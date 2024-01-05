import "./AuthForm.css"
import SubmitIcon from "../../ui/icon/SubmitIcon"
import { useState } from "react"

export default function AuthForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    fetch("http://localhost:4000/check-user", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
  }

  return (
    <div className="main">
      <div className="auth-form" action="">
        <div className="title">Sign in or sign up in seconds</div>
        <div className="description">
          Use your email address. If you do not have an account, we will help
          you create one.
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            className="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.trim())
            }}
          />
          <SubmitIcon className="submitBtn" onClick={handleSubmit} isFilled={!!email} />
        </div>
      </div>
    </div>
  )
}
