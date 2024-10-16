async function postDetailsPage({ params }) {
  const postId = params.postId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  console.log(`${params.postId}`);

  return (
    <>
      <div>
        <h1>post Details</h1>
      </div>
      <div>
        <h1>{post.title}</h1>
      </div>
    </>
  );
}

export default postDetailsPage;
