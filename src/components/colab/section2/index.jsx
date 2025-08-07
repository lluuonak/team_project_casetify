import { useNavigate } from 'react-router-dom';
import { BtnsStyle, Section2Style } from './style';

const Section2 = () => {
    const navigate = useNavigate();
    const onGo = (title) => {
        navigate(`/colab/${title}`);
    };
    return (
        <Section2Style>
            <BtnsStyle>
                <div className="btns">
                    <button onClick={() => onGo('animation')}>Animation</button>
                    <button onClick={() => onGo('art')}>Art</button>
                    <button onClick={() => onGo('characters')}>Characters</button>
                    <button onClick={() => onGo('movies')}>
                        Movies &<br /> Entertainment
                    </button>
                    <button onClick={() => onGo('fashion')}>
                        Fashion &<br /> Lifestyle
                    </button>
                    <button onClick={() => onGo('sports')}>Sports</button>
                </div>
            </BtnsStyle>
        </Section2Style>
    );
};

export default Section2;
