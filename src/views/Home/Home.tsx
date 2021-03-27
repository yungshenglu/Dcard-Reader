import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Layout from '@L/index';
import AntButton from '@C/AntButton';
import CusList from '@C/CusList';
import useFetchPostList from '@H/useFetchPostList';
import { AReloadOutlined } from '@P/antd';


export function Home() {
  const [postList, setPostList] = useState([]);
  const [beforePostId, setBeforePostId] = useState(0);

  const [{ data, isLoading, error }, refetch]: any = useFetchPostList(beforePostId)

  useEffect(() => {
    if (beforePostId === 0) {
      // 第一次取得文章列表
      setPostList(data)
    } else {
      // 加載新的文章列表
      setPostList((prev) => 
        prev[0] !== data[0] 
          ? [...prev, ...data] as [] 
          : [...prev] as []
      );
    }
  }, [data, beforePostId])

  // 是否還有更多文章
  const hasMorePost: Boolean = useMemo(() => {
    return data?.length > 0;
  }, [data]);


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
        console.log('node.dataset.id: ', node.dataset.id);
        setBeforePostId(node.dataset.id);
      }
    })
    if (node) observer.current.observe(node)
  }, [isLoading, hasMorePost])


  // Event handler
  const handleRefetch = async () => {
    await refetch();
  }

  // Render
  return (
    <Layout
      childrenMain={
        <CusList
          listData={postList}
          isLoading={isLoading}
          lastItemRef={lastPostRef}
        />
      }
      childrenRight={
        <AntButton
          onClick={handleRefetch}
          type="primary" 
          shape="round"
          icon={<AReloadOutlined />} 
          loading={isLoading}
          style={{
            position: 'fixed'
          }}
        />
      }
    />
  );
}
