import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { FormModalContext } from '../../contexts/FormModalContext'

function ModalLayout({ children }) {
  const { modalMenuStore } = useContext(FormModalContext)
  return (
    <div
      className={`${
        modalMenuStore.isFormActive ? 'md:flex' : 'hidden'
      } h-full w-full right-0 left-0 fixed justify-center items-center`}
    >
      <div
        className="absolute h-full w-full bg-black/2"
        onClick={() => modalMenuStore.removeClass()}
      ></div>
      <div className="bg-white rounded-t-[32px] absolute md:relative bottom-0 left-0 w-full md:w-[27rem] md:rounded-[32px] overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default observer(ModalLayout)
