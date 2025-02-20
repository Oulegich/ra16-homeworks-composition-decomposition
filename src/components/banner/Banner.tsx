/**
 * Компонент - элемент новости
 */

const Banner = ({ ...props }: IPropsBanner) => {
    const { src, alt } = props;

    return (
        <img src={src} alt={alt} className="banner" />
    )
}

export default Banner