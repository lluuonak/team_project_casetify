import React, { useState } from 'react';
import productData from '../../../assets/product/productData';
import { Section3Style } from './style';
import ListItem from './ListItem';

const Section3 = () => {
    const [expanded, setExpanded] = useState({
        samsung: false,
        apple: false,
    });
    const [activeTags, setActiveTags] = useState(['전체']); // 기본값을 '전체'로 설정

    const toggleCategory = (categoryId) => {
        setExpanded((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };

    const handleTagClick = (tag) => {
        setActiveTags((prevTags) => {
            if (tag === '전체') {
                // '전체'를 클릭하면 다른 태그를 모두 해제하고 '전체'만 활성화
                return ['전체'];
            } else {
                // 다른 태그를 클릭하면 '전체'를 비활성화하고 해당 태그를 추가/제거
                const filteredTags = prevTags.filter((t) => t !== '전체');
                if (filteredTags.includes(tag)) {
                    // 이미 선택된 태그라면 제거
                    const updatedTags = filteredTags.filter((t) => t !== tag);
                    return updatedTags.length === 0 ? ['전체'] : updatedTags; // 모든 태그가 해제되면 '전체' 활성화
                } else {
                    // 선택되지 않은 태그라면 추가
                    return [...filteredTags, tag];
                }
            }
        });
    };

    return (
        <Section3Style>
            <div className="container">
                {productData.map((category) => {
                    const filteredItems =
                        activeTags.includes('All') || activeTags.length === 0
                            ? category.product // '전체'가 선택되었거나 태그가 선택되지 않았을 경우 모든 상품 표시
                            : category.product.filter((item) =>
                                  activeTags.some((tag) => item.tags.includes(tag))
                              ); // 선택된 태그 중 하나라도 포함된 상품 필터링

                    const visibleItems = expanded[category.id]
                        ? filteredItems
                        : filteredItems.slice(0, category.id === 'samsung' ? 4 : 4);

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
                                                activeTags.includes(tag) ? 'active' : ''
                                            }`}
                                            onClick={() => handleTagClick(tag)} // 태그 클릭 이벤트
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
                                                activeTags.includes(tag) ? 'active' : ''
                                            }`}
                                            onClick={() => handleTagClick(tag)} // 태그 클릭 이벤트
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
                                                    activeTags.includes(tag) ? 'active' : ''
                                                }`}
                                                onClick={() => handleTagClick(tag)} // 태그 클릭 이벤트
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
