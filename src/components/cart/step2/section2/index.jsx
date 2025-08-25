import { Section2Style } from './style';
import UserInfo from './UserInfo';

const Section2 = ({ formData, setFormData }) => {
    return (
        <Section2Style>
            <div className="inner">
                <h3>주문자 정보</h3>
                <UserInfo formData={formData} setFormData={setFormData} />
            </div>
        </Section2Style>
    );
};

export default Section2;
