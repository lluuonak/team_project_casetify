import React, { useState } from 'react';
import productData from '../../../assets/product/productData';
import { Section3Style } from './style';
import ListItem from './ListItem';

const Section3 = () => {
    const [expanded, setExpanded] = useState({
        samsung: false,
        apple: false,
    });

    const toggleCategory = (categoryId) => {
        setExpanded((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };

    return (
        <Section3Style>
            <div className="container">
                {productData.map((category) => {
                    const visibleItems = expanded[category.id]
                        ? category.product
                        : category.product.slice(0, category.id === 'samsung' ? 4 : 4);

                    return (
                        <div key={category.id} className="category-section">
                            <div className="title">
                                <h2 className="title-text">
                                    {category.id === 'samsung' ? 'Samsung' : 'Apple'}
                                    <span className="subtitle">
                                        {category.id === 'samsung' ? ' 삼성' : ' 애플'}
                                    </span>
                                </h2>
                            </div>

                            {/* 필터 태그들 */}
                            <div className="filter-tags">
                                {[
                                    '전체',
                                    'COMPACT',
                                    'KEI',
                                    '빅보보',
                                    '블랙',
                                    '컬랩',
                                    '크로스',
                                    '폰케이스',
                                    '시계줄',
                                ].map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`tag ${index === 0 ? 'active' : ''}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* 상품 그리드 */}
                            <div className="category-content">
                                <div className="product-item">
                                    {visibleItems.map((item) => (
                                        <ListItem
                                            key={item.id}
                                            data={item}
                                            categoryId={category.id}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* MORE VIEW 버튼 */}
                            {category.product.length > 4 && (
                                <div className="more-view-container">
                                    <button
                                        className="more-view-btn"
                                        onClick={() => toggleCategory(category.id)}
                                    >
                                        {expanded[category.id] ? 'VIEW LESS' : 'VIEW MORE'}
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </Section3Style>
    );
};

export default Section3;
