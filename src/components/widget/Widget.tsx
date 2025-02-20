import { PropsWithChildren } from "react";

/**
 * Компонент - виджет
 */

const Widget = ({ children, ...props }: PropsWithChildren<IPropsWidget>) => {

    const { title } = props;

    return (
        <div className="widget">
            <h2 className="widget-title">{title}</h2>
            {children}
        </div>
    )
}

export default Widget