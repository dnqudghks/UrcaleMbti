import Popup from './popup';
import { useEffect } from 'react';
import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from './localStorage';
import Profile from '../result/countries/countries';

// import GoogleAdvertise from './googleAdvertise';

function Result(){
    const storedShow = getLocalStorage('modalShow');
    
    // 모달 상태를 localStorage에 저장
    const [show, setShow] = useState(() => {
        return storedShow !== null ? JSON.parse(storedShow) : true;
    });

    const handleClose = () => {
        setShow(false);
        setLocalStorage('modalShow', false, 1);
    };

    const handleShow = () => {
        setShow(true);
        setLocalStorage('modalShow', true, 1);
    };

    useEffect(() => {
        if (storedShow === null) {
            handleShow();
        } else {
            setShow(JSON.parse(storedShow));
        }
    }, []);

    return(
        <>
            {/* <GoogleAdvertise/> */}
            <Popup show={show} handleClose={handleClose} />
            <Profile/>        
        </>
    )

}

export default Result