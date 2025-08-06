import { useEffect } from 'react';
import { Section1, Section2 } from '../../components/main';
import { useDispatch, useSelector } from 'react-redux';
import { mainActions } from '../../store/modules/mainSlice';

const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const main = document.querySelector('main');
            const mainTop = main?.offsetTop || 0;

            // 예시: main의 100px 이상 내려가면 로고 보여주기
            if (scrollY > mainTop + 1000) {
                dispatch(mainActions.scollMove(scrollY));
            } else {
                dispatch(mainActions.disableLogo());
            }
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
        </>
    );
};

export default Main;
