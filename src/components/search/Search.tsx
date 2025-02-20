/**
 * Компонент - поиска
 */

const Search = () => {
    return (
        <form className="search-form">
            <input placeholder='Найдется всё' type="text" className="search-input"/>
            <button className="search-btn" type='submit'>Найти</button>
        </form>
    )
}

export default Search