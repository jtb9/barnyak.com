import dayjs from "dayjs";

interface Props {
    article: any;
}

export default function ArticleMetadata(props: Props) {
    const blob = props.article;

    return <div className="articleMetadata">
        <div className="articleAuthor articleMeta">Author: {blob.author}</div>
        <div className="articleCategory articleMeta">Category: {blob.categories?.join(",")}</div>
        <div className="articleDate articleMeta">Posted: {dayjs(blob.date).format('MM/DD/YYYY')}</div>
    </div>
}
