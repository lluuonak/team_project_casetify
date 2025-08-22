import { useState } from 'react';
import { Section4Style } from './style';

const Section4 = ({ formData, setFormData }) => {
    const [checked, setChecked] = useState(false);
    const [allCheck, setAllCheck] = useState(false);

    const handleAllCheck = () => {
        const newValue = !allCheck; // 전체 체크 상태 토글
        setAllCheck(newValue);

        // agree1, agree2 모두 newValue로 세팅
        setFormData((prev) => ({
            ...prev,
            agree1: newValue,
            agree2: newValue,
        }));
    };

    const handleAgreeCheck = (id) => {
        // 개별 agree 체크 토글
        const newFormData = {
            ...formData,
            [id]: !formData[id],
        };

        setFormData(newFormData);

        // agree1, agree2 둘 다 true면 allCheck true, 아니면 false
        setAllCheck(newFormData.agree1 && newFormData.agree2);
    };
    return (
        <Section4Style>
            <div className="inner">
                <h3>결제방법</h3>
                <div className="payment-method">
                    <div className="part">
                        <div>
                            <input type="radio" name="payment" id="card" disabled readOnly />
                            <label htmlFor="card">신용카드</label>
                        </div>
                        <div>
                            <input type="radio" name="payment" id="none" checked readOnly />
                            <label htmlFor="none">무통장입금</label>
                        </div>
                        <div>
                            <input type="radio" name="payment" id="" disabled readOnly />
                            <label htmlFor="kakao">카카오페이</label>
                        </div>
                        <div>
                            <input type="radio" name="payment" id="naver" disabled readOnly />
                            <label htmlFor="naver">네이버페이</label>
                        </div>
                        <div>
                            <input type="radio" name="payment" id="virtual" disabled readOnly />
                            <label htmlFor="virtual">가상계좌</label>
                        </div>
                        <div>
                            <input type="radio" name="payment" id="phone" disabled readOnly />
                            <label htmlFor="phone">핸드폰결제</label>
                        </div>
                    </div>
                    <div className="h-35">
                        <select name="" id="">
                            <option value="">00 은행 : 0000- 00-0000 예금주명</option>
                        </select>
                        <i>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.7071 16.2064C12.5195 16.3938 12.2652 16.4992 12.0001 16.4992C11.7349 16.4992 11.4806 16.3938 11.2931 16.2064L5.63606 10.5494C5.54055 10.4571 5.46437 10.3468 5.41196 10.2248C5.35955 10.1028 5.33197 9.97155 5.33081 9.83877C5.32966 9.70599 5.35496 9.57431 5.40524 9.45141C5.45552 9.32852 5.52978 9.21686 5.62367 9.12297C5.71756 9.02908 5.82921 8.95482 5.95211 8.90454C6.07501 8.85426 6.20669 8.82896 6.33947 8.83012C6.47224 8.83127 6.60347 8.85886 6.72547 8.91126C6.84747 8.96367 6.95782 9.03986 7.05006 9.13537L12.0001 14.0854L16.9501 9.13537C17.1387 8.95321 17.3913 8.85241 17.6535 8.85469C17.9157 8.85697 18.1665 8.96214 18.3519 9.14755C18.5373 9.33296 18.6425 9.58377 18.6447 9.84597C18.647 10.1082 18.5462 10.3608 18.3641 10.5494L12.7071 16.2064Z"
                                    fill="#888888"
                                />
                            </svg>
                        </i>
                        <span>주문후 24시간동안 미입금시 자동 취소 됩니다</span>
                    </div>
                    <div className="h-35">
                        <div className="part">
                            <label htmlFor="">입금자명</label>
                            <input
                                type="text"
                                readOnly
                                placeholder="입금자명 ( 미입력시 주문자명 )"
                            />
                        </div>
                    </div>
                    <div className="last">
                        <input
                            type="radio"
                            name=""
                            id="cash"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                        <label htmlFor="cash">현금영수증 신청</label>
                    </div>
                    <div className="agreement">
                        <div className="part all">
                            <label htmlFor="all">전체동의</label>
                            <input
                                type="checkbox"
                                name=""
                                id="all"
                                checked={allCheck}
                                onChange={handleAllCheck} // () 빼야 함
                            />
                        </div>
                        <div className="agree-section">
                            <div className="part">
                                <label htmlFor="agree1">구매조건 확인 및 결제진행에 동의</label>
                                <input
                                    type="checkbox"
                                    name=""
                                    id="agree1"
                                    checked={formData.agree1}
                                    onChange={() => handleAgreeCheck('agree1')}
                                />
                            </div>
                            <div className="part">
                                <label htmlFor="agree2">
                                    상기약관 및 개인정보 수징 이용에 대한 동의 내용 동의
                                </label>
                                <input
                                    type="checkbox"
                                    name=""
                                    id="agree2"
                                    checked={formData.agree2}
                                    onChange={() => handleAgreeCheck('agree2')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section4Style>
    );
};

export default Section4;
