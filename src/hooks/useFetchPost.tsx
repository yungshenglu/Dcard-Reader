import useAxios from 'axios-hooks';


// GET: 取得該篇文章內容
export default function useFetchPost(postId: number) {
  const [{ data, loading, error }, refetch] = useAxios({
      url: `http://localhost:9527/api/post&id=${postId}`,
      method: 'GET',
    }, {
      manual: true,
    }
  );

  return [{ data, isLoading: loading, isError: error !== null }, refetch]
}