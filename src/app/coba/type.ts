export interface PostProps {
  id: number;
  userId: number;
  body: string;
  title: string;
}

export interface PostSliceProps {
  data: PostProps[];
  loading: boolean;
}