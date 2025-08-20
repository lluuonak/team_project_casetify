import styled from 'styled-components';
import { CustomStyle } from './style';

const index = () => {
    return (
        <CustomStyle>
            <div className="sample-image">
                <img src="" alt="" />
                <div className="btns">
                    <span>재설정</span>
                    <span>확대</span>
                </div>
            </div>
            <div className="settings">
                <div className="model">
                    <h6>기기 모델</h6>
                    <ul className="model">
                        <li>
                            <img src="" alt="" />
                            <span>애플</span>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <span>삼성</span>
                        </li>
                    </ul>                    
                </div>
                <div className="type">
                    <h6>기기 타입</h6>
                    <ul className="models">
                        <li>
                            <img src="" alt="" />
                            <span>바운스</span>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <span>임팩트</span>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <span>클리어</span>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <span>미러</span>
                        </li>
                    </ul>                    
                </div>
                <div className="image-upload">
                    <h6>이미지 업로드</h6>
                    <ul className="model"> 
                        <li>
                            <img src="" alt="" />
                            <span>갤러리</span>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <span>없음</span>
                        </li>
                    </ul>                    
                </div>
            </div>
            
        </CustomStyle>
    );
};

export default index;