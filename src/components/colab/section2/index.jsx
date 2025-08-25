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
                <Link to="/colabdetail/animation">
                    <li>
                        <h4>Animation</h4>
                    </li>
                </Link>

                <Link to="/colabdetail/art">
                    <li>
                        <h4>Art</h4>
                    </li>
                </Link>

                <Link to="/colabdetail/characters">
                    <li>
                        <h4>Characters</h4>
                    </li>
                </Link>

                <Link to="/colabdetail/movies">
                    <li>
                        <h4>
                            Movies &<br /> Entertainment
                        </h4>
                    </li>
                </Link>

                <Link to="/colabdetail/fashion">
                    <li>
                        <h4>
                            Fashion &<br /> Lifestyle
                        </h4>
                    </li>
                </Link>

                <Link to="/colabdetail/sports">
                    <li>
                        <h4>Sports</h4>
                    </li>
                </Link>
            </ul>
        </Section2Style>
    );
};

export default Section2;
