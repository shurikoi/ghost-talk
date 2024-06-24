import { useContext } from 'react'
import { FormModalContext } from '../../contexts/FormModalContext'
import styles from './ModalMenu.module.css'
import { observer } from 'mobx-react-lite'

function Modal({ children }) {
  const { modalMenuStore } = useContext(FormModalContext)

  return (
    <div
      className={`${
        modalMenuStore.isFormActive ? 'flex' : 'hidden'
      } h-full w-full right-0 left-0 fixed justify-center items-center`}
    >
      <div
        className="absolute h-full w-full bg-black/2"
        onClick={() => modalMenuStore.removeClass()}
      ></div>
      <div className="bg-white rounded-[32px] relative w-[27rem] overflow-hidden">{children}</div>
    </div>
  )
}

export default observer(Modal)
