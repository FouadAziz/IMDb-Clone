import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../components/loading";
import Link from "next/link";

const movie = () => {
  const router = useRouter();

  const [details, setDetails] = useState({ actorList: [] });
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    fetch("https://imdb-api.com/en/API/Title/k_a5ns3zpx/" + router.query.id)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      });
  }, [router.query]);
  if (loading) return <Loading />;
  return (
    <div className="details-page">
      <div className="navbar">
        <div className="logo-div">
          <Link href={"/"}>
            <h1 className="logo">IMDb</h1>
          </Link>
        </div>
        <div className="searchbar">
          <Link href={"/search"}>
            <button class="btn btn-primary btn-circle">
              <i class="search-icon"></i>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="main-details">
          <div
            className="poster"
            style={{
              backgroundImage: `url("${details.image}")`,
              width: "auto",
              height: "100%",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          ></div>
          <div className="info">
            <h3>{details.fullTitle}</h3>
            <h5>Year:{details.year}</h5>
            <h5>IMDb Rating: {details.year}</h5>
            <h5>Content Rating: {details.contentRating}</h5>
            <h5>Runtime: {details.runtimeStr}</h5>
            <p>
              <h5>Plot :</h5>
              {details.plot}
            </p>
            <h5>{details.genre}</h5>
          </div>
        </div>
      </div>
      <div className="cast">
        <h3>Cast</h3>
        <div className="popList">
          {details.actorList?.map((actor) => (
            <div className="actor" key={actor.id}>
              <img src={actor.image} />
              <h5>
                {actor.name} As {actor.asCharacter}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default movie;
