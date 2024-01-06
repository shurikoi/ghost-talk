import SubmitIcon from "../ui/icon/SubmitIcon.jsx"

export default function DefaultForm({ setEmail, email, setCurrentState }) {
  let isFilled = !!email //getting boolean if input is filled

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:4000/check-user", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()

    if (data.isExist) setCurrentState("signIn")
    else setCurrentState("signUp")
  }

  const handleKeyDown = (e) => {
    if (e.key == "Enter" && isFilled) handleSubmit()
  }

  return (
    <>
      <div className="title">Sign in or sign up in seconds</div>
      <div className="description">
        Use your email address. If you do not have an account, we will help you
        create one.
      </div>
      <div className="input-wrapper w-18">
        <input
          type="text"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value.trim())
          }}
          onKeyDown={handleKeyDown}
        />
        <SubmitIcon
          className="submitBtn"
          onClick={handleSubmit}
          isFilled={isFilled}
        />
      </div>
    </>
  )
}
