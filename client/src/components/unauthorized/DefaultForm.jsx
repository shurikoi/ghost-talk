import { useContext } from "react"
import SubmitIcon from "../ui/icon/SubmitIcon.jsx"
import { Context } from "../../main.jsx"

export default function DefaultForm({ setEmail, email, setCurrentState }) {
  const { store } = useContext(Context)
  let isFilled = !!email //getting boolean if input is filled

  const handleSubmit = async () => {
    const data = await store.checkUser(email)

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
