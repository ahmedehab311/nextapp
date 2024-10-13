import Link from "next/link";

export const metadata = {
  title: "posts ",
};
async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  const postJsx = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`}>
        <div className="bg-white text-black border ">
          <h1 className="text-red-700 text-center text-3xl">{post.title}</h1>
          <h3 className="text-blue-700 text-xl">{post.body}</h3>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>posts page </h1>
      <div>{postJsx}</div>
    </div>
  );
}

export default page;
