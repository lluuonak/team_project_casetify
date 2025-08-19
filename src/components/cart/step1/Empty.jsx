import Banner from './Banner';
import { EmptyStyle } from './style';

const Empty = () => {
    return (
        <>
            <EmptyStyle>
                <strong>장바구니가 비어있습니다</strong>
                <span>다양한 제품 보러가기</span>
            </EmptyStyle>
            <Banner />
        </>
    );
};

export default Empty;
