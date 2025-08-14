import { Section2Style } from './style';

const Section2 = ({ data }) => {
    const { id, title, category, product } = data;
    return (
        <>
            <Section2Style>
                <div className="product-inner">
                    <div className="line"></div>
                    <span>
                        Co-Lab &gt; {title.toUpperCase()} &gt; {category[0].title}
                    </span>
                    <h3>{category[0].title}</h3>
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
        </>
    );
};

export default Section2;
