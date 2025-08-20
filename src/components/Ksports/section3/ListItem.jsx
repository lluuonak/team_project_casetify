import { useDispatch } from 'react-redux';
import { ListItemStyle } from './style';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ data }) => {
    const { img, name, price, like, id } = data;

    const navigator = useNavigate();

    const onClickHandler = () => {
        navigator('/detail');
    };
    return (
        <ListItemStyle onClick={onClickHandler}>
            <div className="img-bg">
                <img src={img} alt={name} />
            </div>
            <div className="info">
                <strong className="name">{name}</strong>
                <span className="price">{price}</span>
            </div>
        </ListItemStyle>
    );
};

export default ListItem;
