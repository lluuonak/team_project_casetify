import { SelectPartialStyle } from '../style';

const SelectPartial = ({ forPhone }) => {
    return (
        <SelectPartialStyle>
            <span>Apple</span>
            <span>|</span>
            <span style={{ width: 126 }}>{forPhone}</span>
            <i>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                >
                    <g clipPath="url(#clip0_1956_17091)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.089 13.0883C10.9328 13.2445 10.7208 13.3323 10.4999 13.3323C10.2789 13.3323 10.067 13.2445 9.91071 13.0883L5.19655 8.37415C5.11695 8.29727 5.05347 8.20532 5.00979 8.10365C4.96612 8.00198 4.94313 7.89263 4.94217 7.78198C4.94121 7.67133 4.96229 7.5616 5.00419 7.45919C5.0461 7.35677 5.10797 7.26373 5.18622 7.18548C5.26446 7.10724 5.3575 7.04536 5.45992 7.00346C5.56233 6.96156 5.67206 6.94048 5.78271 6.94144C5.89336 6.9424 6.00271 6.96539 6.10438 7.00906C6.20605 7.05274 6.29801 7.11622 6.37488 7.19581L10.4999 11.3208L14.6249 7.19581C14.782 7.04401 14.9925 6.96002 15.211 6.96192C15.4295 6.96382 15.6386 7.05146 15.7931 7.20596C15.9476 7.36047 16.0352 7.56948 16.0371 7.78798C16.039 8.00648 15.955 8.21698 15.8032 8.37415L11.089 13.0883Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1956_17091">
                            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            </i>
        </SelectPartialStyle>
    );
};

export default SelectPartial;
