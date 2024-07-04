import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { FormModalContext } from '../../contexts/FormModalContext'
import Portal from './Portal'

function ModalLayout({ children }) {
  const { modalMenuStore } = useContext(FormModalContext)
  if (!modalMenuStore.isFormActive) return null

  return (
    <Portal target="modals-root">
      <div
        className={`md:flex h-full w-full right-0 left-0 top-0 fixed justify-center items-center`}
      >
        <div
          className="absolute h-full w-full bg-black/20"
          onClick={() => modalMenuStore.removeClass()}
        ></div>
        <div className="bg-white rounded-t-[32px] absolute md:relative bottom-0 left-0 w-full md:w-[27rem] md:rounded-[32px] overflow-hidden">
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default observer(ModalLayout)
