import { useState } from 'react';
import { Section3Style } from './style';
import KsportsData from '../../../assets/KsportsData';
import ListItem from './ListItem';

const Section3 = () => {
    const [expanded, setExpanded] = useState({});

    const toggleCategory = (categoryId) => {
        setExpanded((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };
    return (
        <Section3Style className="products">
            {KsportsData.map((category) => {
                const visibleItems = expanded[category.id]
                    ? category.data
                    : category.data.slice(0, 8);

                return (
                    <div key={category.id} className="category-block">
                        <div className="category-header">
                            <p>{category.strong}</p>
                            <button
                                className="toggle-btn"
                                onClick={() => toggleCategory(category.id)}
                            >
                                {expanded[category.id] ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                        {/* Font Awesome Free v7.0.0 by @fontawesome */}
                                        <path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                        {' '}
                                        {/* Font Awesome Free v7.0.0 by @fontawesome */}
                                        <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className="category-content">
                            <ul className="product-item">
                                {visibleItems.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        data={item}
                                        parentId={category.id}
                                        strong={category.strong}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}

            <div className="footer-banner">
                <img src="../public/images/Ksports/Kbcak1.jpg" alt="" />
            </div>
        </Section3Style>
    );
};

export default Section3;
