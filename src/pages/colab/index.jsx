import { MoreColabStyle, BtnsStyle, ColabStyle } from './style';
import { useNavigate } from 'react-router-dom';

const Colab = () => {
    const navigate = useNavigate();
    const onGo = (title) => {
        navigate(`/colab/${title}`);
    };
    return (
        <ColabStyle>
            <BtnsStyle>
                <div className="btns btn-first">
                    <button onClick={() => onGo('animation')}>Animation</button>
                    <button onClick={() => onGo('art')}>Art</button>
                    <button onClick={() => onGo('characters')}>Characters</button>
                </div>
                <div className="btns btn-second">
                    <button onClick={() => onGo('movies')}>
                        Movies &<br /> Entertainment
                    </button>
                    <button onClick={() => onGo('fashion')}>
                        Fashion &<br /> Lifestyle
                    </button>
                    <button onClick={() => onGo('sports')}>Sports</button>
                </div>
            </BtnsStyle>
            <MoreColabStyle>
                <div className="more colab-archieve">
                    <h4>CoLab Archieve</h4>
                    <p>지난 콜라보를 둘러보세요</p>
                </div>
                <div className="more next-up">
                    <h4>Next Up</h4>
                    <p>다가올 콜라보를 미리 엿보세요</p>
                </div>
            </MoreColabStyle>
        </ColabStyle>
    );
};

export default Colab;
