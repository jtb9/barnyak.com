import { LinearProgress, Tooltip } from "@mui/material";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    src: string;
    alt: string;
    className?: string;
    onClick?: any;
    inline?: any;
    children?: any;
}

export default function Image(props: Props) {
    const {
        className,
        alt,
        src,
        onClick
    } = props;

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '50px',
    });

    const [loaded, setLoaded] = useState(false);

    return <div style={{ width: '100%' }} ref={ref}>
        {!loaded && <LinearProgress />}
        {inView && (
            <img style={{
                cursor: 'pointer'
            }} onClick={onClick} className={className} alt={alt} src={src} onLoad={() => {
                setLoaded(true);
            }} />
        )}
    </div>


    // return <img style={{
    //     cursor: 'pointer'
    // }} onClick={onClick} className={className} alt={alt} src={src} />
}
