import styled from "styled-components";

export const Section2Style = styled.section`
  width: 1920px;
  height: 1000px
  display: flex;

  .images {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .image-wrapper {
      width: 280px;
      height: 380px;
      overflow: hidden;
      border-radius: 50% / 35%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
        .left{}
        .right{}
    }
  }

  .text {
    max-width: 400px;
    color: #fff;

    h4 {
      font-size: 16px;
      margin-bottom: 10px;
      font-weight: 400;
      opacity: 0.8;
    }

    h2 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      opacity: 0.9;
    }
  }
`;
