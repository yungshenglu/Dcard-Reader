import { useState, useEffect } from 'react';
import axios from 'axios';


// GET: 取得熱門文章列表
export default function useFetchPostList(before: number) {
  const [postList, setPostList] = useState([]);
  const [hasMorePost, setHasMorePost] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const apiUrl = `http://localhost:9527/api/posts&before=${before}`;
    if (before === 0) {
      // 第一次取得文章列表
      axios.get(apiUrl)
        .then((res) => {
          setPostList(res.data);
          setHasMorePost(res.data.length > 0);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
        });
    } else {
      // 加載新的文章列表
      setTimeout(() => {
        axios.get(apiUrl)
          .then((res) => {
            setPostList((prev) => [...prev, ...res.data] as any);
            setHasMorePost(res.data.length > 0);
            setIsLoading(false);
          })
          .catch(() => {
            setIsError(true);
          });
        }, 600);
    }
  }, [before]);

  return [{ data: postList, isLoading, isError, hasMorePost }];
}
