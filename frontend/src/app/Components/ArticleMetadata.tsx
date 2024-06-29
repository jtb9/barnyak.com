import dayjs from "dayjs";

interface Props {
    article: any;
}

export default function ArticleMetadata(props: Props) {
    const blob = props.article;

    return <div className="articleMetadata">
        <div className="articleAuthor articleMeta"><div className="articleMetaTitle">Author:</div> {blob.author}</div>
        <div className="articleCategory articleMeta"><div className="articleMetaTitle">Category:</div> {blob.categories?.join(",")}</div>
        <div className="articleDate articleMeta"><div className="articleMetaTitle">Posted:</div> {dayjs(blob.date).format('MM/DD/YYYY')}</div>
    </div>
}
