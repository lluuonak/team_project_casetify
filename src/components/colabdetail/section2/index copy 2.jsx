import { Section2Style } from './style';
const Section2 = ({ pageData, categoryName }) => {
    // pageData에서 모든 title과 img 추출
    const extractProductData = () => {
        if (!pageData || !Array.isArray(pageData)) return [];
        
        const products = [];
        
        pageData.forEach((section, sectionIndex) => {
            section.data.forEach((item, itemIndex) => {
                products.push({
                    id: `${sectionIndex}-${itemIndex}`,
                    title: item.title,
                    img: item.img,
                    price: '29,000'
                });
            });
        });
        
        return products;
    };

    const products = extractProductData();

    return (
        <Section2Style>
            <div className="product-inner">
                <div className="line"></div>
                <span>
                    Co-Lab &gt; {categoryName?.toUpperCase()} &gt; PRODUCTS
                </span>
                <h3>{categoryName?.toUpperCase()}</h3>
                {/* 나머지 코드는 동일 */}
            </div>
        </Section2Style>
    );
};

export default Section2;
