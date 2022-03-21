import Link from "next/link";

const Movie = ({ data }) => {
  return (
    <div className="popList">
      {data["items"].map((title) => (
        <Link href={`/movie/${title.id}`} key={title.id}>
          <div className="movieCard">
            <img src={title.image} alt="" />
            <h3>{title.fullTitle}</h3>
            <h4>{`Rating: ${title.imDbRating}           Year: ${title.year}`}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Movie;
