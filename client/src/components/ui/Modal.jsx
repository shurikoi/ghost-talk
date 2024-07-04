import { observer } from 'mobx-react-lite'
import ModalLayout from './ModalLayout'

function Modal({ children }) {
  return <ModalLayout>{children}</ModalLayout>
}

export default observer(Modal)
