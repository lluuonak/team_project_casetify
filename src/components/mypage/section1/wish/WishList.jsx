import { useSelector } from 'react-redux';
import { WishListStyle } from './style';
import WishItem from './WishItem';

const WishList = () => {
    const { wishList } = useSelector((state) => state.cart);
    return (
        <WishListStyle>
            <h3>WISH LIST</h3>
            <ul className="list">
                {wishList.map((item) => (
                    <WishItem key={item.wishId} data={item} />
                ))}
            </ul>
        </WishListStyle>
    );
};

export default WishList;
