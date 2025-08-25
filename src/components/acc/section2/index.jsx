import { useDispatch, useSelector } from 'react-redux';
import { Section2Style } from '../style';
import { useMemo, useState } from 'react';
import { accActions } from '../../../store/modules/acc/accSlice';

const Section2 = () => {
    const { accProductData, selectedVisualIndex, currentCategoryTitle } = useSelector(
        (state) => state.acc
    );
    const [selectedCate, setSelectedCate] = useState('wearable');
    const [showAll, setShowAll] = useState(false);
    const dispatch = useDispatch();

    const availableCate = useMemo(() => {
        const cate = [...new Set(accProductData.map((item) => item.cate).filter(Boolean))];
        return cate;
    }, [accProductData]);

    const filteredProducts = useMemo(() => {
        return accProductData.filter((item) => {
            const typeMatch = item.cate?.trim() === selectedCate;
            return typeMatch;
        });
    }, [accProductData, selectedCate]);

    const displayedProducts = useMemo(() => {
        const filtered = filteredProducts;
        return showAll ? filtered : filtered.slice(0, 8);
    }, [filteredProducts, showAll]);

    const handleViewMore = () => {
        setShowAll(!showAll);
    };

    const handleCateFilter = (cate) => {
        setSelectedCate(cate);

        const visualIndex =
            cate === 'wearable'
                ? 0
                : cate === 'charge'
                ? 1
                : cate === 'protect'
                ? 2
                : cate === 'style'
                ? 3
                : 0;

        dispatch(accActions.setSelectedVisualIndex(visualIndex));
        dispatch(accActions.setCategoryTitle(cate)); // 카테고리 제목도 변경
    };

    return (
        <Section2Style>
            <div className="product-inner">
                <div className="title">
                    <h2>ACC</h2>
                    <span>{currentCategoryTitle}</span>
                </div>

                <ul className="category-list">
                    <li>
                        <ul className="cate">
                            {availableCate.map((cate) => (
                                <li
                                    key={cate}
                                    className={selectedCate === cate ? 'active' : ''}
                                    onClick={() => handleCateFilter(cate)}
                                >
                                    {cate === 'wearable'
                                        ? '웨어러블 & 디바이스'
                                        : cate === 'charge'
                                        ? '충전 & 파워'
                                        : cate === 'protect'
                                        ? '보호 & 서포트'
                                        : cate === 'style'
                                        ? '스타일 & 키링'
                                        : cate}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
                <ul className="product-list">
                    {displayedProducts.map(({ id, title, price, img }) => (
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
                {filteredProducts.length > 8 && (
                    <button className="view-more" onClick={handleViewMore}>
                        {showAll ? 'VIEW LESS' : 'VIEW MORE'}
                    </button>
                )}
            </div>

            <div className="text">
                <strong>No right answer.</strong>
                <strong>Just your own way.</strong>
            </div>
        </Section2Style>
    );
};

export default Section2;
