import { useNavigate } from 'react-router-dom';
import { Section3Style } from './style';
// 아래 테스트
import { useDispatch, useSelector } from 'react-redux';
import { customActions } from '../../../store/modules/customSlice';
import Custom from '../../custom';
import { useEffect } from 'react';
// 여기까지

const Section3 = () => {
    const navigate = useNavigate();
    const onGo = (title) => {
        navigate(`/colab/${title}`);
    };

    // 아래는 테스트용
    const dispatch = useDispatch();
    const { customState } = useSelector((state) => state.custom);
    const customClick = () => {
        dispatch(customActions.setCustomState(true));
    };

    // useEffect(() => {
    //     if (customState) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // }, [customState]);
    // 여기까지

    return (
        <Section3Style>
            <div className="colab-all">
                {/* <div className="more colab-archieve">
                    <h4>CoLab Archieve</h4>
                    <p>지난 콜라보를 둘러보세요</p>
                </div> */}
                {/* 이거 다시 살리기 */}
                <div className="more colab-archieve" onClick={customClick}>
                    {/* 여기까지 */}
                    <h4>CoLab Archieve</h4>
                    <p>지난 콜라보를 둘러보세요</p>
                </div>
                <div className="more next-up">
                    <h4>Next Up</h4>
                    <p>다가올 콜라보를 미리 엿보세요</p>
                </div>
            </div>
            {/* 이거 테스트용. 지우기 */}
            {customState && (
                <>
                    {/* 배경 오버레이 - 클릭시 모달 닫힘 */}
                    <div
                        className="overlay"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1000,
                        }}
                    />
                    <Custom />
                </>
            )}
            {/* 여기까지 */}
            <div className="text">
                <strong>No right answer.</strong>
                <strong>Just your own way.</strong>
            </div>
        </Section3Style>
    );
};

export default Section3;
