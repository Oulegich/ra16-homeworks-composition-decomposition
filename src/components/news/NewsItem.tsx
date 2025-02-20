/**
 * Компонент - элемент новости
 */

const NewsItem = ({ ...props }: IPropsNewsItem) => {

    const { iconSrc, text, link } = props;

    return (
        <a href={link} className="news-item-link"><img className='news-item-icon' src={iconSrc} alt="icon-news" />{text}</a>
    )
}

export default NewsItem