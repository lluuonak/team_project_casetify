import { Section1Style } from './style';

const Section1 = ({ data }) => {
    return (
        <Section1Style>
            <h2>{data.title.toUpperCase()}</h2>
            <ul className="photo-list">
                <li></li>
            </ul>
        </Section1Style>
    );
};

export default Section1;
