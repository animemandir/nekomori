import React from "react";

import "./card.styles.scss";

import Time from "../time/time.component";

function SingleCard(props) {
  function createMarkup() {
    return { __html: props.anime.description };
  }

  function getName() {
    return props.anime.title.english ? props.anime.title.english : props.anime.title.romaji;
  }

  function getColor() {
    return props.anime.coverImage.color ? props.anime.coverImage.color : "#fff";
  }

  return (
    <div className="bg-gray-800 h-60 md:h-64 flex w-auto rounded-md text-gray-300">
      <div className="h-full relative w-44 flex flex-col justify-center align-middle ">
        <img
          className="min-h-full min-w-full rounded-l-md"
          alt="anime-img"
          src={props.anime.coverImage.large}
        ></img>
        <div className="absolute bottom-0 bg-gray-800 bg-opacity-90 w-full py-2 px-2 rounded-bl-md">
          <h1 className="text-white font-bold text-left text-sm">{getName()}</h1>
          <p
            style={{
              color: `${props.anime.coverImage.color}`,
            }}
            className="text-left font-bold text-xs"
          >
            {props.anime.studios.edges[0].node.name}
          </p>
        </div>
      </div>
      <div className="w-52 md:w-80 md:max-w-full flex flex-col justify-between">
        <div className="mx-3 mt-3 mb-2 overflow-auto">
          <p className="text-left text-xs">Ep {props.anime.nextAiringEpisode.episode} airing in</p>
          <Time seconds={props.anime.nextAiringEpisode.timeUntilAiring} />
          <p className="text-left text-xs">Source • {props.anime.source}</p>
          <p
            dangerouslySetInnerHTML={createMarkup()}
            className="text-left text-xs ep-desc mt-3"
          ></p>
        </div>
        <div className="bg-gray-700 text-black py-2 rounded-br-md">
          {props.anime.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              style={{
                backgroundColor: `${getColor()}`,
              }}
              className="px-3 py-1 text-xs font-bold mx-2 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
