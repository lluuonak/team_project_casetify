import { useRef } from 'react';
import { PhoneListStyle } from './style';
//16개
const PhoneList = () => {
    const containerRef = useRef(null);
    return (
        <PhoneListStyle ref={containerRef}>
            <li></li>
        </PhoneListStyle>
    );
};

export default PhoneList;
