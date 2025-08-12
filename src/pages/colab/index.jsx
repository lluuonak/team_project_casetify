import { useNavigate } from 'react-router-dom';
import Section1 from '../../components/colab/section1';
import Section2 from '../../components/colab/section2';
import Section3 from '../../components/colab/section3';

const Colab = () => {
    // const navigate = useNavigate();
    // const onGo = (title) => {
    //     navigate(`/colab/${title}`);
    // };
    return (
        <>
            {/* 여기 아래 주석 처리 왜 해놓으셨지 */}
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    );
};

export default Colab;
