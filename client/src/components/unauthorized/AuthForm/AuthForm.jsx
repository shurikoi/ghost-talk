import "./AuthForm.css"
import SubmitIcon from "../../ui/icon/SubmitIcon"

export default function AuthForm() {
  return (
    <div className="main">
      <div class="auth-form" action="">
        <div className="title">Sign in or sign up in seconds</div>
        <div className="description">
          Use your email address. If you do not have an account, we will help you create one.
        </div>
        <div className="input-wrapper">
          <input type="text" className="email" placeholder="example@gmail.com" />
          <SubmitIcon className='submitBtn'/>
        </div>
      </div>
    </div>
  )
}
