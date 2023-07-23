import{createApi,fetchBaseQuery}from'@reduxjs/toolkit/query/react';
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
export const articleApi =createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl:'https://article-summarizer.p.rapidapi.com/Article_url',
    prepareHeader: (headers) =>{
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', 
      'article-summarizer.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints:  (builder)=>({
    getSummary: builder.query({
      query: (params)=>`/summarize?url=${encodeURIComponent(params.
        articleUrl)}& length 3`
    })
  })
});

export const { useLazyGetSummaryQuery} = articleApi;