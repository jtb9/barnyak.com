import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
}
