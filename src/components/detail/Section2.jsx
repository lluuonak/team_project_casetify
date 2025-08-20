import { Section2Style } from './style';

const Section2 = () => {
    return (
        <Section2Style>
            <div className="inner">
                <div className="top">
                    <div className="title">
                        <strong>Apple</strong>
                        <span>애플</span>
                    </div>
                    <i>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                        >
                            <path
                                d="M10.25 2C10.25 1.66848 10.1183 1.35054 9.88388 1.11612C9.64946 0.881696 9.33152 0.75 9 0.75C8.66848 0.75 8.35054 0.881696 8.11612 1.11612C7.8817 1.35054 7.75 1.66848 7.75 2V8.25H1.5C1.16848 8.25 0.850537 8.3817 0.616117 8.61612C0.381696 8.85054 0.25 9.16848 0.25 9.5C0.25 9.83152 0.381696 10.1495 0.616117 10.3839C0.850537 10.6183 1.16848 10.75 1.5 10.75H7.75V17C7.75 17.3315 7.8817 17.6495 8.11612 17.8839C8.35054 18.1183 8.66848 18.25 9 18.25C9.33152 18.25 9.64946 18.1183 9.88388 17.8839C10.1183 17.6495 10.25 17.3315 10.25 17V10.75H16.5C16.8315 10.75 17.1495 10.6183 17.3839 10.3839C17.6183 10.1495 17.75 9.83152 17.75 9.5C17.75 9.16848 17.6183 8.85054 17.3839 8.61612C17.1495 8.3817 16.8315 8.25 16.5 8.25H10.25V2Z"
                                fill="white"
                            />
                        </svg>
                    </i>
                </div>

                <ul className="items">
                    <li>
                        <div className="img">
                            <img src="/images/detail/phone/Big Bobo/1.webp" alt="" />
                        </div>
                        <div className="text-area">
                            <strong>Ripple Case - Periwinkle</strong>
                            <span className="price">₩89,000</span>
                        </div>
                    </li>
                    <li>
                        <div className="img">
                            <img src="/images/detail/phone/Black Kingsnake/1.webp" alt="" />
                        </div>
                        <div className="text-area">
                            <strong>Ripple Case - Periwinkle</strong>
                            <span className="price">₩89,000</span>
                        </div>
                    </li>
                    <li>
                        <div className="img">
                            <img src="/images/detail/phone/Black Organza Ribbon/1.webp" alt="" />
                        </div>
                        <div className="text-area">
                            <strong>Ripple Case - Periwinkle</strong>
                            <span className="price">₩89,000</span>
                        </div>
                    </li>
                    <li>
                        <div className="img">
                            <img
                                src="/images/detail/phone/Blue Background Wavy Border/1.webp"
                                alt=""
                            />
                        </div>
                        <div className="text-area">
                            <strong>Ripple Case - Periwinkle</strong>
                            <span className="price">₩89,000</span>
                        </div>
                    </li>
                </ul>

                <span className="more">MORE VIEW</span>
            </div>
            <div className="text">No right answer. Just your own way.</div>
        </Section2Style>
    );
};

export default Section2;
