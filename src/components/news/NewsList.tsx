import NewsItem from "./NewsItem"

/**
 * Компонент - список n новостей
 */

const NewsList = ({ lengthList }: { lengthList: number }) => {

    return (
        <ul className="news-list">
            {[...Array(lengthList)].map((_, i) => i + 1).map((_, indx) => (
                <li className="news-elem" key={indx + 1}><NewsItem iconSrc={'https://img.freepik.com/free-vector/future-night-city-with-futuristic-skyscrapers_107791-996.jpg'} text={`Текст новости ${indx + 1}`} link={'#'} /></li>
            ))}
        </ul>)
}

export default NewsList