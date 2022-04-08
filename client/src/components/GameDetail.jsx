import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";

export default function GameDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  const details = useSelector((state) => state.detail);

  return (
    <div>
      {details.length > 0 ? (
        <div>
          <img
            src={details[0]?.background_image}
            alt="Not Found"
            height="500px"
            width="500px"
          />
          <h1>{details[0]?.name}</h1>
          <div>
            <p>GENRES</p>
            {details[0]?.genres?.map((gen) =>
              gen?.name ? (
                <h2 key={gen.name}>{gen.name + " "}</h2>
              ) : (
                <h2 key={gen}>{gen + " "}</h2>
              )
            )}
          </div>
          <div>
            <div>
              <p>RELEASED</p>
              <h2>{details[0]?.released}</h2>
            </div>
            <div>
              <p>RATING</p>
              <h2>{details[0]?.rating}</h2>
            </div>
            <div>
              <p>PLATFORMS</p>
              {details[0].platforms.map((p) => (
                <h2 key={p}>{p}</h2>
              ))}
            </div>
            <div>
              <p>DESCRIPTION</p>
              <h2
                dangerouslySetInnerHTML={{
                  __html: details[0]?.description,
                }}
              ></h2>
            </div>
          </div>
          <Link to="/home">
            <button>BACK HOME</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>Game not found</h1>
          <Link to="/home">
            <button>BACK HOME</button>
          </Link>
        </div>
      )}
    </div>
  );
}