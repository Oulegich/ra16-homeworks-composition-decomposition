import Widget from "./Widget"

/**
 * Компонент - список виджетов
 */

const Widgets = ({ lengthWidgets }: { lengthWidgets: number }) => {

    return (
        <ul className="widgets-list">
            {[...Array(lengthWidgets)].map((_, i) => i + 1).map((_, indx) => (
                <li className="widget-elem" key={indx + 1}>
                    <Widget title={`Заголовок виджета ${indx + 1}`}>
                        <div className="widget-content">Основной контент виджета {indx + 1}</div>
                    </Widget>
                </li>
            ))}
        </ul>
    )
}

export default Widgets