import useSWR, { Key, Fetcher } from "swr";
import { Post } from "../types";
import { fetcher } from "../utils/fetcher";

export const usePost = (slug: string) => {
  const { data, mutate, error } = useSWR<Post | Post[]>(
    `/api/post${slug}`,
    fetcher
  );
  return {
    post: data,
    mutate: mutate,
    isLoading: !error && !data,
    isError: error,
  };
};
