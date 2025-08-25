import styled from 'styled-components';
import { CustomStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { customActions } from '../../store/modules/customSlice';
import { useState } from 'react';
// import { ModalOverlay } from '../auth/style';

const Custom = () => {
    const dispatch = useDispatch();
    const { customState, setCustomState } = useSelector((state) => state.custom);
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value.slice(0, 12));
    };

    return (
        <CustomStyle>
            <div className="sample-image">
                <img
                    className="custom-image"
                    src="../images/custom/custom_iphone.png"
                    alt="custom image"
                />
                <div className="btns">
                    <div className="btn reset">
                        <img src="../images/custom/reset.svg" alt="reset" />
                        <span>재설정</span>
                    </div>
                    <div className="btn zoom">
                        <img src="../images/custom/zoom.svg" alt="zoom" />
                        <span>확대</span>
                    </div>
                </div>
            </div>
            <div className="settings-wrap">
                <div className="settings">
                    <div className="setup model-wrap">
                        <h6>기기 모델</h6>
                        <ul className="model">
                            <li>
                                <div className="img-bg">
                                    {/* 경로 나중에 수정 */}
                                    <img src="../images/custom/apple.svg" alt="애플" />
                                </div>
                                <span>애플</span>
                            </li>
                            <li>
                                <div className="img-bg">
                                    <img src="../images/custom/samsung.svg" alt="삼성" />
                                </div>
                                <span>삼성</span>
                            </li>
                        </ul>
                    </div>
                    <div className="setup type-wrap">
                        <h6>기기 타입</h6>
                        <ul className="type">
                            <li>
                                <div className="img-bg">
                                    <img src="../images/custom/바운스.svg" alt="" />
                                </div>
                                <span>바운스</span>
                            </li>
                            <li>
                                <div className="img-bg">
                                    <img src="../images/custom/임팩트.svg" alt="" />
                                </div>
                                <span>임팩트</span>
                            </li>
                            <li>
                                <div className="img-bg">
                                    <img src="../images/custom/클리어.svg" alt="" />
                                </div>
                                <span>클리어</span>
                            </li>
                            <li>
                                <div className="img-bg">
                                    <img src="../images/custom/미러.svg" alt="" />
                                </div>
                                <span>미러</span>
                            </li>
                        </ul>
                    </div>
                    <div className="setup image-upload-wrap">
                        <h6>이미지 업로드</h6>
                        <ul className="image-upload">
                            <li>
                                <div className="img-bg">
                                    <img src="../images/custom/갤러리.svg" alt="" />
                                </div>
                                <span>갤러리</span>
                            </li>
                            <li>
                                <div className="img-bg">
                                    <img src="../images/custom/no_image.svg" alt="" />
                                </div>
                                <span>없음</span>
                            </li>
                        </ul>
                    </div>
                    <div className="font-color-wrap">
                        <h6>폰트 색상</h6>
                        <ul className="font-color">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="text-wrap">
                        <h6>커스텀 문구</h6>
                        <input
                            type="text"
                            value={text}
                            maxlength="12"
                            placeholder="커스텀 문구를 입력해주세요"
                            onChange={handleChange}
                        />
                        <p class="char-count">
                            <span id="current-count">{text.length}</span> /
                            <span id="maxLength"> 12</span>
                        </p>
                    </div>
                </div>
                <div className="price">
                    <strong>₩89,000</strong>
                </div>
                <div className="buying">
                    <button>장바구니 담기</button>
                    <button>바로 구매</button>
                </div>
            </div>
            <i className="close" onClick={() => dispatch(customActions.setCustomState(false))}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                >
                    <path
                        d="M15 15L7.5 7.5M15 15L22.5 22.5M15 15L22.5 7.5M15 15L7.5 22.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </i>
        </CustomStyle>
    );
};

export default Custom;
