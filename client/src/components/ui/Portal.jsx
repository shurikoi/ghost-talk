import { createPortal } from "react-dom"

function Portal({ target, children }) {
    return createPortal(children, document.getElementById(target))
}

export default Portal