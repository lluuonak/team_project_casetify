import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/colab/gsapData';
import Section1 from '../../components/colabdetail/section1';
import Section2 from '../../components/colabdetail/section2';
// import { ColabDetailStyle } from './style';

const ColabDetail = () => {
    const { id } = useParams();
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <>
            <Section1 pageData={pageData} categoryName={id} />
            <Section2 pageData={pageData} categoryName={id} />
        </>
    );
};

export default ColabDetail;
