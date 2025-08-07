import { useNavigate } from 'react-router-dom';
// import Section1 from '../../components/colab/section1';
import Section2 from '../../components/colab/section2';
import Section3 from '../../components/colab/section3';

const Colab = () => {
    const navigate = useNavigate();
    const onGo = (title) => {
        navigate(`/colab/${title}`);
    };
    return (
        <>
        {/* <Section1/> */}
            <Section2 />
            <Section3 />
        </>
    );
};

export default Colab;
