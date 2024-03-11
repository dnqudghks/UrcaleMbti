import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
const CoupangAds = () => {
    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const receiveMsgFn = (event) => {
            if (event.data.type === 'adClicked') {
                console.log('쿠팡 클릭');
                setShowModal(false);
            }
        };
        window.addEventListener('message', receiveMsgFn);
    }, []);

    return (
        <>
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                style={{ zIndex: 1050 }}
                centered
                backdrop="static"
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body style={{ height: '330px', overflowY: 'auto' }}>
                    <iframe
                        src="https://ads-partners.coupang.com/widgets.html?id=763535&template=carousel&trackingCode=AF6213122&subId=&width=200&height=200&tsource="
                        width="200"
                        height="200"
                        frameBorder="0"
                        scrolling="no"
                        referrerPolicy="unsafe-url"
                    />
                    <p style={{ marginTop: '15px', fontSize: '11px' }}>
                        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른
                        일정액의 수수료를 제공받습니다.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CoupangAds;
