import { useCallback, useState } from 'react';
import { UserInfoStyle } from './style';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const scriptUrl = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const UserInfo = ({ formData, setFormData }) => {
    const open = useDaumPostcodePopup(scriptUrl);

    const [userInput, setUserInput] = useState(false);

    const handleComplete = (data) => {
        setFormData((prev) => ({
            ...prev,
            postcode: data.zonecode,
            address: data.roadAddress || data.jibunAddress,
        }));
    };

    const openPostcode = () => {
        open({ onComplete: handleComplete });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <UserInfoStyle>
            <div className="user-info">
                <p>
                    <label htmlFor="orderUser">주문하시는 분</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="">배송 받으시는 분</label>
                    <strong>{formData.name}</strong>
                </p>
            </div>
            <div className="address-info">
                <label htmlFor="addr">주소</label>
                <span onClick={openPostcode}>우편번호</span>
                <p>
                    <input
                        style={{ width: 130, textAlign: 'center' }}
                        type="text"
                        placeholder="우편번호"
                        readOnly
                        value={formData.postcode}
                    />
                    <input type="text" placeholder="기본주소" readOnly value={formData.address} />
                    <input
                        type="text"
                        placeholder="나머지주소"
                        name="detailAddress"
                        value={formData.detailAddress}
                        onChange={handleChange}
                    />
                </p>
            </div>
            <div className="phone-info">
                <label htmlFor="">핸드폰번호</label>
                <input
                    type="text"
                    placeholder="010-xxxx-xxxx"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="email-info">
                <label htmlFor="">이메일</label>
                <p>
                    <input
                        type="text"
                        placeholder="이메일주소"
                        value={formData.emailId || ''}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                emailId: e.target.value,
                            }))
                        }
                    />
                    <span>@</span>
                    {!userInput && (
                        <select
                            value={formData.emailDomain || ''}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    emailDomain: e.target.value,
                                }))
                            }
                        >
                            <option value="">선택해주세요</option>
                            <option value="naver.com">naver.com</option>
                            <option value="google.com">google.com</option>
                            <option value="kakao.com">kakao.com</option>
                        </select>
                    )}
                    {userInput && (
                        <input
                            type="text"
                            placeholder="직접 입력"
                            value={formData.emailDomain || ''}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    emailDomain: e.target.value,
                                }))
                            }
                        />
                    )}
                    <span className="btn" onClick={() => setUserInput(!userInput)}>
                        직접입력
                    </span>
                </p>
            </div>
            <div className="context-area">
                <label htmlFor=""></label>
                <div className="text">
                    <p>이메일주소를 통해 주문 처리과정을 보내드립니다</p>
                    <p>이메일주소란에는 반드시 수신가능한 주소를 입력해주세요</p>
                </div>
            </div>
        </UserInfoStyle>
    );
};

export default UserInfo;
