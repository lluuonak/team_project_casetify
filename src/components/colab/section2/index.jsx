import { Link, useNavigate } from 'react-router-dom';
import { Section2Style } from './style';

const Section2 = () => {
    const navigate = useNavigate();
    const onGo = (title) => {
        // navigate(`/colabdetail/${title}`);
    };
    return (
        <Section2Style>
            <ul className="btns">
                <li>
                    <Link to="/colabdetail/animation">
                        <h4>Animation</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/art">
                        <h4>Art</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/characters">
                        <h4>Characters</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/movies">
                        <h4>
                            Movies &<br /> Entertainment
                        </h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/fashion">
                        <h4>
                            Fashion &<br /> Lifestyle
                        </h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/sports">
                        <h4>Sports</h4>
                    </Link>
                </li>
            </ul>
        </Section2Style>
    );
};

export default Section2;
