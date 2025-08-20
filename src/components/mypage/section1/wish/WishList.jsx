import { WishListStyle } from './style';
import WishItem from './WishItem';

const WishList = () => {
    return (
        <WishListStyle>
            <h3>WISH LIST</h3>
            <ul className="list">
                <WishItem />
                <WishItem />
            </ul>
        </WishListStyle>
    );
};

export default WishList;
