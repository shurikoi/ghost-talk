import Portal from '../ui/Portal'

function ModalLayout({ onClose, open, children }) {
  if (!open) return null

  return (
    <Portal target="modals-root">
      <div
        onClick={onClose}
        className="h-screen w-full bg-black/30 flex justify-center items-center right-0 top-0 fixed"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-black max-w-sl w-full p-5 rounded-xl shadow-xl"
        >
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default ModalLayout
