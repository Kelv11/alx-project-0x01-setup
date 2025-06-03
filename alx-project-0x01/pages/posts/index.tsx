import PostCard from "@/components/common/Postcard";
import PostModal from "@/components/common/postalModal";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { PostData } from "@/interfaces";
import { useState } from "react";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState<PostData | null>(null);

  const handleAddPost = (post: PostData) => {
    setNewPost({ ...post, id: posts.length + 1 });
    console.log("New post added:", post);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard
              title={title}
              body={body}
              userId={userId}
              id={id}
              key={key}
            />
          ))}
          {newPost && (
            <PostCard
              title={newPost.title}
              body={newPost.body}
              userId={newPost.userId}
              id={newPost.id!}
            />
          )}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
