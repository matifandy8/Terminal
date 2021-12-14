import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <footer className="footer">        
        <button className="btn" onClick={toggleModal}>Help</button>

        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          portalClassName="modal"
          overlayClassName="overlay"
          >
          <div>My modal dialog.</div>
          <button onClick={toggleModal}>Close modal</button>
        </Modal>
    </footer>
  );
};

export default Footer;
