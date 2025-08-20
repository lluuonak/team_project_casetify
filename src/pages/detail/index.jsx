import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Section1 from '../../components/detail/section1';
import Section2 from '../../components/detail/Section2';

const Detail = () => {
    const { detailData } = useSelector((state) => state.detail);

    return (
        <>
            <Section1 />
            <Section2 />
        </>
    );
};

export default Detail;
