import { useDispatch } from 'react-redux';
import { ListItemStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { detailActions } from '../../../store/modules/detail/detailSlice';

const ListItem = ({ data }) => {
    const { img, name, price, like, id } = data;

    const dispatch = useDispatch();
    const navigator = useNavigate();
    const onClickHandler = () => {
        dispatch(detailActions.getDetail('phone'));
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
