import Movie from "../components/movie";
import Link from "next/link";

const defaultEndpoint =
  "https://imdb-api.com/en/API/MostPopularMovies/k_a5ns3zpx";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <div className="navbar">
        <div className="logo-div">
          <Link href={"/"}>
            <h1 className="logo">IMDb</h1>
          </Link>
        </div>
        <div className="searchbar">
          <Link href={"/search"}>
            <button className="btn btn-primary btn-circle">
              <i className="search-icon"></i>
            </button>
          </Link>
        </div>
      </div>

      <Movie data={data} />
    </div>
  );
}
