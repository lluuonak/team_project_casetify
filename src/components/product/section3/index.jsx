import React, { useState } from 'react';
import productData from '../../../assets/product/productData';
import { Section3Style } from './style';
import ListItem from './ListItem';

const Section3 = () => {
    const [expanded, setExpanded] = useState({
        samsung: false,
        apple: false,
    });
    const [activeTags, setActiveTags] = useState({
        samsung: ['All'],
        apple: ['All'],
    });

    const toggleCategory = (categoryId) => {
        setExpanded((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };

    const handleTagClick = (categoryId, tag) => {
        setActiveTags((prevTags) => {
            const prevCategoryTags = prevTags[categoryId];
            if (tag === 'All') {
                return { ...prevTags, [categoryId]: ['All'] };
            } else {
                const filteredTags = prevCategoryTags.filter((t) => t !== 'All');
                if (filteredTags.includes(tag)) {
                    const updatedTags = filteredTags.filter((t) => t !== tag);
                    return {
                        ...prevTags,
                        [categoryId]: updatedTags.length === 0 ? ['All'] : updatedTags,
                    };
                } else {
                    return { ...prevTags, [categoryId]: [...filteredTags, tag] };
                }
            }
        });
    };

    return (
        <Section3Style>
            <div className="container">
                {productData.map((category) => {
                    const filteredItems =
                        activeTags[category.id].includes('All') ||
                        activeTags[category.id].length === 0
                            ? category.product
                            : category.product.filter((item) =>
                                  activeTags[category.id].some((tag) => item.tags.includes(tag))
                              );

                    const visibleItems = expanded[category.id]
                        ? filteredItems
                        : filteredItems.slice(0, 4);

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
                                <div className="K">
                                    <p>K -</p>
                                    {['All', 'SPORTS', 'CONTENT', 'ART'].map((tag, index) => (
                                        <span
                                            key={index}
                                            className={`tag ${
                                                activeTags[category.id].includes(tag)
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={() => handleTagClick(category.id, tag)}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="series">
                                    <p>시리즈</p>
                                    {[
                                        'All',
                                        '바운스',
                                        '임팩트',
                                        '링',
                                        '미러',
                                        'BioVeg & 페블 레더',
                                    ].map((tag, index) => (
                                        <span
                                            key={index}
                                            className={`tag ${
                                                activeTags[category.id].includes(tag)
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={() => handleTagClick(category.id, tag)}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="filter-tags">
                                <div className="Co-Lab">
                                    <p>Co-Lab</p>
                                    {['치이카와', 'ba & sh', 'V & A', '바빌론 LA', '스테이플'].map(
                                        (tag, index) => (
                                            <span
                                                key={index}
                                                className={`tag ${
                                                    activeTags[category.id].includes(tag)
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() => handleTagClick(category.id, tag)}
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}
                                </div>
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
                            {filteredItems.length > 4 && (
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
