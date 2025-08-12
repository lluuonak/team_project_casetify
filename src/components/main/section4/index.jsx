import { Link } from 'react-router-dom';
import { Section4Style } from './style';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const Section4 = () => {
    const { contentList } = useSelector((state) => state.section4);

    return (
        <Section4Style>
            <ul className="contents-list">
                <li className="title-area">
                    <article>
                        <strong>Korea의 무한한 가능성을 케이스에 담다</strong>
                        <span>
                            스포츠, 콘텐츠, 예술까지.
                            <br />
                            당신의 라이프스타일을 케이스로 완성하세요.
                        </span>
                    </article>
                </li>
                {contentList.map(({ strong, span, link, data, id }) => (
                    <li className="contents" key={id}>
                        <div className="top">
                            <div className="title">
                                <strong>{strong}</strong>
                                <span>{span}</span>
                            </div>
                            <Link
                                to="Ksports"
                                className="more"
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'instant' });
                                }}
                            >
                                MORE
                            </Link>
                        </div>
                        <ul className="bottom">
                            {data.map((item) => (
                                <ListItem key={item.id} data={item} parentId={id} />
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </Section4Style>
    );
};

export default Section4;
