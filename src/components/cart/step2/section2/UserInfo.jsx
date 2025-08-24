import { useCallback, useState } from 'react';
import { UserInfoStyle } from './style';
// import { useDaumPostcodePopup } from 'react-daum-postcode';

const scriptUrl = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const UserInfo = () => {
    const open = useDaumPostcodePopup(scriptUrl);

    const [postcode, setPostcode] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');

    const [userInput, setUserInput] = useState(false);

    const handleComplete = (data) => {
        setPostcode(data.zonecode); //  우편번호
        setAddress(data.roadAddress || data.jibunAddress); // 기본주소
    };

    const openPostcode = () => {
        open({ onComplete: handleComplete });
    };
    return (
        <UserInfoStyle>
            <div className="user-info">
                <p>
                    <label htmlFor="orderUser">주문하시는 분</label>
                    <strong>홍길동</strong>
                </p>
                <p>
                    <label htmlFor="">배송 받으시는 분</label>
                    <strong>홍길동</strong>
                </p>
            </div>
            <div className="address-info">
                <label htmlFor="addr">주소</label>
                <span onClick={openPostcode}>우편번호</span>
                <p>
                    <input
                        style={{ width: 120, textAlign: 'center' }}
                        type="text"
                        placeholder="우편번호"
                        readOnly
                        value={postcode}
                    />
                    <input type="text" placeholder="기본주소" readOnly value={address} />
                    <input
                        type="text"
                        placeholder="나머지주소"
                        value={detailAddress}
                        onChange={(e) => setDetailAddress(e.target.value)}
                    />
                </p>
            </div>
            <div className="phone-info">
                <label htmlFor="">핸드폰번호</label>
                <strong>010 - xxxx - xxxx</strong>
            </div>
            <div className="email-info">
                <label htmlFor="">이메일</label>
                <p>
                    <input type="text" name="" id="" placeholder="이메일주소" />
                    <span>@</span>
                    {!userInput && (
                        <select name="" id="">
                            <option value="">선택해주세요</option>
                            <option value="naver">naver.com</option>
                            <option value="google">google.com</option>
                            <option value="kakao">kakao.com</option>
                        </select>
                    )}
                    {userInput && <input type="text" name="" id="" />}
                    <span
                        className="btn"
                        onClick={() => {
                            setUserInput(!userInput);
                        }}
                    >
                        직접입력
                    </span>
                </p>
            </div>
        </UserInfoStyle>
    );
};

export default UserInfo;
