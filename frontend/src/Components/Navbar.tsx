import { Divider, Stack } from "@mui/material";
import Logo from "./Logo";

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
        return <div className="navOption" onClick={() => {
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
        <Stack direction="row" justifyContent={"center"}><Logo navigateHome={() => {
            props.onChange("home");
        }} /></Stack>
        <Stack direction="row" divider={<Divider sx={{height: '20px', position: 'relative', top: '15px'}} orientation="vertical" flexItem />} className="navBar">

            {options}
        </Stack>
    </Stack>
}
