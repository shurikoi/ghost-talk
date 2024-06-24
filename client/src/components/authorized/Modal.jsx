import ModalLayout from "./ModalLayout";

function Modal({ children, ...layoutProps }) {
    return (
        <ModalLayout {...layoutProps}>
            {children}
        </ModalLayout>
    )
}

export default Modal