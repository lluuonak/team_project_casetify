import { useNavigate } from 'react-router-dom';
import { TitleSectionStyle } from './style';

const TitleSection = ({ title }) => {
    const navigator = useNavigate();
    return (
        <TitleSectionStyle>
            <div className="common-title">
                <i
                    onClick={() => {
                        navigator(-1);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.8216 21.1844C13.5092 20.8719 13.3336 20.448 13.3336 20.0061C13.3336 19.5642 13.5092 19.1403 13.8216 18.8278L23.25 9.39944C23.4037 9.24026 23.5876 9.11328 23.791 9.02594C23.9943 8.93859 24.213 8.89261 24.4343 8.89069C24.6556 8.88876 24.8751 8.93093 25.0799 9.01474C25.2847 9.09854 25.4708 9.22229 25.6273 9.37878C25.7838 9.53527 25.9075 9.72135 25.9913 9.92618C26.0751 10.131 26.1173 10.3505 26.1154 10.5718C26.1135 10.7931 26.0675 11.0118 25.9801 11.2151C25.8928 11.4185 25.7658 11.6024 25.6066 11.7561L17.3566 20.0061L25.6066 28.2561C25.9102 28.5704 26.0782 28.9914 26.0744 29.4284C26.0706 29.8654 25.8953 30.2835 25.5863 30.5925C25.2773 30.9015 24.8593 31.0768 24.4223 31.0806C23.9853 31.0844 23.5643 30.9164 23.25 30.6128L13.8216 21.1844Z"
                            fill="white"
                        />
                    </svg>
                </i>
                <h3>{title}</h3>
            </div>
        </TitleSectionStyle>
    );
};

export default TitleSection;
