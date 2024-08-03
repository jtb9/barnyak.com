import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArticleMetadata from "./ArticleMetadata";
import Image from './Image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { scrollToTop } from "Utils/Behavior";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { ARTICLE_DATA } from "Utils/ArticleData";

interface Props {
  category: string;
  choseArticle: (newArticle: any) => void;
}

export default function ArticleList(props: Props) {
  const [page, setPage] = useState(1);
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
            scrollToTop();
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
