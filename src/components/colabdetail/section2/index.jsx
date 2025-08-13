import { Section2Style } from './style';

const Section2 = ({ data }) => {
    const { id, title, category, product } = data;
    return (
        <>
            <Section2Style>
                <span>
                    Co-Lab &gt; {title.toUpperCase()} &gt; {category[0].title}
                </span>
                <h3>{category[0].title}</h3>
                <ul className="category-list">
                    <li>기종</li>
                    <li>시리즈</li>
                    <li>Co-Lab</li>
                    <li>커스텀</li>
                    <li>단색 컬러케이스</li>
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
            </Section2Style>
        </>
    );
};

export default Section2;
