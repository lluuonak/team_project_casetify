import { useLocation } from 'react-router-dom';
import Section1 from '../../components/cart/step3/section1';

const Step3 = () => {
    const location = useLocation();
    const { formData } = location.state || [];
    return (
        <>
            <Section1 formData={formData} />
        </>
    );
};

export default Step3;
