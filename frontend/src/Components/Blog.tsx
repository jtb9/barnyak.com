import { useState, useEffect } from "react";
import Article from "./Article";
import ArticleList, { ARTICLE_DATA } from "./ArticleList";
import Footer from "./Footer";
import Navbar from "./Navbar";

function getArticleBySlug(slug: string) {
    let match = {};

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
            setPath(urlSegments[1]);
        }
        if (urlSegments.length > 2) {
            setArticle(getArticleBySlug(urlSegments[2]));
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
        <div className="App">
            <Navbar onChange={(newPath: string) => {
                setPath(newPath);
                setArticle(undefined);
                onChange();
            }} />
            {article ? <Article onBack={() => {
                setArticle(undefined);
                onChange();
            }} article={article} /> : <ArticleList choseArticle={(newArticle: any) => {
                setArticle(newArticle);
                onChange();
            }} category={path} />}
            <Footer />
        </div>
    );
}
