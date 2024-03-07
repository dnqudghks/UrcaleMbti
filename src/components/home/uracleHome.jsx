import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home/uracleHome.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FacebookBtn from '../shareSNS/facebookShareButton';
import KakaoBtn from '../shareSNS/kakaoShareButton';
import TwitterBtn from '../shareSNS/twitterShareButton';

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
                            src="img/uracle.png"
                            alt="로고"
                        />
                    </div>
                    <div className={styles.middle}>
                        <h2 className={styles.header}>
                            유라클에서 제공하는 <br />
                            <br />
                            MBTI유형 검사입니다.
                        </h2>
                        <p>총 16개의 유형의 MBTI성향을 기반으로</p>
                        <p>자신의 성격유형을 확인해보세요!</p>
                        <br />
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/tripMbti" className={styles.start__button}>
                            추천 여행지 테스트
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <Link to="/test1" className={styles.start__button}>
                            찰떡 직업 MBTI 테스트
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <Link to="/test2" className={styles.start__button}>
                            퍼스널 컬러 셩격 유형 테스트
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <Link to="/test3" className={styles.start__button}>
                            겨울 간식 성격 유형 테스트
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <Link to="/test4" className={styles.start__button}>
                            음식 MENU 연애 테스트
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <div className={styles.buttonarea}>
                            <KakaoBtn />
                            <FacebookBtn />
                            <TwitterBtn />
                        </div>
                        <div className={styles.copyarea}>
                            <CopyToClipboard text={url}>
                                <button
                                    className={styles.copy__button}
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
            </div>
        </>
    );
};

export default Home;
