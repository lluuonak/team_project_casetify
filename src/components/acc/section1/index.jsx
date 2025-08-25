import styled from 'styled-components';
import { Section1Style } from '../style';
import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';

const Section1 = () => {
    const { accVisualData, selectedVisualIndex } = useSelector((state) => state.acc);
    const [textFadeClass, setTextFadeClass] = useState('');
    const isFirstRender = useRef(true);

    const currentVisual = accVisualData[selectedVisualIndex];

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setTextFadeClass('fade-out');

        const timer = setTimeout(() => {
            setTextFadeClass('fade-in');
        }, 300);

        return () => clearTimeout(timer);
    }, [selectedVisualIndex]);

    return (
        <Section1Style>
            <img src={currentVisual.img} alt={currentVisual.title} />

            <div className={`visual-text ${textFadeClass}`}>
                <strong>
                    {currentVisual.title.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < currentVisual.title.split('\n').length - 1 && <br />}
                        </span>
                    ))}
                </strong>
                <p>
                    {currentVisual.desc.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < currentVisual.desc.split('\n').length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
        </Section1Style>
    );
};

export default Section1;
