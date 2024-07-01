import { Button, Dialog, DialogContent, LinearProgress, Slide, Stack, Tooltip } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import DownloadIcon from '@mui/icons-material/Download';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
interface Props {
    src: string;
    alt: string;
    className?: string;
    onClick?: any;
    inline?: any;
    children?: any;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Image(props: Props) {
    const {
        className,
        alt,
        src,
        onClick
    } = props;

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOnClick = () => {
        if (onClick) {
            onClick();
        }
        else{
            setDialogOpen(true);
        }
    }

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '50px',
    });

    const [loaded, setLoaded] = useState(false);

    return <div style={{ width: '100%' }} ref={ref}>
        {!loaded && <LinearProgress />}
        {inView && (
            <>
                <img style={{
                    cursor: 'pointer'
                }} onClick={handleOnClick} className={className} alt={alt} src={src} onLoad={() => {
                    setLoaded(true);
                }} />

                <Dialog
                    open={dialogOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => {
                        setDialogOpen(false);
                    }}
                    maxWidth={"xl"}
                    aria-describedby="full-screen-image-view-dialog"
                >
                    <div style={{position: 'relative', overflow: 'hidden', background: 'black'}}>
                        <Button onClick={() => {
                            //@ts-ignore
                            window.open(src, '_blank').focus();
                        }} className="imageViewButton" variant="contained" sx={{position: 'absolute', top: '5px', left: "5px", zIndex: '9999', minWidth: '40px', width: '40px'}}><OpenInBrowserIcon /></Button>
                        <img src={src} alt={`fullscreen ${alt}`} className="fullScreenImage" />
                    </div>
                </Dialog>
            </>
        )}
    </div>


    // return <img style={{
    //     cursor: 'pointer'
    // }} onClick={onClick} className={className} alt={alt} src={src} />
}
