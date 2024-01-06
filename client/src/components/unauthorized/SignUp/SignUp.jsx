import "./SignUp.css"

export default function SignUp({ email, setCurrentState }) {
    return (
        <>
        <div className="title">Sign up</div>
        <div className="description">via {email}</div>
        <button onClick={() => setCurrentState("default")}>Back to 'default'</button>
        </>
    )
};
