import React, { useState, useRef, useCallback } from 'react';
import Layout from '@L/index';
import AntBacktop from '@C/AntBacktop';
import CusList from '@C/CusList';
import useFetchPostList from '@H/useFetchPostList';


export function Home() {
  const [beforePostId, setBeforePostId] = useState(0);

  const [{ data, isLoading, error, hasMorePost }]: any = useFetchPostList(beforePostId)

  // IntersectionObserver API to handle infinite scroll
  const observer = useRef<IntersectionObserver>();
  const lastPostRef = useCallback((node) => {
    if (isLoading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMorePost) {
        // console.log('node.dataset.id: ', node.dataset.id);
        setBeforePostId(node.dataset.id);
      }
    })
    if (node) observer.current.observe(node)
  }, [isLoading, hasMorePost])

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
