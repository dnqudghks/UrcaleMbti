import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Popup({ show, handleClose }) {
    const handleLinkClick = () => {
        handleClose();
    };

    return (
        <>
            <Modal
                show={show}
                handleClose={handleClose}
                className="modal-lg"
                data-bs-backdrop="static"
            >
                <Modal.Header>
                    <Modal.Title style={{ fontSize: '17px' }}>광고</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Link
                        to={`https://www.coupang.com/`}
                        onClick={handleLinkClick}
                    >
                        <img
                            src="/img/coopang.png"
                            alt="이미지 설명"
                            width={'600px'}
                            height={'600px'}
                        />
                    </Link>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup;
