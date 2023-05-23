import { createPortal } from "react-dom"
import '../styles/Modal.css'

const modalRoot = document.getElementById('modal')

const Modal = ({ children }) => {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    modalRoot
  )
}

export default Modal
