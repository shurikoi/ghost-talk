import "./SignUp.css"

export default function SignUp({ setCurrentState }) {
    return(
        <>
        <h1>SignUp</h1>
        <button onClick={() => setCurrentState("default")}>Back to 'default'</button>
        </>
    )
};
