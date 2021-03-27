import useAxios from 'axios-hooks';


// GET: 取得熱門文章列表
export default function useFetchPostList(before: number) {
  const [{ data, loading, error }, refetch] = useAxios({
      url: `http://localhost:9527/api/posts&before=${before}`,
      method: 'GET',
    }
  );

  return [{ data: data, isLoading: loading, isError: error }, refetch];
}
