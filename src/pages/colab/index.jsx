import { useNavigate } from 'react-router-dom';
import Section1 from '../../components/colab/section1/index';
import Section2 from '../../components/colab/section2';
import Section3 from '../../components/colab/section3';

const Colab = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    );
};

export default Colab;
