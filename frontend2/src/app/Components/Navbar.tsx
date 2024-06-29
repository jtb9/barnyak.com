import { Divider, Stack } from "@mui/material";
import Logo from "./Logo";
import Xarrow from "react-xarrows";

interface Props {
    onChange: (path: string) => void;
}

export default function Navbar(props: Props) {
    const navigationOptions = [
        {
            label: "Home",
            path: "home"
        },
        {
            label: "Space",
            path: "space"
        },
        {
            label: "Video Games",
            path: "games"
        },
        {
            label: "GitHub",
            path: "https://github.com/jtb9"
        },
        {
            label: "Work Samples",
            path: "https://cdn.barnyak.com/auto/JustinBarnyak-2024-worksamples.pdf"
        }
    ]

    const renderNavOption = (path: string, label: string) => {
        return <div key={`nav-${label}`} className="navOption" onClick={() => {
            if (path.includes("https://")) {
                //@ts-ignore
                window.open(path, '_blank').focus();
            }
            else {
                props.onChange(path);
            }
        }}>
            {label}
        </div>
    }

    let options = [];

    for (let i = 0; i < navigationOptions.length; i++) {
        options.push(
            renderNavOption(navigationOptions[i].path, navigationOptions[i].label)
        );
    }

    return <Stack direction="column">
        <Stack sx={{ maxWidth: '500px', width: '500px', margin: 'auto' }} direction="row" justifyContent={"left"}>
            <Logo navigateHome={() => {
                props.onChange("home");
            }} />
            <div id="navbarX" />
        </Stack>
        <div style={{ maxWidth: '500px', margin: 'auto', marginTop: '10px' }} className="paper">
            <div style={{ paddingLeft: '10px', paddingRight: '10px' }} className="paperInner">
                <Stack id="navbarL" sx={{ height: '25px' }} direction="row" gap={"10px"} divider={<Divider sx={{ height: '25px' }} orientation="vertical" flexItem />} className="navBar">

                    {options}
                </Stack>
            </div>
        </div>
        <Xarrow divContainerStyle={{zIndex: '10'}} start="navbarX" end="navbarL" color="#EF476F"
        strokeWidth={4}
        headSize={5}
        path="smooth"
        dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: 2 }}
        curveness={0.5} endAnchor="top" startAnchor="right" />
        {/* <Xarrow divContainerStyle={{zIndex: '10'}} start="navbarL" end="aritlceListY" color="#00ffcc"
        strokeWidth={4}
        headSize={10}
        path="smooth"
        dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: 2 }}
        curveness={0.5} startAnchor="left"
        endAnchor="top" />
                <Xarrow divContainerStyle={{zIndex: '10'}} start="navbarL" end="aritlceListX" color="#00ffcc"
        strokeWidth={4}
        headSize={10}
        path="smooth"
        dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: 2 }}
        curveness={0.5} startAnchor="right"
        endAnchor="top" /> */}
    </Stack>
}
