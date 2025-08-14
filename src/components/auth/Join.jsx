import { useDispatch } from 'react-redux';
import { JoinStyle, ModalOverlay } from './style';
import { authActions } from '../../store/modules/common/authSlice';
import { useRef, useState } from 'react';
import {
    fnSignUser,
    getDayOptions,
    getMonthOptions,
    getYearOptions,
    ValidateJoin,
} from '../../utils/Join';
import { Tooltip } from 'react-tooltip';
import { hashPassword } from '../../utils/Crypto';

const Join = () => {
    const [btnEnable, setBtnEnable] = useState(false);
    const [tooltip, setTooltip] = useState({
        id: '',
        message: '',
    });
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

    const onChangeValue = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        let flag = false;
        if (formData.email !== '') {
            flag = !flag;
        }
        setBtnEnable(flag);

        setTooltip({ id: '', message: '' });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const result = ValidateJoin(formData);
        switch (result.error) {
            case -1:
                setTooltip({ id: 'email', message: result.message });
                refs.email.current.focus();
                return;
            case -2:
                setTooltip({ id: 'password1', message: result.message });
                refs.password1.current.focus();
                return;
            case -3:
                setTooltip({ id: 'password2', message: result.message });
                refs.password2.current.focus();
                return;
            case -4:
                setTooltip({ id: 'password1', message: result.message });
                refs.password2.current.focus();
                return;
            case -5:
                setTooltip({ id: 'year', message: result.message });
                return;
            case -6:
                setTooltip({ id: 'phone', message: result.message });
                refs.phone.current.focus();
                return;
            case 0:
                fnSignUser(formData);

                // input 태그 값 초기화
                Object.values(refs).forEach((ref) => {
                    if (ref.current) {
                        ref.current.value = '';
                    }
                });

                // 회원가입 페이지 닫고, 로그인 페이지 열기
                dispatch(authActions.setJoinModalState(false));
                dispatch(authActions.setLoginModalState(true));
                return;
        }
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            formSubmit(e);
        }
    };
    // add select options
    const years = getYearOptions();
    const months = getMonthOptions();
    const days = getDayOptions();

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
                        <input
                            ref={refs.email}
                            type="text"
                            name="email"
                            placeholder="이메일 입력"
                            autoComplete="off"
                            onChange={onChangeValue}
                            onKeyDown={onKeyDown}
                            data-tooltip-id="email-tooltip"
                            data-tooltip-content={tooltip.id === 'email' ? tooltip.message : ''}
                            data-tooltip-variant="error"
                        />
                        <Tooltip
                            id="email-tooltip"
                            place="bottom-start"
                            isOpen={tooltip.id === 'email'}
                        />
                        <input
                            ref={refs.password1}
                            type="password"
                            name="password1"
                            placeholder="비밀번호 입력 ( 문자, 숫자, 특수문자 포함 8 ~ 20자 )"
                            onChange={onChangeValue}
                            onKeyDown={onKeyDown}
                            data-tooltip-id="password1-tooltip"
                            data-tooltip-content={tooltip.id === 'password1' ? tooltip.message : ''}
                            data-tooltip-variant="error"
                        />
                        <Tooltip
                            id="password1-tooltip"
                            place="bottom-start"
                            isOpen={tooltip.id === 'password1'}
                        />
                        <input
                            ref={refs.password2}
                            type="password"
                            name="password2"
                            placeholder="비밀번호 재입력"
                            onChange={onChangeValue}
                            onKeyDown={onKeyDown}
                            data-tooltip-id="password2-tooltip"
                            data-tooltip-content={tooltip.id === 'password1' ? tooltip.message : ''}
                            data-tooltip-variant="error"
                        />
                        <Tooltip
                            id="password2-tooltip"
                            place="bottom-start"
                            isOpen={tooltip.id === 'password2'}
                        />
                        <div className="birth">
                            <span>생년월일</span>
                            <select
                                className="year"
                                name="year"
                                onChange={onChangeValue}
                                data-tooltip-id="year-tooltip"
                                data-tooltip-content={tooltip.id === 'year' ? tooltip.message : ''}
                                data-tooltip-variant="error"
                            >
                                <option value="">년도</option>
                                {years.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>
                            <Tooltip
                                id="year-tooltip"
                                place="bottom-start"
                                isOpen={tooltip.id === 'year'}
                            />
                            <select className="month" name="month" onChange={onChangeValue}>
                                <option value="">월</option>
                                {months.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>
                            <select className="day" name="day" onChange={onChangeValue}>
                                <option value="">일</option>
                                {days.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>
                        </div>

                        <input
                            ref={refs.phone}
                            type="text"
                            name="phone"
                            placeholder="휴대폰  번호 입력 ( ‘-’제외 11자리 입력 )"
                            onChange={onChangeValue}
                            onKeyDown={onKeyDown}
                            data-tooltip-id="phone-tooltip"
                            data-tooltip-content={tooltip.id === 'phone' ? tooltip.message : ''}
                            data-tooltip-variant="error"
                        />
                        <Tooltip
                            id="phone-tooltip"
                            place="bottom-start"
                            isOpen={tooltip.id === 'phone'}
                        />
                    </form>
                    <button
                        onClick={formSubmit}
                        className={`join-btn ${btnEnable ? 'active' : ''}`}
                        disabled={!btnEnable}
                    >
                        회원가입
                    </button>
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
