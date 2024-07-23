import { Divider, Stack } from "@mui/material";
import Logo from "./Logo";
import Xarrow from "react-xarrows";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
interface Props {
    onChange: (path: string) => void;
}

export default function Navbar(props: Props) {
    const navigationOptions = [
        {
            label: "Home",
            path: "home",
            icon: <HomeIcon />
        },
        {
            label: "Space",
            path: "space",
            icon: <SatelliteAltIcon />
        },
        {
            label: "Games",
            path: "games",
            icon: <AttractionsIcon />
        },
        {
            label: "GitHub",
            path: "https://github.com/jtb9",
            icon: <GitHubIcon />
        },
        {
            label: "Portfolio",
            path: "https://cdn.barnyak.com/auto/JustinBarnyak-2024-worksamples.pdf",
            icon: <ArticleIcon />
        },
        {
            label: "Prints",
            path: 'https://paperzcrafts.etsy.com',
            icon: <LocalPrintshopIcon />
        }
    ]

    const renderNavOption = (path: string, label: string, icon?: any) => {
        return <div key={`nav-${label}`} className="navOption" onClick={() => {
            if (path.includes("https://")) {
                //@ts-ignore
                window.open(path, '_blank').focus();
            }
            else {
                props.onChange(path);
            }
        }}>
            <Stack direction="row">
                {icon}
                <div style={{ paddingLeft: '2px', position: 'relative', top: '2px' }}>{label}</div>
            </Stack>
        </div>
    }

    let options = [];

    for (let i = 0; i < navigationOptions.length; i++) {
        options.push(
            renderNavOption(navigationOptions[i].path, navigationOptions[i].label, navigationOptions[i].icon)
        );
    }

    return <Stack direction="column">
        <Stack sx={{ maxWidth: '500px', width: '500px', margin: 'auto', marginTop: '10px' }} direction="row" justifyContent={"left"}>
            <Logo navigateHome={() => {
                props.onChange("home");
            }} />
            <div id="navbarX" />
        </Stack>
        <div style={{ maxWidth: '500px', margin: 'auto', marginTop: '10px' }} className="paper">
            <div style={{ paddingLeft: '10px', paddingRight: '10px' }} className="paperInner">
                <Stack id="navbarL" sx={{
                    flexDirection: {
                        xs: 'column', // Mobile view: stack items vertically
                        sm: 'row',    // Tablet and above: stack items horizontally
                    },
                }} gap={"10px"} direction="column"  className="navBar">

                    {options}
                </Stack>
            </div>
        </div>
        {/* <Xarrow divContainerStyle={{zIndex: '10', float: 'left'}} start="navbarX" end="navbarL" color="#EF476F"
        strokeWidth={4}
        headSize={5}
        path="smooth"
        dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: 2 }}
        curveness={0.5} endAnchor="top" startAnchor="right" /> */}
    </Stack>
}
