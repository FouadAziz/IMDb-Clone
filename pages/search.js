import { useState } from "react";
import Loading from "../components/loading";
import Link from "next/link";

const Search = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(
      "https://imdb-api.com/en/API/SearchAll/k_a5ns3zpx/" +
        e.target.SInput.value
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      });
  };
  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1>IMDb</h1>
        </div>
      </div>
      <div className="search-container">
        <div className="searchArea">
          <form onSubmit={handleSubmit}>
            <input
              type="input"
              name="SInput"
              className="searchTerm"
              placeholder="Enter Search"
            />
            <input type="submit" className="searchButton"></input>
          </form>
        </div>
      </div>
      <div className="popList">
        {result.results
          ?.filter((movie) => movie.image)
          .map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <div className="movieCard">
                <img src={movie.image} />
                <h3>{movie.title}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
