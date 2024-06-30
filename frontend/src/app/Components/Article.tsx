import { Button, Stack } from "@mui/material";
import ArticleMetadata from "./ArticleMetadata";
import { articleContext } from "./Blog";
import { useContext } from "react";
import Image from './Image';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Markdown from 'markdown-to-jsx'

interface Props {
    onBack: () => void;
}

export default function Article(props: Props) {
    const article = useContext(articleContext);

    const renderMarkdown = () => {
        return <Markdown options={{
            overrides: {
                img: {
                    component: Image
                },
            },
        }}>{article.content}</Markdown>
    }

    return <div className="singleArticle paper">
        <Stack className="paperInner" justifyContent={"center"} direction="column">
            <div className="singleArticleTitle">{article.title}</div>
            <ArticleMetadata article={article} />
            {renderMarkdown()}
            {/* <Markdown components={{
                image(props) {
                    //@ts-ignore
                    return <Image {...props} />
                }
            }}>
                {article.content}
            </Markdown> */}
            <Button variant="outlined" onClick={() => {
                props.onBack();
            }}>Back</Button>
        </Stack>
    </div>
}
