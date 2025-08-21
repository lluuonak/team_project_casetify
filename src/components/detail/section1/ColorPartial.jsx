import { useSelector } from 'react-redux';
import { ColorPartialStyle } from '../style';

const ColorPartial = () => {
    const { currentData } = useSelector((state) => state.detail);

    return (
        <ColorPartialStyle>
            <strong className="label">색상</strong>
            <ul>
                {currentData.colors.map((item, idx) => (
                    <li key={idx} style={{ backgroundColor: item }}></li>
                ))}
            </ul>
        </ColorPartialStyle>
    );
};

export default ColorPartial;
