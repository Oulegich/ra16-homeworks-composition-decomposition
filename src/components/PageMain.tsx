import Banner from "./banner/Banner"
import NewsList from "./news/NewsList"
import Search from "./search/Search"
import Widgets from "./widget/Widgets"

const PageMain = () => {
    return (
        <div className="page-main">
            <NewsList lengthList={5} />
            <Search />
            <Banner src='https://job-opros.ru/wp-content/uploads/2018/06/banerrekblog.jpg' alt="banner" />
            <Widgets lengthWidgets={5} />
        </div>
    )
}

export default PageMain