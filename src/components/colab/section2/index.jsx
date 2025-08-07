import { useNavigate } from 'react-router-dom';
import { Section2Style } from './style';

const Section2 = () => {
    const navigate = useNavigate();
    const onGo = (title) => {
        navigate(`/colab/${title}`);
    };
    return (
        <Section2Style>
            <div className="btns">
                <button onClick={() => onGo('animation')}>
                    <h4>Animation</h4>
                </button>
                <button onClick={() => onGo('art')}>
                    <h4>Art</h4>
                </button>
                <button onClick={() => onGo('characters')}>
                    <h4>Characters</h4>
                </button>
                <button onClick={() => onGo('movies')}>
                    <h4>
                        Movies &<br /> Entertainment
                    </h4>
                </button>
                <button onClick={() => onGo('fashion')}>
                    <h4>
                        Fashion &<br /> Lifestyle
                    </h4>
                </button>
                <button onClick={() => onGo('sports')}>
                    <h4>Sports</h4>
                </button>
            </div>
        </Section2Style>
    );
};

export default Section2;
