// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// Blog型定義
export type Blog = {
    id: string;
    title: string;
    content: string;
    image?: {
      url: string;
    };
  };
  export type BlogResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Blog[];
  };
  
  //APIの呼び出し
  export const getBlogs = async (queries?: MicroCMSQueries) => {
    return await client.get<BlogResponse>({ endpoint: "blogs", queries });
  };
  export const getBlogDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
  ) => {
    return await client.getListDetail<Blog>({
      endpoint: "blogs",
      contentId,
      queries,
    });
  };
// News型定義
export type News = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;

    date :string;
    text: string;

  };
  export type NewsResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: News[];
  };
  
  //APIの呼び出し
  export const getNews = async (queries?: MicroCMSQueries) => {
    return await client.get<NewsResponse>({ endpoint: "news", queries });
  };
  export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
  ) => {
    return await client.getListDetail<News>({
      endpoint: "news",
      contentId,
      queries,
    });
  };

  