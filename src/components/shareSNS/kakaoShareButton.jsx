import React, { useEffect } from 'react';
import styles from './shareIcon.module.css';
const KakaoShareButton = () => {
    useEffect(() => {
        KakaoShareButton();
    }, []);
    const KakaoShareButton = () => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
            const kakao = window.Kakao;
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                kakao.init(import.meta.env.VITE_KAKAO_KEY);
            }
            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: '유라클 MBTI',
                    description: '나의 성격유형을 알아보자!',
                    imageUrl:
                        'https://uracle.co.kr/wp-content/uploads/2021/04/ci_%ED%9D%B0%EC%83%89-e1617930660493.png',
                    link: {
                        mobileWebUrl: 'https://felizmbti.netlify.app/',
                        webUrl: 'https://felizmbti.netlify.app/',
                    },
                },
                buttons: [
                    {
                        title: '테스트 하기',
                        link: {
                            mobileWebUrl: 'https://felizmbti.netlify.app/',
                            webUrl: 'https://felizmbti.netlify.app/',
                        },
                    },
                ],
            });
        }
    };
    return (
        <div className="kakao-share-button">
            {/* Kakao share button */}
            <a href="/#" id="kakao-link-btn">
                <img
                    src="/img/kakaolink_btn_medium.png"
                    alt="kakao-share-icon"
                    className={styles.kakao__icon}
                />
            </a>
        </div>
    );
};
export default KakaoShareButton;
