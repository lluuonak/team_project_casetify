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
                {/* <button onClick={() => onGo('animation')}>
                    <h4>Animation</h4>
                </button>*/}
                {/* colabdetail/:id params 연결 - api 만들기 */}
                <li>
                    <Link to="/colabdetail/1">
                        <h4>Animation</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/2">
                        <h4>Art</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/3">
                        <h4>Characters</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/4">
                        <h4>
                            Movies &<br /> Entertainment
                        </h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/5">
                        <h4>
                            Fashion &<br /> Lifestyle
                        </h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/6">
                        <h4>Sports</h4>
                    </Link>
                </li>
            </ul>
        </Section2Style>
    );
};

export default Section2;
