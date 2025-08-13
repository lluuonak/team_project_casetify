import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../../assets/colabSection1Data';

const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const TextContainer = styled.div`
  text-align: center;
  transition: all 0.5s ease-in-out;
  transform: ${props => props.isAnimating ? 'translateY(64px)' : 'translateY(0)'};
  opacity: ${props => props.isAnimating ? '0' : '1'};
`;

const Title = styled.h1`
  color: white;
  font-size: 3.75rem;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: 1.2;
`;

const Description = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  opacity: 0.8;
`;

const BoxSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 80px;
  transition: all 0.5s ease-in-out;
  transform: ${props => props.isAnimating ? 'translateY(64px)' : 'translateY(0)'};
  opacity: ${props => props.isAnimating ? '0' : '1'};
`;

const ProductBox = styled.div`
  width: 240px;
  height: 370px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const InfoOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 16px;
  border-radius: 8px;
  position: relative;
  z-index: 10;
`;

const ProductName = styled.h3`
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const ProductPrice = styled.p`
  color: white;
  font-size: 1.125rem;
  font-weight: 700;
`;

export default function CollabShowcase() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isTextAnimating, setIsTextAnimating] = useState(true);
  const [isBoxAnimating, setIsBoxAnimating] = useState(true);

  useEffect(() => {
    // 첫 등장 애니메이션 (컴포넌트 마운트 시)
    const initialTimeout = setTimeout(() => {
      setIsTextAnimating(false); // 텍스트 스윽 올라오며 등장
    }, 100);

    const initialBoxTimeout = setTimeout(() => {
      setIsBoxAnimating(false); // 0.6초 후 박스 스윽 올라오며 등장
    }, 600);

    const cycleDuration = 5000; // 5초 주기
    
    // 첫 사이클은 4초 후에 시작 (첫 등장 후)
    const firstCycleTimeout = setTimeout(() => {
      const mainInterval = setInterval(() => {
        // 1. 현재 컨텐츠 사라짐 (4초 후)
        setIsTextAnimating(true);
        setIsBoxAnimating(true);
        
        // 2. 다음 세트로 변경 (0.5초 후)
        setTimeout(() => {
          setCurrentSetIndex(prev => (prev + 1) % data.length);
        }, 500);

        // 3. 새로운 텍스트 등장 (1초 후)
        setTimeout(() => {
          setIsTextAnimating(false);
        }, 1000);

        // 4. 새로운 박스 등장 (1.6초 후 = 1초 + 0.6초)
        setTimeout(() => {
          setIsBoxAnimating(false);
        }, 1600);

      }, cycleDuration);

      return () => clearInterval(mainInterval);
    }, 4000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(initialBoxTimeout);
      clearTimeout(firstCycleTimeout);
    };
  }, []);

  return (
    <Container>
      {/* 텍스트 영역 */}
      <TextSection>
        <TextContainer isAnimating={isTextAnimating}>
          <Title>{data[currentSetIndex].title}</Title>
          <Description>{data[currentSetIndex].desc}</Description>
        </TextContainer>
      </TextSection>

      {/* 박스 영역 */}
      <BoxSection>
        <BoxContainer isAnimating={isBoxAnimating}>
          {data[currentSetIndex].product.map((product) => (
            <ProductBox key={product.id}>
              {/* 제품 이미지 */}
              <ProductImage
                src={product.img}
                alt={product.name}
              />
              
              {/* 제품 정보 오버레이 */}
              <InfoOverlay>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>₩{product.price}</ProductPrice>
              </InfoOverlay>
            </ProductBox>
          ))}
        </BoxContainer>
      </BoxSection>
    </Container>
  );
}