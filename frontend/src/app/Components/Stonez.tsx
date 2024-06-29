import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMore from '@mui/icons-material/ExpandMore';

interface Props {
    feature?: string;
}

const helpSections = [
    {
        "title": "Challenge Arena",
        "content": "Visit the Challenge Arena to face waves of monsters in an idle battle format. Your character will automatically fight, earning rewards and progressing even when you're not actively playing. Level up your stats to get farther by selling the resources you gather."
    },
    {
        "title": "Shop",
        "content": "Visit the shop to buy and sell resources. You can access the shop via GUI shortcuts or by walking to them in the main town. Use the resources you gather to purchase upgrades and items to help you on your journey."
    },
    {
        "title": "Gathering Resources",
        "sections": [
            {
                "subtitle": "Wood",
                "content": "Collect wood by clicking on specific trees. Wood is a primary resource used for various upgrades and crafting. Certain trees may yield more wood or special types of wood."
            },
            {
                "subtitle": "Stonez",
                "content": "Gather stonez by clicking on certain rocks. Stonez are crucial for building and upgrading your equipment. Different rocks may provide different types or quantities of stonez."
            }
        ]
    },
    {
        "title": "Exploring the World",
        "sections": [
            {
                "subtitle": "Movement",
                "content": "Move your character by either tap-to-click or using the virtual joystick. This allows you to navigate through the world, discover new areas, and gather resources."
            },
            {
                "subtitle": "Discovery",
                "content": "As you explore, you'll uncover various locations, each with unique resources and challenges. Exploration is key to finding rare resources and new areas to gather materials."
            }
        ]
    },
    {
        "title": "Leveling Up",
        "content": "Level up your character’s stats by selling the resources you gather. Improving your strength, attack, and defense will help you progress further in the Challenge Arena and face tougher enemies."
    },
    {
        "title": "Using the GUI Shortcuts",
        "content": "Access various features such as the shop and your inventory quickly using the GUI shortcuts. This makes managing your resources and upgrading your character more efficient."
    },
    {
        "title": "Combat Mechanics",
        "sections": [
            {
                "subtitle": "Idle Combat",
                "content": "In the Challenge Arena, your character will automatically engage in combat with waves of enemies. This idle feature allows you to earn rewards and progress even when you're not actively playing."
            },
        ]
    },
    {
        "title": "Resource Management",
        "content": "Efficiently managing your gathered resources is crucial for progressing in Stonez. Sell excess resources to fund your upgrades and ensure you always have enough materials for crafting and leveling up."
    },
    {
        "title": "Tips and Tricks",
        "sections": [
            {
                "subtitle": "Efficient Gathering",
                "content": "Focus on gathering resources from areas with high yield. This will save time and help you gather enough materials for upgrades faster."
            },
            {
                "subtitle": "Balanced Upgrades",
                "content": "Balance upgrading your strength, attack, and defense to ensure you can handle both gathering and combat effectively. Neglecting one area can make progression difficult."
            },
            {
                "subtitle": "Exploration Priority",
                "content": "Prioritize exploring new areas to unlock additional resources and challenges. The more areas you unlock, the more options you have for gathering and leveling up."
            }
        ]
    }
];

export default function Stonez(props: Props) {
    let defaultFeature = props.feature ? props.feature : 'help';

    const [feature, setFeature] = useState(defaultFeature);

    const renderFeature = () => {
        if (feature === "feedback") {
            return <>
            <div style={{ fontSize: '3.0rem', textAlign: 'center' }}>Feedback</div>
            <Button onClick={() => {
                const surveyUrl = 'https://www.surveymonkey.com/r/XPBJFWQ';
                try {
                    //@ts-ignore
                    window.open(surveyUrl, '_blank').focus();
                }
                catch(e) {}
            }} sx={{width: '100%'}} variant="outlined" >
                Provide Feedback
            </Button>
        </>
        }
        if (feature === "help") {
            return <>
                <div style={{ fontSize: '3.0rem', textAlign: 'center' }}>Help</div>
                {helpSections.map((section, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls={`${section.title.toLowerCase().replace(/ /g, '-')}-content`}
                            id={`${section.title.toLowerCase().replace(/ /g, '-')}-header`}
                        >
                            <Typography>{section.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {section.content && <Typography>{section.content}</Typography>}
                            {section.sections && section.sections.map((subSection, subIndex) => (
                                <Box key={subIndex} ml={2} mt={2}>
                                    <Typography variant="h6">{subSection.subtitle}</Typography>
                                    <Typography>{subSection.content}</Typography>
                                </Box>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </>
        }

        return <span />
    }

    return <div id="stonez">
        <Stack justifyContent={"center"} direction="column">
            <Stack justifyContent={"center"} direction={"row"}>
                <img className="logo" src="https://cdn.barnyak.com/stonez.png" alt="stonez logo" />
            </Stack>

            <Stack justifyContent={"center"} direction={"row"}>

                <div className="paper">
                    <div className="paperInner" style={{ maxWidth: '600px' }}>
                        {renderFeature()}
                    </div>
                </div>
            </Stack>
        </Stack>
    </div>
}
