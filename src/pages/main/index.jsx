import { useEffect } from 'react';
import { Section1, Section2, Section3, Section4 } from '../../components/main';
import { useDispatch, useSelector } from 'react-redux';
import { mainActions } from '../../store/modules/main/mainSlice';

const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // 메인페이지 설정
        dispatch(mainActions.setMainPage());

        const handleScroll = () => {
            dispatch(mainActions.setScrollY(window.scrollY));
            dispatch(mainActions.setHeaderShow(window.scrollY));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </>
    );
};

export default Main;
