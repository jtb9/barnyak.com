import { Button, Stack } from "@mui/material";
import Markdown from "react-markdown";
import ArticleMetadata from "./ArticleMetadata";

interface Props {
    article: any;
    onBack: () => void;
}

export default function Article(props: Props) {
    return <Stack className="singleArticle" justifyContent={"center"} direction="column">
        <div className="singleArticleTitle">{props.article.title}</div>
        <ArticleMetadata article={props.article} />
        <Markdown>
            {props.article.content}
        </Markdown>
        <Button variant="outlined" onClick={() => {
            props.onBack();
        }}>Back</Button>
    </Stack>
}
