import { useState, useEffect, useRef, useCallback } from 'react';
import Layout from '@L/index';
import AntBacktop from '@C/AntBacktop';
import AntNotification from '@C/AntNotification';
import CusList from '@C/CusList';
import useFetchPostList from '@H/useFetchPostList';


export function Home() {
  const [beforePostId, setBeforePostId] = useState(0);

  const [{ data, isLoading, isError, hasMorePost }]: any = useFetchPostList(beforePostId)

  useEffect(() => {
    if (isError) {
      AntNotification({
        message: '系統錯誤',
        description: '目前連線異常，請稍後再試。'
      });
    }
  }, [isError]);

  // IntersectionObserver API to handle infinite scroll
  const observer = useRef<IntersectionObserver>();
  const lastPostRef = useCallback((node) => {
    if (isLoading) {
      return;
    }
    // Disconnect previous observer when scolling out
    if (observer.current) {
      observer.current.disconnect();
    }
    // Callback when the target intersects with the viewport
    const callback = (entries: any) => {
      if (entries[0].isIntersecting && hasMorePost) {
        setBeforePostId(node.dataset.id);
      }
    }
    // Implement observer
    observer.current = new IntersectionObserver(callback);
    // Observe the target
    if (node) {
      observer.current.observe(node);
    }
  }, [isLoading, hasMorePost]);

  // Render
  return (
    <Layout>
      <CusList
        listData={data}
        isLoading={isLoading}
        lastItemRef={lastPostRef}
      />
      <AntBacktop />
    </Layout>
  );
}
