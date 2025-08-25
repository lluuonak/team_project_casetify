import { useSelector } from 'react-redux';
import TitleSection from '../../components/title';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Section1 from '../../components/mypage/section1';
import Section2 from '../../components/mypage/section2';
import Section3 from '../../components/mypage/section3';

const MyPage = () => {
    const { isLogin } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin === 'false' || isLogin === false) {
            navigate('/');
        }
    }, [isLogin]); // ✅ isLogin을 의존성에 추가

    return (
        <>
            <TitleSection title={'MY PAGE'} />
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    );
};

export default MyPage;
