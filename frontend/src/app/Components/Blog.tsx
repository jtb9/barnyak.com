"use client";

import { useState, useEffect, createContext, useRef } from "react";
import Article from "./Article";
import ArticleList, { ARTICLE_DATA } from "./ArticleList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { scrollToTop } from "Utils/Behavior";
import Stonez from "./Stonez";
import { useAsciiText, broadway } from 'react-ascii-text';
import { Stack } from "@mui/material";
import CircleBackdrop from "./CircleBackdrop";
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'
import CloudHeader from "./CloudHeader";
import { useAptabase } from "@aptabase/react";

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
    const { trackEvent } = useAptabase();
    const [path, setPath] = useState("home");
    const [loaded, setLoaded] = useState(false);
    const [article, setArticle] = useState<any>(undefined);
    const [hasChanged, setHasChanged] = useState(false);
    const [specialFeature, setSpecialFeature] = useState<any>(undefined);

    useEffect(() => {
        trackEvent("loadBlog");
    }, [])

    useEffect(() => {
        const currentUrl = window.location.pathname;
        const urlSegments = currentUrl.split('/');

        if (urlSegments.length > 1) {
            const path = urlSegments[1]

            if (path.length > 0) {
                if (path.includes("stonez")) {
                    setSpecialFeature(urlSegments);
                }
                else if (path.includes("privacy")) {
                    setSpecialFeature(["", "", "privacy"]);
                }
                else {
                    setPath(urlSegments[1]);
                }
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

        setLoaded(true);
    }, []); // Empty dependency array ensures this runs only once on mount

    useEffect(() => {
        if (hasChanged) {
            // Construct the new URL based on the state variables
            let newUrl = `/${path}`;
            if (article) {
                newUrl += `/${article.slug}`;
            }

            trackEvent("navigate", { path: newUrl })

            // Update the browser URL
            window.history.pushState(null, '', newUrl);
        }
    }, [path, article, hasChanged]); // Dependency array includes both path and article

    const onChange = () => {
        setHasChanged(true);

        scrollToTop();
    }

    const renderSpecialFeature = () => {
        return <Stonez feature={specialFeature[2]} />
    }

    if (specialFeature !== undefined) {
        return renderSpecialFeature();
    }

    if (loaded === false) {
        return <div className="App"></div>
    }

    return (
        <articleContext.Provider value={article}>
            {/* <ParticleContainer> */}
                <div className="App">
                    <CloudHeader />
                    <Navbar onChange={(newPath: string) => {
                        setPath(newPath);
                        setArticle(undefined);
                        onChange();
                    }} />
                    {article ? <Article onBack={() => {
                        setArticle(undefined);
                        onChange();
                    }} /> : <ArticleList key={path} choseArticle={(newArticle: any) => {
                        setArticle(newArticle);
                        onChange();
                    }} category={path} />}
                    <Footer />
                </div>
            {/* <CircleBackdrop /> */}
            {/* </ParticleContainer> */}
        </articleContext.Provider>
    );
}
