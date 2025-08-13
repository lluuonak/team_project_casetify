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
                {/* colabdetail/:id params 연결 - api 만들기 - 아래 싹 다 고쳐야함 */}
                <li>
                    <Link to="/colabdetail/Animation">
                        <h4>Animation</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/Art">
                        <h4>Art</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/Characters">
                        <h4>Characters</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/Movies">
                        <h4>
                            Movies &<br /> Entertainment
                        </h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/Fashion">
                        <h4>
                            Fashion &<br /> Lifestyle
                        </h4>
                    </Link>
                </li>
                <li>
                    <Link to="/colabdetail/Sports">
                        <h4>Sports</h4>
                    </Link>
                </li>
            </ul>
        </Section2Style>
    );
};

export default Section2;
