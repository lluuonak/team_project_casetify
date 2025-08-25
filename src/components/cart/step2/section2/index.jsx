import { Section2Style } from './style';
import UserInfo from './UserInfo';

const Section2 = () => {
    return (
        <Section2Style>
            <div className="inner">
                <h3>주문자 정보</h3>
                <UserInfo />
            </div>
        </Section2Style>
    );
};

export default Section2;
