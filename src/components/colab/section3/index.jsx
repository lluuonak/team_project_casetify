import { useNavigate } from 'react-router-dom';
import { Section3Style } from './style';

const Section3 = () => {
    const navigate = useNavigate();
    const onGo = (title) => {
        navigate(`/colab/${title}`);
    };
    return (
        <Section3Style>
            <div className="more colab-archieve">
                <h4>CoLab Archieve</h4>
                <p>지난 콜라보를 둘러보세요</p>
            </div>
            <div className="more next-up">
                <h4>Next Up</h4>
                <p>다가올 콜라보를 미리 엿보세요</p>
            </div>
        </Section3Style>
    );
};

export default Section3;
