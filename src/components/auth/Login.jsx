import { useRef, useState } from 'react';
import { LoginStyle, ModalOverlay } from './style';
import { Link } from 'react-router-dom';
import { ValidateLogin } from '../../utils/Login';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/common/authSlice';

const Login = () => {
    const [emailState, setEmailState] = useState(true);
    const [passwordState, setPasswordState] = useState(true);
    const [btnEnable, setBtnEnable] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const emailRef = useRef(null);
    const pwdRef = useRef(null);

    const dispatch = useDispatch();

    const emailInputOnChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        let flag = false;
        if (value !== '') {
            flag = !flag;
            setEmailState(true);
        }
        setBtnEnable(flag);
    };

    const passwordInputOnChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        let flag = false;
        if (value !== '') {
            flag = !flag;
            setPasswordState(true);
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const result = ValidateLogin(formData);

        switch (result.error) {
            case -1:
                setEmailState(false);
                emailRef.current.focus();
                return;
            case -2:
                setPasswordState(false);
                pwdRef.current.focus();
                return;
            case 0:
                alert('성공');
                return;
        }
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            formSubmit(e);
        }
    };

    return (
        <ModalOverlay>
            <LoginStyle>
                <div className="inner">
                    <h2 className="logo">
                        <img src="/modal-logo.png" alt="" />
                    </h2>

                    <form onSubmit={formSubmit}>
                        <div className="input-area">
                            <label htmlFor="email">이메일</label>
                            <input
                                ref={emailRef}
                                type="email"
                                name="email"
                                placeholder="example@example.com"
                                onChange={emailInputOnChange}
                                onKeyDown={onKeyDown}
                            />
                            {!emailState && <span>사용할수 없는 아이디 입니다</span>}
                        </div>
                        <div className="input-area">
                            <label htmlFor="password">비밀번호</label>
                            <input
                                ref={pwdRef}
                                type="password"
                                name="password"
                                placeholder="입력해주세요"
                                onChange={passwordInputOnChange}
                                onKeyDown={onKeyDown}
                            />
                            {!passwordState && <span>비밀번호를 확인해주세요</span>}
                        </div>
                    </form>
                    <button
                        onClick={formSubmit}
                        className={`login-btn ${btnEnable ? 'active' : ''}`}
                        disabled={!btnEnable}
                    >
                        로그인
                    </button>

                    <ul className="login-nav">
                        <li style={{ width: 100 }}>
                            <Link
                                to=""
                                onClick={() => {
                                    dispatch(authActions.setLoginModalState(false));
                                    dispatch(authActions.setJoinModalState(true));
                                }}
                            >
                                회원가입
                            </Link>
                        </li>
                        <li>
                            <Link to="">이메일 찾기</Link>
                        </li>
                        <li>
                            <Link to="">비밀번호 찾기</Link>
                        </li>
                    </ul>
                    <ul className="sns-login">
                        <li>
                            <Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="31"
                                    height="30"
                                    viewBox="0 0 31 30"
                                    fill="none"
                                >
                                    <path
                                        d="M8 15C7.9982 16.7706 8.62287 18.4847 9.76342 19.8389C10.904 21.1932 12.4869 22.1003 14.232 22.3996C15.977 22.699 17.7717 22.3713 19.2984 21.4746C20.8251 20.5779 21.9854 19.1699 22.5737 17.5H15.5V12.5H27.7563V17.5H27.75C26.5912 23.205 21.5475 27.5 15.5 27.5C8.59625 27.5 3 21.9038 3 15C3 8.09625 8.59625 2.5 15.5 2.5C17.5431 2.49855 19.5554 2.99844 21.3604 3.95583C23.1653 4.91323 24.7078 6.29888 25.8525 7.99125L21.755 10.86C20.8655 9.51552 19.5665 8.49342 18.0504 7.94521C16.5344 7.397 14.8821 7.35186 13.3384 7.81648C11.7947 8.2811 10.4418 9.23076 9.48026 10.5247C8.51869 11.8186 7.99962 13.3879 8 15Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="31"
                                    height="30"
                                    viewBox="0 0 31 30"
                                    fill="none"
                                >
                                    <path
                                        d="M15.5 3.75C22.75 3.75 28.6262 8.33 28.6262 13.9813C28.6262 19.6313 22.75 24.2113 15.5012 24.2113C14.7795 24.21 14.0585 24.1641 13.3425 24.0738L7.83247 27.6775C7.20622 28.0088 6.98497 27.9725 7.24247 27.1613L8.35747 22.5638C4.75747 20.7388 2.37622 17.5763 2.37622 13.9813C2.37622 8.33125 8.25122 3.75 15.5012 3.75M22.8862 13.825L24.7237 12.045C24.8297 11.9349 24.8889 11.7879 24.8887 11.6351C24.8885 11.4822 24.829 11.3354 24.7227 11.2255C24.6164 11.1157 24.4717 11.0513 24.3189 11.0461C24.1661 11.0409 24.0173 11.0952 23.9037 11.1975L21.4937 13.53V11.6025C21.4937 11.446 21.4316 11.296 21.3209 11.1853C21.2103 11.0747 21.0602 11.0125 20.9037 11.0125C20.7472 11.0125 20.5972 11.0747 20.4865 11.1853C20.3759 11.296 20.3137 11.446 20.3137 11.6025V14.7988C20.2929 14.8901 20.2929 14.9849 20.3137 15.0763V16.875C20.3137 17.0315 20.3759 17.1815 20.4865 17.2922C20.5972 17.4028 20.7472 17.465 20.9037 17.465C21.0602 17.465 21.2103 17.4028 21.3209 17.2922C21.4316 17.1815 21.4937 17.0315 21.4937 16.875V15.1713L22.0275 14.655L23.8125 17.1963C23.857 17.2597 23.9137 17.3137 23.9791 17.3553C24.0446 17.3969 24.1176 17.4251 24.194 17.4385C24.2703 17.4518 24.3486 17.45 24.4243 17.4331C24.4999 17.4162 24.5715 17.3846 24.635 17.34C24.6984 17.2954 24.7525 17.2388 24.794 17.1734C24.8356 17.1079 24.8638 17.0349 24.8772 16.9585C24.8905 16.8821 24.8887 16.8039 24.8718 16.7282C24.8549 16.6525 24.8233 16.5809 24.7787 16.5175L22.8862 13.825ZM19.1887 16.23H17.3637V11.6213C17.3567 11.4696 17.2916 11.3265 17.1818 11.2217C17.0721 11.1169 16.9261 11.0584 16.7743 11.0584C16.6226 11.0584 16.4766 11.1169 16.3669 11.2217C16.2571 11.3265 16.192 11.4696 16.185 11.6213V16.82C16.185 17.145 16.4475 17.41 16.7737 17.41H19.1887C19.3452 17.41 19.4953 17.3478 19.6059 17.2372C19.7166 17.1265 19.7787 16.9765 19.7787 16.82C19.7787 16.6635 19.7166 16.5135 19.6059 16.4028C19.4953 16.2922 19.3452 16.23 19.1887 16.23ZM11.8675 14.8663L12.7375 12.7313L13.535 14.865L11.8675 14.8663ZM15.0212 15.475L15.0237 15.455C15.0233 15.3064 14.9666 15.1635 14.865 15.055L13.5575 11.555C13.5027 11.3882 13.3983 11.2421 13.2582 11.1362C13.1182 11.0304 12.9491 10.9698 12.7737 10.9625C12.5972 10.9624 12.4247 11.0157 12.2791 11.1155C12.1334 11.2152 12.0213 11.3566 11.9575 11.5213L9.87997 16.615C9.82079 16.7599 9.82159 16.9223 9.88219 17.0666C9.94279 17.2109 10.0582 17.3252 10.2031 17.3844C10.348 17.4436 10.5104 17.4428 10.6547 17.3822C10.799 17.3216 10.9133 17.2061 10.9725 17.0613L11.3875 16.045H13.975L14.3475 17.045C14.3729 17.1197 14.413 17.1886 14.4656 17.2476C14.5181 17.3065 14.5819 17.3543 14.6532 17.3882C14.7245 17.422 14.8019 17.4412 14.8808 17.4446C14.9597 17.4479 15.0385 17.4355 15.1124 17.4078C15.1864 17.3802 15.254 17.3381 15.3114 17.2838C15.3688 17.2296 15.4147 17.1644 15.4464 17.0921C15.4781 17.0198 15.495 16.9418 15.496 16.8629C15.4971 16.784 15.4823 16.7056 15.4525 16.6325L15.0212 15.475ZM10.8675 11.6275C10.8678 11.55 10.8528 11.4733 10.8234 11.4016C10.7939 11.33 10.7506 11.2649 10.6958 11.21C10.6411 11.1552 10.5761 11.1117 10.5045 11.0821C10.4329 11.0525 10.3562 11.0373 10.2787 11.0375H6.22247C6.06599 11.0375 5.91592 11.0997 5.80528 11.2103C5.69463 11.321 5.63247 11.471 5.63247 11.6275C5.63247 11.784 5.69463 11.934 5.80528 12.0447C5.91592 12.1553 6.06599 12.2175 6.22247 12.2175H7.67247V16.8875C7.67247 17.044 7.73463 17.194 7.84528 17.3047C7.95592 17.4153 8.10599 17.4775 8.26247 17.4775C8.41895 17.4775 8.56902 17.4153 8.67966 17.3047C8.79031 17.194 8.85247 17.044 8.85247 16.8875V12.2175H10.2775C10.355 12.2178 10.4319 12.2028 10.5036 12.1733C10.5754 12.1437 10.6405 12.1003 10.6954 12.0454C10.7503 11.9906 10.7937 11.9254 10.8232 11.8537C10.8528 11.7819 10.8678 11.7051 10.8675 11.6275Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_1081_15054)">
                                        <path
                                            d="M14.7389 11.7394L6.954 0.5H0.5V21.5H7.26025V10.2615L15.046 21.5H21.5V0.5H14.7389V11.7394Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1081_15054">
                                            <rect
                                                width="21"
                                                height="21"
                                                fill="white"
                                                transform="translate(0.5 0.5)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
                <i
                    className="close"
                    onClick={() => {
                        dispatch(authActions.setLoginModalState(false));
                    }}
                >
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
            </LoginStyle>
        </ModalOverlay>
    );
};

export default Login;
