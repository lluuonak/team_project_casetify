import { useDispatch } from 'react-redux';
import { JoinStyle, ModalOverlay } from './style';
import { authActions } from '../../store/modules/common/authSlice';
import { useRef, useState } from 'react';

const Join = () => {
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        password2: '',
        year: '',
        month: '',
        day: '',
        phone: '',
    });

    const refs = {
        email: useRef(null),
        password1: useRef(null),
        password2: useRef(null),
        year: useRef(null),
        month: useRef(null),
        day: useRef(null),
        phone: useRef(null),
    };

    const dispatch = useDispatch();

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const checkDuplicate = () => {
        formData.email;
    };
    return (
        <ModalOverlay>
            <JoinStyle>
                <div className="inner">
                    <h2 className="logo">
                        <img src="/modal-logo.png" alt="" />
                    </h2>
                    <div className="text-area">
                        <strong>회원가입</strong>
                        <span>가입을 통해 다양한 서비스를 만나보세요</span>
                    </div>
                    <form>
                        <div className="email-input">
                            <input
                                ref={refs.email}
                                type="text"
                                name="email"
                                placeholder="이메일 입력"
                                onChange={onChangeInput}
                            />
                            <div className="duplicate-btn" onClick={checkDuplicate}>
                                중복확인
                            </div>
                        </div>
                        <input
                            ref={refs.password1}
                            type="password"
                            name="password1"
                            placeholder="비밀번호 입력 ( 문자, 숫자, 특수문자 포함 8 ~ 20자 )"
                            onChange={onChangeInput}
                        />
                        <input
                            ref={refs.password2}
                            type="password"
                            name="password2"
                            placeholder="비밀번호 재입력"
                            onChange={onChangeInput}
                        />
                        <div className="birth">
                            <span>생년월일</span>
                            <select className="year" name="year">
                                <option value="">년도</option>
                            </select>
                            <select className="month" name="month">
                                <option value="">월</option>
                            </select>
                            <select className="day" name="day">
                                <option value="">일</option>
                            </select>
                        </div>
                    </form>
                </div>
                <i
                    className="close"
                    onClick={() => {
                        dispatch(authActions.setJoinModalState(false));
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
            </JoinStyle>
        </ModalOverlay>
    );
};

export default Join;
