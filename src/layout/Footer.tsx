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
          style={{
            overlay: {
              position: 'fixed',
              top: 100,
              left: 150,
              right: 0,
              bottom: 0,
              width: 400,
              height: 400,
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#000',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
              color: '#00ff55'
            }
          }}
          >
            <div className="help">
              <h2>Help</h2>
              <p>Run the commands to see my information:</p>
              <p>about me (ab)</p>
              <p>projects (pjs)</p>
              <p>contact (ct)</p>
              <button onClick={toggleModal}>Close modal</button>
            </div>
          
        </Modal>
    </footer>
  );
};

export default Footer;
