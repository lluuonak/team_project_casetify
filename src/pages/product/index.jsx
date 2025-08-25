import React, { useRef } from 'react';

import { Section1, Section2, Section3, Section4 } from '../../components/product';

const Product = () => {
    const appleRef = useRef(null);
    const samsungRef = useRef(null);

    const scrollToSection = (section) => {
        if (section === '애플') {
            appleRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === '삼성') {
            samsungRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div style={{ backgroundColor: '#1a1a1a' }}>
            <Section1 />
            <Section2 scrollToSection={scrollToSection} />
            <Section3 ref={{ appleRef, samsungRef }} />
            <Section4 />
        </div>
    );
};

export default Product;
