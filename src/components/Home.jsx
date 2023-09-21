import { useParams } from "react-router-dom";

function Home() {
  const { id } = useParams();
  return (
    <div className="home">
      <h1>Home</h1>
      {id}
    </div>
  );
}

export default Home;
