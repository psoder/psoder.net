import { useQuery } from "@tanstack/react-query";
import type { ReactNode } from "react";
import Markdown from "react-markdown";
import { fetchPost } from "../api/posts";

interface PostProps {
  postId: string;
}

export const Post = (props: PostProps): ReactNode => {
  const query = useQuery({
    queryKey: ["POSTS", props.postId],
    queryFn: () => fetchPost(props.postId),
  });

  if (query.data) {
    return (
      <div className="markdown prose prose-invert max-w-none">
        <Markdown>{query.data}</Markdown>
      </div>
    );
  } else if (query.isError) {
    return <div>{query.error.message}</div>;
  } else {
    return <pre>Loading...</pre>;
  }
};
