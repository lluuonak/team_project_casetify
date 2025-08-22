import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import gsapData from '../../../assets/colab/gsapData';
import { Section2Style } from './style';

const Section2 = ({ categoryName }) => {
    const { colabDetail } = useSelector((state) => state.colab);
    const [selectedType, setSelectedType] = useState('all');
    const [selectedSeries, setSelectedSeries] = useState('all');
    const [showAll, setShowAll] = useState(false);

    const currentCategory = colabDetail.find((item) => item.id === categoryName);

    if (!currentCategory) {
        return <div>Loading...</div>;
    }

    const { title, product } = currentCategory;

    const getFirstTitle = () => {
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

    const firstTitle = getFirstTitle();

    // 타입과 시리즈 목록 추출
    const availableTypes = useMemo(() => {
        const types = [...new Set(product.map((item) => item.type).filter(Boolean))];
        return types.map((type) => type.trim());
    }, [product]);

    const availableSeries = useMemo(() => {
        const series = [...new Set(product.map((item) => item.series).filter(Boolean))];
        return series;
    }, [product]);

    // 필터된 상품 목록
    const filteredProducts = useMemo(() => {
        return product.filter((item) => {
            const typeMatch = selectedType === 'all' || item.type?.trim() === selectedType;
            const seriesMatch = selectedSeries === 'all' || item.series === selectedSeries;
            return typeMatch && seriesMatch;
        });
    }, [product, selectedType, selectedSeries]);

    const displayedProducts = useMemo(() => {
        const filtered = filteredProducts;
        return showAll ? filtered : filtered.slice(0, 12);
    }, [filteredProducts, showAll]);

    const handleViewMore = () => {
        setShowAll(!showAll);
    };

    const handleTypeFilter = (type) => {
        setSelectedType(type);
    };

    const handleSeriesFilter = (series) => {
        setSelectedSeries(series);
    };

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
                            <li
                                className={selectedType === 'all' ? 'active' : ''}
                                onClick={() => handleTypeFilter('all')}
                            >
                                All
                            </li>
                            {availableTypes.map((type) => (
                                <li
                                    key={type}
                                    className={selectedType === type ? 'active' : ''}
                                    onClick={() => handleTypeFilter(type)}
                                >
                                    {type === 'apple'
                                        ? 'Apple'
                                        : type === 'samsung'
                                        ? 'Samsung'
                                        : type === 'acc'
                                        ? 'ACC'
                                        : type}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <span>시리즈</span>
                        <ul className="cate series">
                            <li
                                className={selectedSeries === 'all' ? 'active' : ''}
                                onClick={() => handleSeriesFilter('all')}
                            >
                                All
                            </li>
                            {availableSeries.map((series) => (
                                <li
                                    key={series}
                                    className={selectedSeries === series ? 'active' : ''}
                                    onClick={() => handleSeriesFilter(series)}
                                >
                                    {series === 'bounce'
                                        ? '바운스'
                                        : series === 'impact'
                                        ? '임팩트'
                                        : series === 'ring'
                                        ? '링'
                                        : series === 'mirror'
                                        ? '미러'
                                        : series === 'bioveg'
                                        ? 'BioVeg & 페블 레더'
                                        : series}
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
                                <span>₩{price.toLocaleString()}</span>
                            </div>
                        </li>
                    ))}
                </ul>

                {filteredProducts.length > 12 && (
                    <button className="view-more" onClick={handleViewMore}>
                        {showAll ? 'VIEW LESS' : 'VIEW MORE'}
                    </button>
                )}
            </div>
        </Section2Style>
    );
};

export default Section2;
