import { useNavigate } from 'react-router-dom';
import { ListItemStyle } from './style';

const ListItem = ({ data }) => {
    const { id, img, name, price } = data;
    const navigate = useNavigate();

    return (
        <ListItemStyle onClick={() => navigate('/detail')}>
            <div className="img-bg">
                <img src={img} alt="" />
            </div>
            <div className="info">
                <strong className="name">{name}</strong>
                <span className="price">{price}</span>
            </div>
        </ListItemStyle>
    );
};

export default ListItem;
