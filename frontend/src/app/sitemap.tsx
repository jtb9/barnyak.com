import { MetadataRoute } from 'next'
import { ARTICLE_DATA } from 'Utils/ArticleData';
 
export default function sitemap(): MetadataRoute.Sitemap {
  let baseMap = [
    {
      url: 'https://barnyak.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://barnyak.com/space',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://barnyak.com/games',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
        url: 'https://barnyak.com/home/6_21_24_granblue',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
  ]

  for (let i = 0; i < ARTICLE_DATA.length; i++) {
    baseMap.push(
      {
        url: 'https://barnyak.com/home/' + ARTICLE_DATA[i].slug,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.6,
      },
    )
  }


  //@ts-ignore
  return baseMap;
}
