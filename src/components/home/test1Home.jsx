import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home/test1Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Home = () => {
    const url = window.location.href; // url 복사
    const copyAlert = () => {
        alert('링크 생성!');
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <img
                            className={styles.logo}
                            src="https://test-it.co.kr/img_main121.png"
                            alt="로고"
                        />
                    </div>
                    <div className={styles.middle}>
                        <h2 className={styles.header}>
                            찰떡 직업을 추천받아봐요!
                        </h2>
                        <p>총 16개의 유형의 MBTI성향을 기반으로</p>
                        <p>가장 잘 어울리는 직업을 추천해드려요.</p>
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/" className={styles.start__button}>
                            처음으로
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <Link to="/test1" className={styles.start__button}>
                            테스트 하기
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <CopyToClipboard text={url}>
                            <button
                                className={styles.start__button}
                                onClick={copyAlert}
                            >
                                링크복사
                                <FontAwesomeIcon
                                    icon={faCopy}
                                    className={styles.icon}
                                />
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
