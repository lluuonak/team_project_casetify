import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/colab/gsapData';

import Section1 from '../../components/colabdetail/section1';
import Section2 from '../../components/colabdetail/section2';

const ColabDetail = () => {
    const { id } = useParams();
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

//     useEffect(() => {
//     console.log('🔍 디버깅 시작');
//     console.log('받은 id:', id);
//     console.log('전체 data:', data);
    
//     if (!data) {
//         console.log('❌ data가 undefined 또는 null');
//         return;
//     }
    
//     console.log('사용가능한 키들:', Object.keys(data));
    
//     const selectedData = data[id];
//     console.log(`data["${id}"] 결과:`, selectedData);
    
//     setPageData(selectedData || null);
//     setLoading(false);
// }, [id]);   

//     if (loading) {
//         return <div>로딩 중...</div>;
//     }

//     if (!pageData) {
//         return <div>데이터를 찾을 수 없습니다요.</div>;
//     }

    return (
        <>
            <Section1 pageData={pageData} categoryName={id}/>
            <Section2 pageData={pageData} categoryName={id}/>
        </>
    );
};

export default ColabDetail;
