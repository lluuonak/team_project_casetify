
import { useState } from 'react';
import Section1 from '../../components/cart/step2/section1';

import Section2 from '../../components/cart/step2/section2';
import Section3 from '../../components/cart/step2/section3';
import Section4 from '../../components/cart/step2/section4';
import Section5 from '../../components/cart/step2/section5';
import { useSelector } from 'react-redux';

const Step2 = () => {
    const { orderList } = useSelector((state) => state.order);
    const currentData = orderList.find((item) => item.isComplete === false);
    const [formData, setFormData] = useState({
        postcode: '',
        address: '',
        detailAddress: '',
        emailId: '',
        emailDomain: '',
        orderItem: currentData,
        phone: '',
        name: '',
        agree1: false,
        agree2: false,
    });
    return (
        <>

            <Section1 />
            <Section2 formData={formData} setFormData={setFormData} />
            <Section3 />
            <Section4 formData={formData} setFormData={setFormData} />
            <Section5 formData={formData} />

        </>
    );
};

export default Step2;
