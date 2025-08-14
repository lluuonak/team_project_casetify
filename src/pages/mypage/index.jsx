import { useSelector } from 'react-redux';
import TitleSection from '../../components/title';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Section1 from '../../components/mypage/section1';

const MyPage = () => {
    const { isLogin } = useSelector((state) => state.auth);
    const navigator = useNavigate();

    // useEffect(() => {
    //     if (!isLogin) {
    //         navigator('/');
    //     }
    // }, []);
    return (
        <>
            <TitleSection title={'MY PAGE'} />
            <Section1 />
        </>
    );
};

export default MyPage;
