import { Button, Stack } from "@mui/material";
import Markdown from "react-markdown";
import ArticleMetadata from "./ArticleMetadata";
import { articleContext } from "./Blog";
import { useContext } from "react";

interface Props {
    onBack: () => void;
}

export default function Article(props: Props) {
    const article = useContext(articleContext);

    return <div className="singleArticle paper">
        <Stack className="paperInner" sx={{padding: '15px'}} justifyContent={"center"} direction="column">
            <div className="singleArticleTitle">{article.title}</div>
            <ArticleMetadata article={article} />
            <Markdown>
                {article.content}
            </Markdown>
            <Button variant="outlined" onClick={() => {
                props.onBack();
            }}>Back</Button>
        </Stack>
        </div>
}