import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import data from '../../assets/colabDetailData';

import Section1 from '../../components/colabdetail/section1';
import Section2 from '../../components/colabdetail/section2';

const ColabDetail = () => {
    const { id } = useParams();
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const selectedData = data.find((item) => item.id === id);

        if (selectedData) {
            setPageData(selectedData);
        } else {
            setPageData(null); // 데이터가 없을 경우
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (!pageData) {
        return <div>데이터를 찾을 수 없습니다.</div>;
    }

    return (
        <>
            <Section1 data={pageData} />
            <Section2 data={pageData} />
        </>
    );
};

export default ColabDetail;
