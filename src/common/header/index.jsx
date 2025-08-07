import { Link } from 'react-router-dom';
import { HeaderStyle, MenuStyle, ModalOverlay } from './style';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { headerActions } from '../../store/modules/common/headerSlice';
import { mainActions } from '../../store/modules/main/mainSlice';

const Header = () => {
    const [menuState, setMenuState] = useState(false);
    const { opacityState } = useSelector((state) => state.header);
    const { logoShow } = useSelector((state) => state.main);
    const dispatch = useDispatch();
    const onClickEvent = () => {
        setMenuState(!menuState);
        dispatch(headerActions.setOpacityState());
        dispatch(mainActions.openMenu());
    };

    useEffect(() => {
        if (menuState) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuState, opacityState, logoShow]);
    return (
        <>
            <HeaderStyle style={{ opacity: opacityState ? '1' : '0.3' }}>
                <div className="inner">
                    <i className="menu-icon" onClick={onClickEvent}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                        >
                            <path
                                d="M3.27778 21C2.91574 21 2.61249 20.872 2.368 20.616C2.12352 20.36 2.00086 20.0435 2 19.6666C1.99915 19.2898 2.12182 18.9733 2.368 18.7173C2.61419 18.4613 2.91745 18.3333 3.27778 18.3333H23.7222C24.0843 18.3333 24.3879 18.4613 24.6333 18.7173C24.8786 18.9733 25.0008 19.2898 25 19.6666C24.9991 20.0435 24.8765 20.3604 24.632 20.6173C24.3875 20.8742 24.0843 21.0018 23.7222 21H3.27778ZM3.27778 14.3333C2.91574 14.3333 2.61249 14.2053 2.368 13.9493C2.12352 13.6933 2.00086 13.3769 2 13C1.99915 12.6231 2.12182 12.3067 2.368 12.0507C2.61419 11.7947 2.91745 11.6667 3.27778 11.6667H23.7222C24.0843 11.6667 24.3879 11.7947 24.6333 12.0507C24.8786 12.3067 25.0008 12.6231 25 13C24.9991 13.3769 24.8765 13.6938 24.632 13.9507C24.3875 14.2075 24.0843 14.3351 23.7222 14.3333H3.27778ZM3.27778 7.66666C2.91574 7.66666 2.61249 7.53866 2.368 7.28266C2.12352 7.02666 2.00086 6.71022 2 6.33333C1.99915 5.95644 2.12182 5.64 2.368 5.384C2.61419 5.128 2.91745 5 3.27778 5H23.7222C24.0843 5 24.3879 5.128 24.6333 5.384C24.8786 5.64 25.0008 5.95644 25 6.33333C24.9991 6.71022 24.8765 7.02711 24.632 7.284C24.3875 7.54089 24.0843 7.66844 23.7222 7.66666H3.27778Z"
                                fill="white"
                            />
                        </svg>
                    </i>
                    <h2 className="logo" style={{ display: logoShow ? 'block' : 'none' }}>
                        <img src="/logo.png" alt="" />
                    </h2>
                    <ul className="top-nav">
                        <li>
                            <Link to="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                >
                                    <path
                                        d="M13 13C16.315 13 19 10.315 19 7C19 3.685 16.315 1 13 1C9.685 1 7 3.685 7 7C7 10.315 9.685 13 13 13ZM13 16C8.995 16 1 18.01 1 22V25H25V22C25 18.01 17.005 16 13 16Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                >
                                    <path
                                        d="M20.2 20.2C20.8365 20.2 21.447 20.4529 21.8971 20.9029C22.3471 21.353 22.6 21.9635 22.6 22.6C22.6 23.2365 22.3471 23.847 21.8971 24.2971C21.447 24.7471 20.8365 25 20.2 25C19.5635 25 18.953 24.7471 18.5029 24.2971C18.0529 23.847 17.8 23.2365 17.8 22.6C17.8 21.268 18.868 20.2 20.2 20.2ZM1 1H4.924L6.052 3.4H23.8C24.1183 3.4 24.4235 3.52643 24.6485 3.75147C24.8736 3.97652 25 4.28174 25 4.6C25 4.804 24.94 5.008 24.856 5.2L20.56 12.964C20.152 13.696 19.36 14.2 18.46 14.2H9.52L8.44 16.156L8.404 16.3C8.404 16.3796 8.43561 16.4559 8.49187 16.5121C8.54813 16.5684 8.62444 16.6 8.704 16.6H22.6V19H8.2C7.56348 19 6.95303 18.7471 6.50294 18.2971C6.05286 17.847 5.8 17.2365 5.8 16.6C5.8 16.18 5.908 15.784 6.088 15.448L7.72 12.508L3.4 3.4H1V1ZM8.2 20.2C8.83652 20.2 9.44697 20.4529 9.89706 20.9029C10.3471 21.353 10.6 21.9635 10.6 22.6C10.6 23.2365 10.3471 23.847 9.89706 24.2971C9.44697 24.7471 8.83652 25 8.2 25C7.56348 25 6.95303 24.7471 6.50294 24.2971C6.05286 23.847 5.8 23.2365 5.8 22.6C5.8 21.268 6.868 20.2 8.2 20.2ZM19 11.8L22.336 5.8H7.168L10 11.8H19Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 21.75C12.345 21.75 13.2645 21.411 14.2305 19.479C14.6895 18.561 15.075 17.424 15.3435 16.125H8.6565C8.925 17.424 9.3105 18.561 9.7695 19.479C10.7355 21.411 11.655 21.75 12 21.75ZM8.331 13.875C8.22229 12.6274 8.22229 11.3726 8.331 10.125H15.669C15.777 11.3727 15.777 12.6273 15.669 13.875H8.331ZM17.6355 16.125C17.2995 17.961 16.746 19.587 16.0365 20.877C18.1493 19.9122 19.8505 18.228 20.8365 16.125H17.6355ZM21.57 13.875H17.925C18.0228 12.6269 18.0228 11.3731 17.925 10.125H21.5685C21.8111 11.3632 21.8111 12.6368 21.5685 13.875H21.57ZM6.0735 13.875H2.43C2.18735 12.6368 2.18735 11.3632 2.43 10.125H6.075C5.97719 11.3731 5.97719 12.6269 6.075 13.875H6.0735ZM3.1635 16.125H6.3645C6.7005 17.961 7.254 19.587 7.9635 20.877C5.85069 19.9122 4.14948 18.228 3.1635 16.125ZM8.6565 7.875H15.3435C15.075 6.576 14.6895 5.439 14.2305 4.521C13.2645 2.589 12.345 2.25 12 2.25C11.655 2.25 10.7355 2.589 9.7695 4.521C9.3105 5.439 8.925 6.576 8.6565 7.875ZM17.6355 7.875H20.8365C19.8505 5.77199 18.1493 4.08779 16.0365 3.123C16.746 4.413 17.2995 6.039 17.6355 7.875ZM7.965 3.123C7.2555 4.413 6.702 6.039 6.366 7.875H3.1635C4.14948 5.77199 5.85219 4.08779 7.965 3.123ZM12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </HeaderStyle>

            <MenuStyle className={`${menuState ? 'on' : ''}`}>
                <ul className="inner">
                    <li className="first">
                        <strong>
                            CASE의
                            <br />
                            한계를 깨다
                        </strong>
                        <div className="video"></div>
                    </li>
                    <li className="second">
                        <Link>
                            <div className="w600">
                                <p className="menu-title">
                                    <strong>CASE</strong>
                                    <span>|</span>
                                    <span>Apple</span>
                                    <img
                                        src="/images/header/header1.png"
                                        alt=""
                                        style={{
                                            width: 245,
                                            height: 260,
                                            position: 'absolute',
                                            right: 50,
                                        }}
                                    />
                                </p>
                            </div>
                        </Link>
                        <Link>
                            <div
                                className="w600"
                                style={{
                                    backgroundImage: `url('/images/header/header2.png')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}
                            >
                                <p className="menu-title" style={{ width: 220 }}>
                                    <strong>CASE</strong>
                                    <span>|</span>
                                    <span>Samsung</span>
                                </p>
                            </div>
                        </Link>
                        <Link>
                            <div
                                className="w400"
                                style={{
                                    backgroundImage: `url('/images/header/header3.png')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}
                            >
                                <p className="menu-title" style={{ justifyContent: 'flex-start' }}>
                                    <strong>ACC</strong>
                                    <span></span>
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className="third">
                        <div className="title-area">
                            <strong>K-Content Lineup</strong>
                        </div>
                        <ul className="third-menus">
                            <li
                                style={{
                                    backgroundImage: `url('/images/header/K1.jpg')`,
                                }}
                            >
                                <Link>K-Sports</Link>
                            </li>
                            <li style={{ backgroundImage: `url('/images/header/K2.jpg')` }}>
                                <Link>K-Content</Link>
                            </li>
                            <li style={{ backgroundImage: `url('/images/header/k3.jpg')` }}>
                                <Link>K-Art</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </MenuStyle>
            {menuState && <ModalOverlay />}
        </>
    );
};

export default Header;
