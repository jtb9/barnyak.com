import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArticleMetadata from "./ArticleMetadata";
import Image from './Image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { scrollToTop } from "Utils/Behavior";
import { useLocomotiveScroll } from "react-locomotive-scroll";

interface Props {
  category: string;
  choseArticle: (newArticle: any) => void;
}

export const ARTICLE_DATA = [
  {
    "title": "Florida Photography 2024",
    "thumbnail": "https://cdn.barnyak.com/auto/blog_set_1_1.jpg",
    "date": "2024-05-18T04:00:00.000Z",
    "slug": "5_18_24_photography_florida",
    "categories": [
      "photography"
    ],
    "author": "Justin Barnyak",
    "summary": "## Location: [Florida](https://en.wikipedia.org/wiki/Florida)\r",
    "content": "## Location: [Florida](https://en.wikipedia.org/wiki/Florida)\r\n\r\n![Butterfly](https://cdn.barnyak.com/auto/blog_set_1_8.jpg)\r\n![Lagoon](https://cdn.barnyak.com/auto/blog_set_1_4.jpg)\r\n![Plants on the beach](https://cdn.barnyak.com/auto/blog_set_1_1.jpg)\r\n![Rocks on the beach](https://cdn.barnyak.com/auto/blog_set_1_2.jpg)\r\n![Trees in the distance](https://cdn.barnyak.com/auto/blog_set_1_5.jpg)\r\n![Local Art](https://cdn.barnyak.com/auto/blog_set_1_6.jpg)\r\n![Fence on a hike](https://cdn.barnyak.com/auto/blog_set_1_7.jpg)\r\n"
  },
  {
    "title": "Williamsport Skyline Photography",
    "thumbnail": "https://cdn.barnyak.com/auto/blog_set_2_2.jpg",
    "date": "2024-05-23T04:00:00.000Z",
    "slug": "5_23_24_photography_williamsport",
    "categories": [
      "photography"
    ],
    "author": "Justin Barnyak",
    "summary": "## Location: [Williamsport Skyline Dr](https://maps.app.goo.gl/u9vrAZ797YFLoYdr6)\r",
    "content": "## Location: [Williamsport Skyline Dr](https://maps.app.goo.gl/u9vrAZ797YFLoYdr6)\r\n\r\n![Fence](https://cdn.barnyak.com/auto/blog_set_2_2.jpg)\r\n![Tree](https://cdn.barnyak.com/auto/blog_set_2_5.jpg)\r\n![Statue](https://cdn.barnyak.com/auto/blog_set_2_4.jpg)\r\n![View](https://cdn.barnyak.com/auto/blog_set_2_3.jpg)\r\n![Woods And Snow](https://cdn.barnyak.com/auto/blog_set_2_1.jpg)\r\n"
  },
  {
    "title": "Williamsport Mushroom Photography",
    "thumbnail": "https://cdn.barnyak.com/auto/blog_set_3_6.jpg",
    "date": "2024-05-25T04:00:00.000Z",
    "slug": "5_25_24_photography_williamsport_mushrooms",
    "categories": [
      "photography"
    ],
    "author": "Justin Barnyak",
    "summary": "## Location: [Williamsport Rose Valley Lake](https://en.wikipedia.org/wiki/Rose_Valley_Lake_(Pennsylvania))\r",
    "content": "## Location: [Williamsport Rose Valley Lake](https://en.wikipedia.org/wiki/Rose_Valley_Lake_(Pennsylvania))\r\n\r\n![Mushroom 1](https://cdn.barnyak.com/auto/blog_set_3_1.jpg)\r\n![Mushroom 2](https://cdn.barnyak.com/auto/blog_set_3_2.jpg)\r\n![Mushroom 3](https://cdn.barnyak.com/auto/blog_set_3_3.jpg)\r\n![Mushroom 4](https://cdn.barnyak.com/auto/blog_set_3_4.jpg)\r\n![Mushroom 5](https://cdn.barnyak.com/auto/blog_set_3_5.jpg)\r\n![Mushroom 6](https://cdn.barnyak.com/auto/blog_set_3_6.jpg)\r\n"
  },
  {
    "title": "Granblue Fantasy Relink Review",
    "thumbnail": "https://cdn.barnyak.com/auto/granblue_fantasy_relink_F02Bqeg4VA.jpg",
    "date": "2024-06-21T04:00:00.000Z",
    "slug": "6_21_24_granblue",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Game: [Granblue Fantasy Relink](https://en.wikipedia.org/wiki/Granblue_Fantasy:_Relink)\r",
    "content": "## Game: [Granblue Fantasy Relink](https://en.wikipedia.org/wiki/Granblue_Fantasy:_Relink)\r\n\r\nHaving spent ample time with Granblue Fantasy Relink using a controller, I can confidently say the experience was highly enjoyable and immersive. My party consisted of Zeta, Ferry, Djeeta, and Rosetta, each bringing unique dynamics to the battlefield. As a fan of DPS (Damage Per Second) combat characters, I found the combat system both satisfying and fluid, allowing me to fully engage with the game’s mechanics.\r\n\r\n![Granblue2](https://cdn.barnyak.com/auto/granblue_fantasy_relink_sVXUEbEHI5.jpg)\r\n\r\nThe pacing of the game is well-crafted, ensuring that there’s never a dull moment. Whether you are exploring the lush, beautifully designed environments or engaging in intense battles, the flow of the game feels natural and well-balanced. The music deserves special mention, as it enhances the overall atmosphere, perfectly complementing the game’s stunning visuals and rich world design.\r\n\r\n![Granblue3](https://cdn.barnyak.com/auto/granblue_fantasy_relink_TD9j4knoDu.jpg)\r\n\r\nOne of the standout aspects of Granblue Fantasy Relink is its atmosphere and character designs. Each character and environment is meticulously crafted, creating a vibrant and engaging world that is a pleasure to explore. The attention to detail in both the visuals and the audio design contributes to a highly immersive experience that keeps you hooked from start to finish.\r\n\r\n![Granblue4](https://cdn.barnyak.com/auto/granblue_fantasy_relink_wM26cWEeVT.jpg)\r\n\r\nWhile the game excels in many areas, I did find the challenge level to be somewhat lacking. Playing on action mode, I felt that the difficulty could have been ramped up to provide a more satisfying challenge. However, this did not significantly detract from my overall enjoyment, as the game offers a rich density of content that keeps you engaged and entertained.\r\n\r\n![Granblue1](https://cdn.barnyak.com/auto/granblue_fantasy_relink_F02Bqeg4VA.jpg)\r\n\r\nIn conclusion, Granblue Fantasy Relink is a captivating and well-rounded game that delivers a highly enjoyable experience. With its excellent pacing, engaging combat, and beautifully designed world, it’s easy to lose yourself in the adventure. Although the challenge level could use some tweaking, the sheer amount of content and the quality of the overall experience make it a must-play for fans of the genre.\r\n"
  },
  {
    "title": "Stonez Developer Update Exciting Features Coming Soon!",
    "thumbnail": "https://cdn.barnyak.com/auto/stonez2.png",
    "date": "2024-06-20T04:00:00.000Z",
    "slug": "6_21_24_stonez1",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Game: [Stonez](https://barnyak.com)\r",
    "content": "## Game: [Stonez](https://barnyak.com)\r\n\r\n### Hello Stonez Adventurers!\r\n\r\nWe’re thrilled to share some exciting updates about our upcoming game, Stonez! Our team has been hard at work crafting a unique adventure experience that combines resource gathering, character upgrades, and idle battles. Here’s a sneak peek at what you can expect when the game launches.\r\nResource Gathering\r\n\r\n![Stonez1](https://cdn.barnyak.com/auto/stonez1.png)\r\n\r\nIn Stonez, your adventure begins with gathering essential resources:\r\n\r\n    Logs: Chop down trees to collect logs for crafting and upgrades.\r\n    Sap: Harvest sap from trees for special enhancements.\r\n    Rocks: Mine stones and pebbles to build and upgrade your equipment.\r\n    Gems: Discover rare gems, crucial for high-level upgrades.\r\n\r\n### Character Upgrades\r\n\r\nYour journey through Stonez will allow you to continually improve your character:\r\n\r\n    Strength: Increase your damage output to defeat tougher enemies.\r\n    Attack: Enhance your combat skills and become more effective in battles.\r\n    Defense: Boost your resilience and withstand enemy attacks longer.\r\n\r\n### Challenge Mode\r\n\r\n![Stonez2](https://cdn.barnyak.com/auto/stonez2.png)\r\n\r\nReady to test your skills? Enter the challenge mode and face waves of monsters in exciting idle battles. Your character will automatically fight, allowing you to earn rewards and progress even when you’re not actively playing. Face unique monsters and climb the ranks to become a legendary warrior.\r\nUser Interface\r\n\r\nWe’re dedicated to providing an intuitive and user-friendly experience:\r\n\r\n    Resource Indicators: Easily track your logs, sap, rocks, and gems.\r\n    Upgrade Menu: A straightforward menu to upgrade strength, attack, and defense.\r\n    Challenge Mode Interface: A seamless interface for tracking your progress and rewards in challenge mode.\r\n\r\n### What’s Next?\r\n\r\nAs we prepare for the official launch, we’re fine-tuning the gameplay, optimizing performance, and ensuring a smooth experience for all players. Your feedback will be invaluable as we continue to develop and improve Stonez.\r\n\r\nStay tuned for more updates, including our release date announcement, upcoming features, and special events. We can’t wait for you to join us in the world of Stonez and start your adventure!\r\n\r\nThank you for your support,\r\nThe Stonez Development Team\r\n"
  },
  {
    "title": "Stonez Developer Update New Tower Defense Feature!",
    "thumbnail": "https://cdn.barnyak.com/auto/stonez4.png",
    "date": "2024-06-21T04:00:00.000Z",
    "slug": "6_21_24_stonez2",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Game: [Stonez](https://barnyak.com)\r",
    "content": "## Game: [Stonez](https://barnyak.com)\r\n\r\n### Hello Stonez Adventurers!\r\n\r\nWe’re excited to announce a brand-new feature coming soon to Stonez: Tower Defense Mode! Prepare to defend your base against endless waves of enemies using an array of powerful turrets. Here’s what you need to know about this thrilling addition to the game:\r\nTower Defense Mode\r\n\r\n![Stonez4](https://cdn.barnyak.com/auto/stonez4.png)\r\n\r\nIn Tower Defense Mode, you’ll face endless waves of enemies trying to breach your defenses. Strategically place turrets to stop them and protect your base. How long can you withstand the onslaught?\r\n\r\n### Endless Waves\r\n\r\n    Constant Challenge: Test your strategic skills against an unending horde of enemies.\r\n    Progressive Difficulty: As you advance, enemies become tougher and more numerous. Can you keep up?\r\n\r\n![Stonez3](https://cdn.barnyak.com/auto/stonez3.gif)\r\n\r\n### Turrets\r\n\r\nEquip your base with a variety of turrets, each with unique abilities:\r\n\r\n    Gattling Gun: Rapid-fire bullets to mow down enemies quickly.\r\n    Ballista Turret: Launches powerful bolts that pierce through multiple foes.\r\n    Magic Turret: Casts mystical spells to damage and slow down enemies.\r\n    Electric Turret: Emits electric shocks, stunning and damaging groups of enemies.\r\n\r\n### Upgrades from Main Game\r\n\r\nCarry over your upgrades from the main game into Tower Defense Mode:\r\n\r\n    Strength: Enhances turret damage.\r\n    Attack: Boosts firing rate and effectiveness.\r\n    Defense: Increases the durability and resilience of your turrets.\r\n\r\n### Strategy and Survival\r\n\r\n    Resource Management: Use resources gathered in the main game to build and upgrade your turrets.\r\n    Strategic Placement: Position your turrets wisely to maximize their effectiveness against different types of enemies.\r\n    Endless Fun: See how long you can survive and aim for the highest score on the leaderboards.\r\n\r\n### What's Next?\r\n\r\nAs we finalize this exciting feature, we’re looking forward to your feedback to make it even better. Stay tuned for more details on the release date and special events tied to the Tower Defense Mode.\r\n\r\nThank you for being part of the Stonez community! Your support and feedback are crucial as we continue to expand and improve the game. Get ready to defend your base and show your strategic prowess in the new Tower Defense Mode!\r\n\r\nUntil next time, happy adventuring!\r\nThe Stonez Development Team\r\n"
  },
  {
    "title": "Manor Lords",
    "thumbnail": "https://cdn.barnyak.com/auto/ManorLords-WinGDK-Shipping_B8bD6rVsfj.jpg",
    "date": "2024-06-28T04:00:00.000Z",
    "slug": "6_28_24_manorlords",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Game: [Manor Lords](https://www.xbox.com/en-US/games/store/manor-lords-game-preview/9p5f966564fs)\r",
    "content": "## Game: [Manor Lords](https://www.xbox.com/en-US/games/store/manor-lords-game-preview/9p5f966564fs)\r\n\r\n![ManorLords1](https://cdn.barnyak.com/auto/ManorLords-WinGDK-Shipping_B8bD6rVsfj.jpg)\r\n\r\n### Gameplay and Mechanics:\r\nManor Lords offers an intriguing blend of city-building and strategy that immediately draws you in with its immersive mechanics and stunning aesthetics. The gameplay revolves around managing your settlement, optimizing resources, and expanding your territory. The most challenging aspect is optimizing your food setup to ensure you have enough influence to secure additional plots of land before the AI outpaces you. This creates a strategic layer that is both engaging and rewarding.\r\n\r\n### Content Depth:\r\nWhile the initial pass of the game is enjoyable, it becomes apparent that the content lacks depth. The game introduces solid foundational mechanics, but they don't always translate into more complex downstream systems. For instance, while building up your village and gaining villagers is satisfying, it doesn't lead to more intricate or varied gameplay options as much as one might hope.\r\n\r\n![ManorLords2](https://cdn.barnyak.com/auto/ManorLords-WinGDK-Shipping_C70zVAY3Se.jpg)\r\n\r\n### Aesthetics and Immersion:\r\nOne of the standout features of Manor Lords is its aesthetics. The game is visually stunning, with a detailed and beautifully rendered environment that adds a lot to the immersive experience. The sound design and atmospheric elements further enhance this immersion, making you feel genuinely connected to your growing settlement.\r\n\r\n### Early Release Content:\r\nThe game does come with some limitations, primarily due to its early release status. Some content is still locked behind early release flags, which can be a bit frustrating for players eager to explore all the game's potential. The anticipation of future updates does add a sense of excitement, though.\r\n\r\n![ManorLords3](https://cdn.barnyak.com/auto/ManorLords-WinGDK-Shipping_k4Ie264yJs.jpg)\r\n\r\n### Suggestions for Improvement:\r\nTo deepen the gameplay experience, it would be beneficial to have more food options, such as fishing, to diversify strategies and enhance the resource management aspect. Additionally, expanding the downstream mechanics that result from increasing your population would add much-needed depth and complexity to the gameplay.\r\n\r\n### Final Thoughts:\r\nManor Lords is a promising title with excellent aesthetics and immersive gameplay. Despite its current content limitations, it offers a solid and enjoyable experience that can only improve with future updates and added depth. If you enjoy strategic city-building games, Manor Lords is definitely worth a try, especially if you appreciate beautiful visuals and a well-crafted atmosphere.\r\n"
  },
  {
    "title": "World of Warcraft Shadowlands Release Date Announced",
    "thumbnail": "https://andromeda-code-blog-cdn.s3.us-east-2.amazonaws.com/shadowlands/WoW_Summit_PressKit_NightFaeCovenantHall_3840x2160.jpg",
    "date": "2020-08-29T04:00:00.000Z",
    "slug": "8_29_2020_shadowlands",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Game: [World of Warcraft](https://worldofwarcraft.com/en-us/)\r",
    "content": "## Game: [World of Warcraft](https://worldofwarcraft.com/en-us/)\r\n\r\n![Night Fae Covenant Hall](https://andromeda-code-blog-cdn.s3.us-east-2.amazonaws.com/shadowlands/WoW_Summit_PressKit_NightFaeCovenantHall_3840x2160.jpg)\r\n\r\nThe World of Warcraft Shadowlands Release Date has been announced!\r\n\r\n### Official Release Date: October 27th\r\n\r\nHere's the standout features of this expansion:\r\n\r\n- Explore Warcraft’s Afterlife—Discover the wonders and horrors that await in the world beyond the veil. Ride across the gleaming fields of Bastion, lose yourself among the gothic spires of Revendreth, find yourself at the crossroads of fate in the eternal city of Oribos, and much more.\r\n\r\n- Pledge Yourself to a Covenant—Align with one of the Shadowlands’ four Covenants, each with unique story campaigns, gameplay features, and powers that they bestow upon those who pledge themselves to their cause. Choose between Bastion’s valiant Kyrian or Revendreth’s prideful Venthyr, fight for the mighty Necrolords of Maldraxxus, or seek renewal with the wild Night Fae of Ardenweald.\r\n\r\n- Ascend the Tower of the Damned—The vilest souls in existence are locked away in Torghast, an otherworldly prison ruled by the terrifying entity known as the Jailer. This ever-changing, roguelike challenge is open to solo players and groups of up to five, and those who brave its trials will earn materials to commission rune-carved legendary equipment of their choosing.\r\n\r\n- Rise as a Death Knight—Bolvar Fordragon, the former paladin who once wore the helm of the Lich King to keep the Scourge at bay, seeks to bolster the Death Knights’ numbers—now, all Allied Races as well as pandaren can join their unholy ranks. (Available with pre-purchase.)\r\n\r\n- And More. . .—Endure the Jailer’s watchful eye in the Maw, where the challenge mounts the longer you linger; Soulbind with key characters of your chosen Covenant to share their distinct powers; choose how to restore your Covenant’s Sanctum to glory . . . Shadowlands is unlike anything ever before experienced in World of Warcraft.\r\n\r\nSounds like it's about time to get back to Azeroth!!\r\n\r\n![Kyrian Sanctum](https://andromeda-code-blog-cdn.s3.us-east-2.amazonaws.com/shadowlands/WoW_Summit_PressKit_KyrianSanctum_3840x2160.jpg)\r\n"
  },
  {
    "title": "Transient (updates from gamescom 2020)",
    "thumbnail": "https://www.iceberg-games.com/wp-content/uploads/2019/06/highresscreenshot00021.jpg",
    "date": "2020-08-30T04:00:00.000Z",
    "slug": "8_30_2020_transient",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Game: [Transient](https://www.iceberg-games.com/transient/)\r",
    "content": "## Game: [Transient](https://www.iceberg-games.com/transient/)\r\n\r\n![SS1](https://www.iceberg-games.com/wp-content/uploads/2019/06/highresscreenshot00021.jpg)\r\n\r\nTransient (Iceberg Games) constantly refers to itself as cyberpunk meets H.P. Lovecraft.  And that does seem to fit the bill with the demo, screenshots and trailers they've released so far.\r\n\r\nIt's using Unreal Engine 4 so you can safely assume the camera control polish and soft vibrant post processing that usually comes with that.  But beyond that I haven't play'd the demo yet myself.\r\n\r\nTo know why i'm posting it though, just check out the trailer:\r\n\r\n{% youtube TpPV6h-yY0s %}\r\n\r\nThe music seems solid.  Aesthetic is a double-whammy and as long as the combat is solid and there's an interesting story this seems like an obvious pick.\r\n\r\n![SS2](https://www.iceberg-games.com/wp-content/uploads/2019/06/highresscreenshot00013.jpg)\r\n\r\nThe cyber-punk rally from cyberpunk 2077 may finally be starting to pay off!\r\n"
  },
  {
    "title": "NASA Selects Robyn Gatens as Acting Director of ISS",
    "thumbnail": "https://blogs.nasa.gov/spacestation/wp-content/uploads/sites/240/2020/08/blog_iss063e076166.jpg",
    "date": "2020-08-31T04:00:00.000Z",
    "slug": "8_31_2020_robyngatens",
    "categories": [
      "space"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [International Space Station](https://www.nasa.gov/mission_pages/station/main/index.html)\r",
    "content": "## Topic: [International Space Station](https://www.nasa.gov/mission_pages/station/main/index.html)\r\n\r\nThe International Space Station at NASA Headquarters has a new director! **Robyn Gatens**.  She first started working for NASA in 1985 at the Marshall Space Flight Center and has since managed primarily environmental control and life support systems for human spaceflight missions.\r\n\r\n![Robyn Gatens](https://www.nasa.gov/sites/default/files/thumbnails/image/robyn-gatens-head-shot-new.jpg)\r\n*Robyn Gatens -- Credit: NASA*\r\n\r\nAlso the recipient of NASA’s Outstanding Leadership and Exceptional Achievement Medals her resume is a perfect fit for the role and I'm very excited to see where she takes the ISS in the coming years.\r\n\r\nWe're only 62 days out from the 20th anniversary of manned operation at the International Space Station.  So this is a perfect time to pass the mantle on to a champion of manned space flight and propel the ISS into another era.\r\n"
  },
  {
    "title": "Planet 9 May be Smoking Gun For 2 Stars in Our Solary System",
    "thumbnail": "https://exoplanets.nasa.gov/system/internal_resources/details/original/701_Planet_nine_orbits.png",
    "date": "2020-09-02T04:00:00.000Z",
    "slug": "9_2_2020_planet92stars",
    "categories": [
      "space"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [Planet Nine](https://en.wikipedia.org/wiki/Planet_Nine)\r",
    "content": "## Topic: [Planet Nine](https://en.wikipedia.org/wiki/Planet_Nine)\r\n\r\n![Planet Nine JPL](https://exoplanets.nasa.gov/system/internal_resources/details/original/701_Planet_nine_orbits.png)\r\n\r\nInteresting [work](https://iopscience.iop.org/article/10.3847/2041-8213/abac66) done by Amir Siraj and Abraham Loeb is showing that the existence of [Planet 9](https://www.jpl.nasa.gov/blog/2017/10/planet-nine) is some of our strongest physical evidence for our solar system having 2 stars early in it's development.\r\n\r\nWe have not actually seen Planet 9 yet.  But some gravitational feature's of our solar system seem to imply it's existence.\r\n\r\nIn a fun twist more evidence of Planet 9 could be the smoking gun we need for a duo star development history for our own solar system.\r\n\r\n![NASA JPL Orbit Reference Image](https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA05569_hires.jpg)\r\n\r\nFor reference here's the orbit of [\"Sedna\"](https://www.jpl.nasa.gov/spaceimages/details.php?id=PIA05569) which is a crazy cold, very far out, elongated orbiting object.  Sedna's strange orbit is one of the primary pieces of evidence that a large ninth planet must exist to have put it in such an orbit.\r\n"
  },
  {
    "title": "Dragon Age 4 Teaser Trailer",
    "thumbnail": "https://images.igdb.com/igdb/image/upload/t_original/sc8g0z.png",
    "date": "2020-09-04T04:00:00.000Z",
    "slug": "9_4_2020_dragonage4teaser",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Game: [Dragon Age 4](https://www.ea.com/games/dragon-age)\r",
    "content": "## Game: [Dragon Age 4](https://www.ea.com/games/dragon-age)\r\n\r\n{% youtube acSr9Ki7P_w %}\r\n"
  },
  {
    "title": "Next Generation Console Guide (Updated)",
    "thumbnail": "https://compass-ssl.xbox.com/assets/17/f7/17f75c82-c959-4da6-a3ae-0fcedc8d751a.jpg?n=Xbox-Series-X_Image-1084_1920x1080_02.jpg",
    "date": "2020-09-08T04:00:00.000Z",
    "slug": "9_5_2020_nextgen",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "![Xbox Series X](https://compass-ssl.xbox.com/assets/17/f7/17f75c82-c959-4da6-a3ae-0fcedc8d751a.jpg?n=Xbox-Series-X_Image-1084_1920x1080_02.jpg)\r",
    "content": "![Xbox Series X](https://compass-ssl.xbox.com/assets/17/f7/17f75c82-c959-4da6-a3ae-0fcedc8d751a.jpg?n=Xbox-Series-X_Image-1084_1920x1080_02.jpg)\r\n\r\nHere’s the short version of everything you need to know about “The Next Generation” of gaming consoles.  Both sport fairly decent hardware improvements, ssd's and 8k support.  Plus backwards compatibility!  Which is a huge win.\r\n\r\n## Release Date(both): Holiday 2020\r\n\r\n### Sony PlayStation 5\r\n* 3D sound\r\n* Dynamic Resistance Trigger (Haptic Feedback on the Triggers)\r\n\r\n### Xbox Series X\r\n* Quick Resume\r\n* Split Motherboard for Cooling\r\n* SSD Storage Expansion Port\r\n\r\n### Shared New Features\r\n* SSD\r\n* 8k and 120hz 4K\r\n* Backwards Compatible with Older Games\r\n* Huge leaps in Hardware Performance\r\n* 4K BluRay\r\n* Smaller and cheaper digital versions.  Both still flaunting 4K at 120FPS.\r\n\r\n![Play Station 5](https://asia.playstation.com/content/dam/pscom/hk/latest-news/2020/20200612-ps5/ps5.jpg)\r\n\r\n### PlayStation 5 Launch Titles\r\n![Destruction AllStars](https://gmedia.playstation.com/is/image/SIEPDC/ps5-destructionallstars-video-thumb-block-8-en-110620?$1600px$)\r\n* Returnal\r\n* Sackboy A Big Adventure\r\n* Demon's Souls\r\n* Destruction AllStars\r\n\r\n### Xbox Series X Launch Titles\r\n![Scarlet Nexus](https://compass-ssl.xbox.com/assets/20/f8/20f86515-0a1c-4705-b65d-3b6cc5c1223d.jpg?n=9081099_Content-Placement-0_9_788x444.jpg)\r\n* Halo\r\n* Avowed\r\n* Ever Wild\r\n* Dark Tide\r\n* Scarlet Nexus\r\n\r\n#### Update: 9/8/2020 an Xbox digital version has now been announced.  It's priced very well at $300 USD.\r\n\r\n![Xbox Digital](https://andromeda-code-blog-cdn.s3.us-east-2.amazonaws.com/EhX82n1UYAATqsI.jpeg)\r\n"
  },
  {
    "title": "Raft Review",
    "thumbnail": "https://cdn.barnyak.com/auto/13.png",
    "date": "2020-09-07T04:00:00.000Z",
    "slug": "9_7_2020_raft",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Game: [Raft](https://raft-game.com/)\r",
    "content": "## Game: [Raft](https://raft-game.com/)\r\n\r\nRaft is an early access game that was released on May 23, 2018. Developed as a student project at Uppsala University you can find the original student work [on ItchIO](https://raft.itch.io/raft)\r\n\r\nPrimarily it's a sandbox exploration game where the principle mechanic is that you're stuck on a raft.  In an assumedly landless world.\r\n\r\n![Exploring an Island](https://cdn.barnyak.com/auto/Raft_hhwAkk4AmW.jpg)\r\n\r\nYou then throw a hook out into the sea and snag some trash. Which you slowly use to work through the crafting tiers that you’d expect in a classic survival/exploration title.   Sprinkled with some interesting island exploration early on.\r\n\r\nAll in all I’m sure raft was a perfectly good title a couple months after launch, but 2 years later $40 for 10 hours of content is a tough sell. We worked through the campaign fairly quickly once it was the focus. And the upgrade tiers where practically non existent for some items. \r\n\r\n![Night at sea](https://cdn.barnyak.com/auto/Raft_J1hUlkD7qx.jpg)\r\n\r\nBut it’s not all bad. The decorative recipes you did have access to where themed fairly well, allowing you to make very on-style ships for the game's aesthetic.  Eventually introducing the campaign in an explorative way was a good touch as well.  And there was some early tech climbing excitement that I’m always on the lookout for. \r\n\r\n![Hanging Out](https://cdn.barnyak.com/auto/Raft_7ditEppEWb.jpg)\r\n\r\nI'm conflicted in my recommendation of this game because the content that was there was actually pretty good.  It just ran out in an unreasonably short amount of time.\r\n\r\nBut either way check out our cool ship!\r\n\r\n![Our Cool Ship](https://cdn.barnyak.com/auto/Raft_1HKNb9hBQ1.jpg)\r\n\r\n### What You'll Like\r\n* Build your own functional ship\r\n* Gather mats and slowly discover new recipes\r\n* It's quite pretty.\r\n* There's a lack of good pirate and sea based titles right now.\r\n* Cosmetics are pretty good, on theme, and reasonable to get (Talking about themed boat tiles here)\r\n\r\n### What You Won't Like\r\n* Very limited story content\r\n* Seems like you immediately hit the final tier\r\n* Not much drive to keep playing the game after only 2 or 3 sessions.\r\n* This all really comes down to the fact that it's a 2018 title with Early Release Launch-esque content.\r\n\r\n### Publisher Listed Features\r\n* Multiplayer! Survive by yourself or with friends in online co-op!\r\n* Hook! Use your hook to catch debris floating by.\r\n* Craft! Build survival equipment, weapons, crop plots and more to help you stay alive!\r\n* Build! Expand your raft from a simple wreckage to a buoyant mansion.\r\n* Dive! Drop anchor and explore the depths for more resources.\r\n* Fight! Defend your raft from the dangers of the ocean.\r\n\r\n# In Summary\r\nRaft is a solid 2-3 night experience with your friends.  It lacks depth, but what's there is pretty fun.  I would buy it if it's on sale.\r\n"
  },
  {
    "title": "Always Home Cam is the Future of Home Automation",
    "thumbnail": "https://cdn.barnyak.com/auto/20200921_image_blog_flyingcamera_sidebyside_2910x1637_fcc_rgb.jpg",
    "date": "2020-09-28T04:00:00.000Z",
    "slug": "alwayshomecam",
    "categories": [
      "tech"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [Always Home Cam](https://blog.ring.com/2020/09/24/introducing-ring-always-home-cam-an-innovative-new-approach-to-always-being-home/)\r",
    "content": "## Topic: [Always Home Cam](https://blog.ring.com/2020/09/24/introducing-ring-always-home-cam-an-innovative-new-approach-to-always-being-home/)\r\n\r\n![Always Home Cam](https://cdn.barnyak.com/auto/20200921_image_blog_flyingcamera_sidebyside_2910x1637_fcc_rgb.jpg)\r\n\r\nThe recently announced Always Home Cam is a giant leap in technical achievement and cultural paradigm surrounding home automation.  \r\n\r\nUntil recently, the home automation market has focused on extending your phone's utility to dedicated spaces in your home. Home automation products integrate seamlessly with your phone and other devices to attempt a digital immersion of your home. The new Always Home Cam is the next generation of true home automation.\r\n\r\nThe Always Home Cam is essentially a small, blade protected, compact drone with a camera, speaker, and microphone attached.  It can automatically find it's dock when battery levels get low, with no other important limitation on how far it can travel.  The ability to move from room to room fundamentally extends every single other home automation feature into a real \"digital butler\" experience.\r\n\r\nThe platforms we could create with drones like this opens the door for infinite activities. You could have it do anything from playing music for you as you clean your house or monitoring the perimeter while you're gone on vacation.\r\n\r\nOnce the proverbial cat is out of the bag regarding interior robotics (while floor and wall cleaning robots exist, they lack the total freedom and camera/mic input combination), the market is going to go crazy. With this fundamental platform the possibilities of add-on products are endless.\r\n\r\nThe idea of a realized robotic butler is no longer science fiction.  This statement alone should send your heart racing.\r\n\r\n"
  },
  {
    "title": "Baldurs Gate 3 Evolving Review",
    "thumbnail": "https://cdn.barnyak.com/auto/Keyart_Horizontal_Final.jpg",
    "date": "2020-10-06T04:00:00.000Z",
    "slug": "baldursgate3",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [Baldurs Gate 3](https://baldursgate3.game)\r",
    "content": "## Topic: [Baldurs Gate 3](https://baldursgate3.game)\r\n\r\n![Baldurs Gate 3 Key Art](https://cdn.barnyak.com/auto/Keyart_Horizontal_Final.jpg)\r\n\r\nBaldurs Gate 3 is finally upon us!  Grab your sword, axe, staff, or bow and get ready to dive into another thousand-hour adventure!  Let's start by setting some expectations; it is in early-access.  So expect a few hiccups, strange occurrences, and straight-up bugs around the way.\r\n\r\nFor those of you not in the know, Baldurs Gate 3 is the spiritual successor to Divinity Original Sin 2.  A turn-based (but only when you're in combat or sneaking around) RPG that prides itself on immersive characters and deep story.  I consider it the gold standard for co-op RPG games.  The classes are diverse and well thought out but are all immediately recognizable.  Exploring is exciting and full of unexpected twists and turns.  Combat is challenging and very satisfying when you finally clean the house.\r\n\r\nI'm going to do something new for this title.  Instead of playing through it and writing a formal review, I'm just going to update this every couple of sessions, as evolving feedback of my thoughts and feelings.  \r\n\r\n### Sessions\r\n\r\n##### 10/7/2020 - Getting Started\r\n\r\n![Baldurs Gate 3 First Session](https://cdn.barnyak.com/auto/bg3_w6uu2Lu4vB.jpg)\r\n\r\nLast night was my first session with the title since it went into early access.  I have a warrior drow (but dexterity and bow focused), and we're planning on doing an \"evil\" campaign.  It's been a blast.  Sure there's been some superficial bugs I'm sure you've already heard about elsewhere.  But nothing beyond minor annoyances and things being a bit odd.  The face-scans make all the characters look crazy good.  But they do seem a bit repetitive. \r\n\r\n![Baldurs Gate 3 First Session Town](https://cdn.barnyak.com/auto/bg3_5fs83QB7FG.jpg)\r\n\r\nCombat is fantastic, as expected.  The Divinity 4 engine is gorgeous.  The increased camera controls and freedom allow you to sit there and appreciate the scenes to a higher degree.  The UI is more polished and frankly looks nicer.  It's a good, fun, classic RPG excitement.  The next session can't come sooner!!\r\n"
  },
  {
    "title": "Overwatch Elevator Update",
    "thumbnail": "https://cdn.barnyak.com/auto/OVR_Presskit_TracerComicChallenge_001.png",
    "date": "2020-09-25T04:00:00.000Z",
    "slug": "elevators",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [Overwatch](https://playoverwatch.com/en-us/)\r",
    "content": "## Topic: [Overwatch](https://playoverwatch.com/en-us/)\r\n\r\n![Overwatch Tracer Comic Book](https://cdn.barnyak.com/auto/OVR_Presskit_TracerComicChallenge_001.png)\r\n\r\nOverwatch elevators got a much-needed rework on the PTR! Instead of being on a constant loop, the various moving platforms have a new behavior:\r\n* Wait at the bottom of their loop for a player to get on\r\n* After a short delay, it rapidly moves up to the top\r\n* After a brief pause, it then goes back down\r\n* This movement now makes a noticeable sound effect, effectively giving away your position.\r\n"
  },
  {
    "title": "EVE Online Project Discovery",
    "thumbnail": "https://cdn.barnyak.com/auto/GcxcdKyA.jpeg",
    "date": "2020-09-22T04:00:00.000Z",
    "slug": "esocovid",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [EVE Online](https://www.eveonline.com/)\r",
    "content": "## Topic: [EVE Online](https://www.eveonline.com/)\r\n\r\n![EVE Online](https://cdn.barnyak.com/auto/GcxcdKyA.jpeg)\r\n\r\nPhase 3 of the EVE online Project Discovery event was announced today. \r\n\r\nProject Discovery is an in-game mini-game that collects real scientific data on flow cytometry and cell populations. Most notably, it's been helping understand COVID-19 more.  Since it's launch, the project has contributed.  Of those, 466,000 \"verified and now able to be used in scientific research.\"\r\n\r\nMore MMO's should be implementing these platforms tying in what is often just filler or meaningless breaks in the core mechanics you could be contributing invaluable data, especially in our current pandemic.\r\n\r\nIt's contributing real, valuable information for us as a species.  It's fantastic on so many levels.\r\n"
  },
  {
    "title": "Ghostrunner",
    "thumbnail": "https://cdn.barnyak.com/auto/FINAL_key_art_horizontal_4k.png",
    "date": "2020-09-15T04:00:00.000Z",
    "slug": "ghostrunner",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [Ghostrunner](https://store.steampowered.com/agecheck/app/1139900/)\r",
    "content": "## Topic: [Ghostrunner](https://store.steampowered.com/agecheck/app/1139900/)\r\n![Ghostrunner](https://cdn.barnyak.com/auto/FINAL_key_art_horizontal_4k.png)\r\n\r\nHoly shit Ghostrunner looks really *damn* good.  Cyberpunk parkour says everything it needs to.  It's got it all: Cyberpunk textures, cyberpunk animations, cyberpunk music.  If you want anything more, frankly, you're just greedy.\r\n\r\n#### Releasing October 27th (But a demo going live on Sep 29th on steam). \r\n\r\n{% youtube doLsPVXuESQ %}\r\n\r\nDid I mention RTX Ray Tracing?  I feel like I get another jolt of excitement every time I hear a new aspect of Ghostrunner.  The immersion of those cyber punk beats as this bad ass cyber samurai slashes from enemy to enemy puts me over the top.\r\n\r\nIf One More Level knocks this out of the park i'll probably try out God's Trigger as well.\r\n\r\n![Ghostrunner](https://cdn.barnyak.com/auto/14.jpg)\r\n![Ghostrunner](https://cdn.barnyak.com/auto/%5BGR%5D_hr_screenshot_03_1920x1080px.png)\r\n\r\nEnough with my ramblings, here's what the publisher actually has to say.\r\n\r\n### Description From the publisher\r\nA cataclysm has wiped out most of humanity and destroyed the environment. Now, when resources are scarce, the survivors live in a tower built by long-forgotten hands. But the structure is torn by violence, poverty, and chaos. A person’s worth depends on the category of implants they have, defining their whole lives. It's no surprise that a rebellion starts.\r\n\r\nYou are a cyber-warrior, a living weapon, the only one capable of fighting both in the physical world and in cyberspace. Lost and hunted, thrown into the middle of the conflict, you must use this bond with technology to ascend the tower.\r\n\r\n![Ghostrunner](https://cdn.barnyak.com/auto/6.jpg)\r\n\r\n### Features From the publisher\r\n* Ascend the tower – use the environment to your advantage and face fast and determined enemies.\r\n* Act fast - armed with a melee weapon, get to the enemies before they have a chance to shoot.\r\n* You are a cyber-warrior – fight both in the physical world and in cyberspace.\r\n* Choose your own strategy – use your special abilities to avoid bullets and eliminate enemies: the dynamic movement system turns combat into a true dance of death. \r\n* Trial and error – you die from one hit, so learn the levels by heart and adapt.\r\n* Next-gen visuals – Ghostrunner aims to bring the visuals of a blockbuster title to a more condensed indie action experience.\r\n"
  },
  {
    "title": "Ghostrunner Demo Announced",
    "thumbnail": "https://cdn.barnyak.com/auto/%5BGR%5D_hr_screenshot_08_1920x1080px.png",
    "date": "2020-09-23T04:00:00.000Z",
    "slug": "ghostrunnerdemo",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [Ghostrunner](https://ghostrunnergame.com/)\r",
    "content": "## Topic: [Ghostrunner](https://ghostrunnergame.com/)\r\n![Ghostrunner](https://cdn.barnyak.com/auto/%5BGR%5D_hr_screenshot_08_1920x1080px.png)\r\n\r\nI've talked about [Ghostrunner before](https://barnyak.com/2020/ghostrunner/). Please go check it out for more info.\r\n\r\nToday I bring you news about an upcoming Demo for Ghostrunner, however.  \r\n\r\n\r\n#### Releasing October 27th (But a demo going live on September 29th on steam). \r\n\r\nThere's also a new trailer and some pre-order info.  The most massive pre-order discounts are landing over at steam with 20% and Xbox one trailing at 10%.  \r\n\r\nWe've only got about a month to wait at this point!  Hopefully, the demo will help scratch the cyberpunk itch to get over that last hump.  It's finally happening, people!\r\n\r\n{% youtube -nzPyBMoJUI %}\r\n"
  },
  {
    "title": "The Future of Wireless Power",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Nikola_Tesla%2C_with_his_equipment_EDIT.jpg",
    "date": "2020-09-09T04:00:00.000Z",
    "slug": "teslapower",
    "categories": [
      "tech"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [Nikola Tesla](https://en.wikipedia.org/wiki/Nikola_Tesla)\r",
    "content": "## Topic: [Nikola Tesla](https://en.wikipedia.org/wiki/Nikola_Tesla)\r\n![Tesla Himself](https://upload.wikimedia.org/wikipedia/commons/e/e9/Nikola_Tesla%2C_with_his_equipment_EDIT.jpg)\r\n\r\nRiding on the back of Nikola Tesla through our modern history [Emrod](https://emrod.energy/) is going to [move forward](https://emrod.energy/press-release-nz-start-up-launches-world-first-long-range-wireless-power-transmission/#:~:text=The%20Emrod%20technology%20works%20by,in%20cooperation%20with%20Callaghan%20Innovation.) with a plan to test out \"Wireless\" power distribution in a commercial setting.\r\n\r\n120 years later Tesla is finally getting his dream.  Emrod, founded by Greg Kushnir, can move power between 2 static, predefined locations.  While claiming that:\r\n* There's no radiation around the beam\r\n* Atmospheric conditions should pose no interference (Atleast that would effect power distribution)\r\n* A \"low power laser safety curtain\" that cuts power when a drone, bird or other object is about to cross into the power beam\r\n\r\nThey purpose a really cool use-case for this power, which is distributing trucks to locations where portable power will be necessary.  They call it \"MOR\" or Mobile Outage Response.  The thought of power going down and your local power company simply driving a truck past the disruption to then tether into the grid is certainly Sci-Fi.\r\n\r\nYou can checkout there other purposed services for wireless power [Here](https://emrod.energy/products-services/)\r\n\r\n![EMROD Team](https://secureservercdn.net/166.62.108.196/u1v.9ad.myftpupload.com/wp-content/uploads/2020/06/team-photo-1-930x620.jpg)\r\n\r\n`“We have an abundance of clean hydro, solar, and wind energy available around the world but there are costly challenges that come with delivering that energy using traditional methods, for example, offshore wind farms or the Cook Strait here in New Zealand requiring underwater cables which are expensive to install and maintain\"`\r\n\r\n_Greg Kushnir_\r\n"
  },
  {
    "title": "Tony Hawk Nostalgia Skater 1+2",
    "thumbnail": "https://cdn.barnyak.com/auto/THPS12_jIEFkwY6ih.jpg",
    "date": "2020-09-11T04:00:00.000Z",
    "slug": "tonyhawkproskater12",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Game: [Tony Hawk Pro Skater 1+2](https://www.tonyhawkthegame.com/)\r",
    "content": "## Game: [Tony Hawk Pro Skater 1+2](https://www.tonyhawkthegame.com/)\r\n![Cool Splash Screen](https://cdn.barnyak.com/auto/THPS12_jIEFkwY6ih.jpg)\r\n\r\nLet me start by stating what I’m sure you’ve already heard. If you liked the originals then you’re in for a treat. This is a really solid remake. It hit every beat I wanted it to. \r\n\r\nI cherished the originals like I’m sure some of you did. They really nailed the feeling of scraping together these crazy combos that spawn the map clearing cartoonish obstacles and hunting down that last bell that seems to escape you right at the last second. \r\n\r\nAll with the punk music you’d expect perfectly merged with the crisp atmospheric sounds of a skateboard wheel carving through pavement and slapping down on a rail after hitting some random flip trick. \r\n\r\nThere’s a nice skate shop, with not as much customization as I was hoping for, but just enough to get by. \r\n\r\nThe stat system was a fun progression. But similar to the originals once you’ve maxed out the 4 primary stats you use it’s all set. I’m sure there’s some interesting setups revolving around the 700 some pro skater specific challenges. But by and large if you stick to a custom character you won’t be shocked by anything you find in that department. \r\n\r\n![](https://cdn.barnyak.com/auto/THPS12_bj1XgP2RBu.jpg)\r\n\r\nIt really feels like a fresh render, new shaders and the necessary modern QOL changes you’d expect. All slapped on a truly fantastic base game. \r\n\r\nFor those of you who won’t be just riding a nostalgia high it’s still a purchase recommendation from me. But here’s the short of it. \r\n\r\n### What You'll Like\r\n* $40 AA price point\r\n* Tricky but rewarding combo-based game play\r\n* A healthy mix of hidden content the game pushes you towards finding\r\n* Very fun well crafted tunes\r\n* User made custom maps\r\n* A mix of modern skate brands and classics (I’m looking at you [Element](https://www.elementbrand.com/)) you’ll appreciate. \r\n\r\n### What You Won't Like\r\n* If you’re not interested in the extra challenges you can blow through most of the maps\r\n* Can get repetitive \r\n* It doesn’t really get that much more difficult\r\n\r\n![Skating in that hangar](https://cdn.barnyak.com/auto/sc8aj0.jpg)\r\n\r\n# In Summary\r\nIf you have any shred of a desire to play a skateboarding game. This one is worth it. Even at full price. \r\n"
  },
  {
    "title": "Venus Atmosphere Findings",
    "thumbnail": "https://cdn.barnyak.com/auto/PIA00271.jpg",
    "date": "2020-09-14T04:00:00.000Z",
    "slug": "venusphosphine",
    "categories": [
      "space"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [Astrobiology](https://astrobiology.nasa.gov/)\r",
    "content": "## Topic: [Astrobiology](https://astrobiology.nasa.gov/)\r\n### Sub-Topic: [Venus](https://en.wikipedia.org/wiki/Venus)\r\n\r\n![Venus](https://cdn.barnyak.com/auto/PIA00271.jpg)\r\n*Credit: NASA*\r\n\r\nRecently some analysis was done on the findings of the JCMT and ALMA telescopes that provides evidence with \"no other plausible identification\" that phosphine gas is present in Venus's Atmosphere.  With the current understanding of Venus it would be expected that phosphine would be in an oxidized form but apparently this isn't the case.  This leaves us with a heart-pounding conclusion to draw, live might be or have been on Venus.  And if it can survive there... then so can we.\r\n\r\nThis is a big deal in the realm of Astrobiology.  The main-stream best contender for life up till now was Mars.  And the academic backing behind that was primarily because of the methane gas in it's atmosphere.  However methane is more easily explainable away (Geological activity, which we now know was there int he past). It's important to not gloss over the fact that Mars having geological activity and methane *is* a big deal.  And could still serve as evidence of potential life.  But it's not as strong an indicator as phosphine gas.\r\n\r\n![Terra formed Venus](https://cdn.barnyak.com/auto/ancient-venus-new.jpg)\r\n*Credit: NASA*\r\n\r\nFor me this brings flash backs to the fantastical venus sky cities I read about in a BBC future article ([Found it](https://www.bbc.com/future/article/20161019-the-amazing-cloud-cities-we-could-build-on-venus)).\r\n\r\nNot that we've been in a lull of physics and astronomy news.  But this is just more fuel to the flame of colonization of our solar system.  I can only help it happens sooner rather then latter.\r\n\r\n[Related Journal - nature astronomy](https://www.nature.com/articles/s41550-020-1174-4)\r\n"
  },
  {
    "title": "We Were Here Together Review",
    "thumbnail": "https://cdn.barnyak.com/auto/We_Were_Here_Together_2nw4kJbCwK.jpg",
    "date": "2020-09-25T04:00:00.000Z",
    "slug": "wewereheretogether",
    "categories": [
      "games"
    ],
    "author": "Justin Barnyak",
    "summary": "## Topic: [We Were Here Together](https://store.steampowered.com/app/865360/We_Were_Here_Together/)\r",
    "content": "## Topic: [We Were Here Together](https://store.steampowered.com/app/865360/We_Were_Here_Together/)\r\n\r\n![We Were Here Together Promo Art](https://images.gamespress.com/Content/Artwork/TeeHee/Games%20Press/artwork/2018/09/na-1536671381-/screenshot1.png?lightbox=y&ex=2020-12-20+03%3A00%3A00&sky=106220dc28f5508d0662c36b740683be5f295ef94e7e4b89d738d4f445d36a96)\r\n\r\nI stumbled upon We Were Here Together on steam without having played any first-person puzzle games before.  The steam page portrays it as a two-person puzzle adventure game, where you roamed around a \"Castle Rock\" in first-person solving a myriad of challenges.  Aesthetically it was clean, polished, and felt timeless to a degree.  The cold, crisp blue snowing exterior initially left me curious about the tone of the game. Still, as I scroll, the warm orange interiors of what appeared to be a haunted mansion brought back a sense of adventure that immediately grabbed my attention.  At this point, it's fair to say I was put off by it being a dedicated puzzle game as this isn't my typical choice of degree.  But believe me, I'm delighted I did.\r\n\r\nYou open in an antarctic outpost where your fellow explorers appear to be missing.  Eerie music leaves you a bit on edge. The entire setting makes you unsure of what direction the game is going to take.  The story, pacing, and mechanics are all still a mystery.  A lone radio signal crackles, Someone is in distress.  Nothing but this peculiar cabin and surrounding frozen wasteland stand in the way of you responding to the foreboding call for help.  The controls feel good; I never thought it necessary to look up a particular mapping or was frustrated when interacting with something.   There is an inventory system, but it's light and straightforward, which perfectly fits the puzzle mechanics.\r\n\r\n![Map](https://cdn.barnyak.com/auto/We_Were_Here_Together_x7cBqBJOAE.jpg)\r\n\r\nA sense of community is the essence of taking even a fantastic experience and bringing it to this high immersion level that makes video games such a unique experience.  Developers have a history of knowing this and, in an attempt to capture it, often force a player to perform social interactions.  A crappy stand on two pressure plates to open the door puzzle in the middle of an otherwise excellent dungeon always leaves me with a sense of pandering. We Were Here Together is none of these.  It's fundamentally designed from the ground up not only to require you to work together, but to make you want to work together.  It's not that you couldn't play this on your own; it's captured better by recognizing the game is better with a good friend.\r\n\r\nAs you depart the Outpost and work your way towards the Keep We Were Here Together, nails every tone it sets out to capture.  \r\n\r\n![Study](https://cdn.barnyak.com/auto/We_Were_Here_Together_TBNNoegQRR.jpg)\r\n\r\nThe puzzles built on each other regarding the communication skills it was steering you towards, and it still had a perfect balance of diversity and curiosity for what challenges lay ahead.  There was a masterstroke in balancing when it came to how much you actively needed to work out yourself and what required you to communicate with your partner to solve—often allowing you to work out 90% of the puzzle but still requiring critical information from your partner.  While simultaneously having an alternative mirrored version of the same challenge for your partner solve.  This symmetry prevented one person from falling behind or getting ahead in their progression.\r\n\r\n![Greenroom](https://totalmayhemgames.com/wp-content/uploads/2020/05/2020_WWHTG_Image-006.png)\r\n\r\nI had a wholesome, almost emotional sense of accomplishment for most of the puzzles that I didn't expect.  Everything they managed to pack into a perfectly paced 5-hour session left me with no suggestions or wishful thinking in what the game could have been.\r\n\r\n# In Summary\r\nEven if you don't usually play puzzle games, I'd recommend this wholeheartedly.  Do yourself a favor and give it a play.\r\n"
  }
];

export default function ArticleList(props: Props) {
  const [page, setPage] = useState(1);
  const { scroll } = useLocomotiveScroll()
  const category = props.category;

  const renderArticle = (blob: any) => {
    const thumbnail = blob.thumbnail ? blob.thumbnail : "https://cdn.barnyak.com/auto/blog_set_1_1.jpg";

    return <div key={`article-${blob.title}`} className="article">
      <div onClick={() => {
        props.choseArticle(blob);
      }} className="articleTitle">{blob.title}</div>
      <ArticleMetadata article={blob} />
      <div className="articleSummary">
        <Stack direction="column">
          <Image onClick={() => {
            props.choseArticle(blob);
          }} className="articleThumbnail" alt="Article Thumbnail" src={thumbnail} />
        </Stack>
      </div>
    </div>
  }

  const articlesSorted = ARTICLE_DATA.sort((a, b) => {
    //@ts-ignore
    return new Date(b.date) - new Date(a.date)
  });

  let categoryArticles: any[] = [];

  for (let i = 0; i < articlesSorted.length; i++) {
    if (category.toLowerCase() === "home") {
      categoryArticles.push(renderArticle(articlesSorted[i]));
    }
    else {
      if (articlesSorted[i].categories.includes(category.toLowerCase())) {
        categoryArticles.push(renderArticle(articlesSorted[i]));
      }
    }
  }

  const renderArticles = (page: number) => {
    let articles = [];

    const min = 5 * page - 5;
    const max = min + 5;

    for (let i = 0; i < categoryArticles.length; i++) {
      if (i >= min && i < max) {
        articles.push(categoryArticles[i]);
      }
    }

    return articles;
  }

  return <div className="articleList paper">
    <div style={{position: 'relative'}} className="articleListInner paperInner">
      <div id="aritlceListY" style={{position: 'absolute', top: '0px', left: '0px'}} />
      <div id="aritlceListX" style={{position: 'absolute', top: '0px', right: '0px'}} />
      {renderArticles(page)}
      <Stack direction="row" sx={{marginBottom: '10px'}} justifyContent={"center"}>
        <Pagination
          page={page}
          onChange={(_, newPage) => {
            setPage(newPage);
            scrollToTop(scroll);
          }}
          count={Math.round(categoryArticles.length / 5)}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  </div>
}
