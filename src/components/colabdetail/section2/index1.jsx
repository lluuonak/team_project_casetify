import { useSelector } from 'react-redux';
import gsapData from '../../../assets/colab/gsapData';
import { Section2Style } from './style';

const Section2 = ({ categoryName }) => {
    const { colabDetail } = useSelector((state) => state.colab);

    const currentCategory = colabDetail.find((item) => item.id === categoryName);

    if (!currentCategory) {
        return <div>Loading...</div>;
    }

    const { title, product } = currentCategory;

    const getFirstTitleFromGsap = () => {
        const gsapCategory = gsapData[categoryName];
        if (
            gsapCategory &&
            gsapCategory.length > 0 &&
            gsapCategory[0].data &&
            gsapCategory[0].data.length > 0
        ) {
            return gsapCategory[0].data[0].title;
        }
        return title; 
    };

    const firstTitle = getFirstTitleFromGsap();

    return (
        <Section2Style>
            <div className="product-inner">
                <div className="line"></div>
                <span>
                    Co-Lab &gt; {categoryName?.toUpperCase()} &gt; {firstTitle}
                </span>
                <h3>{firstTitle}</h3>
                <ul className="category-list">
                    <li>
                        <span>타입</span>
                        <ul className="cate type">
                            <li>Apple</li>
                            <li>Samsung</li>
                            <li>ACC</li>
                        </ul>
                    </li>
                    <li>
                        <span>시리즈</span>
                        <ul className="cate series">
                            <li>바운스</li>
                            <li>임팩트</li>
                            <li>링</li>
                            <li>미러</li>
                            <li>BioVeg & 페블 레더</li>
                        </ul>
                    </li>
                </ul>
                <ul className="product-list">
                    {product.map(({ id, title, price, img }) => (
                        <li key={id}>
                            <div className="img-bg">
                                <img src={img} alt={title} />
                            </div>
                            <div className="info">
                                <span>{title}</span>
                                <span>₩{price}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <span className="view-more">VIEW MORE</span>
            </div>
        </Section2Style>
    );
};

export default Section2;
