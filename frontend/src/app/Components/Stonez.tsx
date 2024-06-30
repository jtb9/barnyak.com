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
        if (feature === "privacy") {
            return <div>
                <strong>Privacy Policy</strong>
                <p>This privacy policy applies to the Stonez app (hereby referred to as "Application") for mobile devices that was created by Justin Barnyak (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</p><br />
                <strong>Information Collection and Use</strong><p>The Application collects information when you download and use it. This information may include information such as</p>
                <ul><li>Your device's Internet Protocol address (e.g. IP address)</li>
                    <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                    <li>The time spent on the Application</li><li>The operating system you use on your mobile device</li></ul><p></p><br />
                <p>The Application does not gather precise information about the location of your mobile device.</p>
                <div><p>The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</p>
                    <ul><li>Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li><li>Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li><li>Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li></ul></div><br /><p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p><br /><p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>
                <br /><strong>Third Party Access</strong><p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p><div><br /><p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p><ul><li>
                    <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li></ul></div><br /><p>The Service Provider may disclose User Provided and Automatically Collected Information:</p><ul><li>as required by law, such as to comply with a subpoena, or similar legal process;</li><li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li><li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li></ul><p></p><br /><strong>Opt-Out Rights</strong><p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
                <br /><strong>Data Retention Policy</strong><p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at justin@barnyak.com and they will respond in a reasonable time.</p><br /><strong>Children</strong><p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
                <div><br /><p>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (justin@barnyak.com) so that they will be able to take the necessary actions.</p></div><br /><strong>Security</strong><p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p><br /><strong>Changes</strong><p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p><br /><p>This privacy policy is effective as of 2024-06-19</p><br /><strong>Your Consent</strong><p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p><br /><strong>Contact Us</strong><p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at justin@barnyak.com.</p><hr/><p>This privacy policy page was generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a></p>
            </div>
        }
        if (feature === "feedback") {
            return <>
                <div style={{ fontSize: '3.0rem', textAlign: 'center' }}>Feedback</div>
                <Button onClick={() => {
                    const surveyUrl = 'https://www.surveymonkey.com/r/XPBJFWQ';
                    try {
                        //@ts-ignore
                        window.open(surveyUrl, '_blank').focus();
                    }
                    catch (e) { }
                }} sx={{ width: '100%' }} variant="outlined" >
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
