import { useState, useEffect, createContext } from "react";
import Article from "./Article";
import ArticleList, { ARTICLE_DATA } from "./ArticleList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ParticleContainer from "./ParticleContainer";

export const articleContext = createContext<any>(undefined);

function getArticleBySlug(slug: string) {
    let match = undefined;

    for (let i = 0; i < ARTICLE_DATA.length; i++) {
        if (ARTICLE_DATA[i].slug === slug) {
            match = ARTICLE_DATA[i];
        }
    }

    return match;
}

export default function Blog() {
    const [path, setPath] = useState("home");
    const [article, setArticle] = useState<any>(undefined);
    const [hasChanged, setHasChanged] = useState(false);

    useEffect(() => {
        const currentUrl = window.location.pathname;
        const urlSegments = currentUrl.split('/');

        if (urlSegments.length > 1) {
            const path = urlSegments[1]

            if (path.length > 0) {
                setPath(urlSegments[1]);
            }
            else {
                setPath("home");
            }
        }
        else {
            setPath("home");
        }

        if (urlSegments.length > 2) {
            const slug = urlSegments[2];

            if (slug.length > 0) {
                setArticle(getArticleBySlug(urlSegments[2]));
            }
        }
    }, []); // Empty dependency array ensures this runs only once on mount

    useEffect(() => {
        if (hasChanged) {
            // Construct the new URL based on the state variables
            let newUrl = `/${path}`;
            if (article) {
                newUrl += `/${article.slug}`;
            }

            // Update the browser URL
            window.history.pushState(null, '', newUrl);
        }
    }, [path, article, hasChanged]); // Dependency array includes both path and article

    const onChange = () => {
        setHasChanged(true);

        try {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Optional: This makes the scroll smooth
            });
        }
        catch (e) {

        }
    }

    return (
        <articleContext.Provider value={article}>
            <div style={{zIndex: '10'}} className="App">
                <Navbar onChange={(newPath: string) => {
                    setPath(newPath);
                    setArticle(undefined);
                    onChange();
                }} />
                {article ? <Article onBack={() => {
                    setArticle(undefined);
                    onChange();
                }} /> : <ArticleList choseArticle={(newArticle: any) => {
                    setArticle(newArticle);
                    onChange();
                }} category={path} />}
                <Footer />
                
            </div>
            {/* <ParticleContainer /> */}
        </articleContext.Provider>
    );
}
