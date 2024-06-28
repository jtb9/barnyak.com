interface Props {
    src: string;
    alt: string;
    className?: string;
}

export default function Image(props: Props) {
    const {
        className,
        alt,
        src
    } = props;

    return <img className={className} alt={alt} src={src} />
}
