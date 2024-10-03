export default async function Page() {
  let data = await fetch("https://test-deploy-12.onrender.com/estudiantes/");
  let posts = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>{post.Estudiante}</li>
      ))}
    </ul>
  );
}
