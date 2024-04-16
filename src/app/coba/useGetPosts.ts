import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { useEffect } from 'react'
import { getPostsStore, storeDataPosts } from './slice';
import { PostProps } from './type';

export default function useGetPosts(data: PostProps[]) {
  const { data: posts, loading } = useAppSelector(getPostsStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(storeDataPosts(data))
  }, [data, dispatch]);

  return {
    data: posts,
    isLoading: loading,
  }
}
