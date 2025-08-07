import { ListItemStyle } from './style';

const ListItem = ({ data }) => {
    const { id, img, name, price } = data;

    return (
        <ListItemStyle>
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
