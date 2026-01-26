import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Post } from "../../components/Post";

const Page: NextPage = () => {
  const router = useRouter();

  const postId = router.query.id;
  if (typeof postId !== "string") {
    return <div>Invalid post id</div>;
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="rounded-xl bg-ctp-mantle p-6 shadow-lg">
        <Post postId={postId} />
      </div>
    </article>
  );
};

export default Page;
