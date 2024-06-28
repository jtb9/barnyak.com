interface Props {
    src: string;
    alt: string;
    className?: string;
    onClick?: any;
}

export default function Image(props: Props) {
    const {
        className,
        alt,
        src,
        onClick
    } = props;

    return <img style={{
        cursor: 'pointer'
    }} onClick={onClick} className={className} alt={alt} src={src} />
}
