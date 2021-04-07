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
    <div className="bg-gray-800 h-60 md:h-64 flex w-auto rounded-md text-gray-300 overflow-hidden">
      <div className="relative w-64 aspect-w-16 aspect-h-1">
        <img
          className="object-cover rounded-l-md"
          alt="anime-img"
          src={props.anime.coverImage.large}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gray-800 bg-opacity-90 w-full py-2 px-2 rounded-bl-md studio">
          <h1 className="text-white font-bold text-left text-sm">{getName()}</h1>

          {props.anime.studios.edges[0] ? (
            <p
              style={{
                color: `${props.anime.coverImage.color}`,
              }}
              className="text-left font-bold text-xs"
            >
              {props.anime.studios.edges[0].node.name}
            </p>
          ) : (
            <p className="text-left font-bold text-xs">TBA</p>
          )}
        </div>
      </div>
      <div className="w-full md:max-w-full flex flex-col justify-between">
        <div className="mx-3 mt-3 mb-2 overflow-auto">
          {props.anime.nextAiringEpisode ? (
            <div>
              <p className="text-left text-xs">{`Ep ${props.anime.nextAiringEpisode.episode} airing in`}</p>
              <Time seconds={props.anime.nextAiringEpisode.timeUntilAiring} />
            </div>
          ) : (
            <div>
              <p className="text-left text-xs">{`Anime airing in`}</p>
              <div className="text-left text-lg font-bold ep-time">Not Yet Released</div>
            </div>
          )}
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
              className="px-3 py-1 text-xs font-bold w-full mx-1 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>

    // <div className="bg-gray-800 h-60 md:h-64 flex w-auto rounded-md text-gray-300">
    //   <div class="aspect-w-16 aspect-h-9">
    //     <iframe
    //       title="YT"
    //       src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen
    //     ></iframe>
    //   </div>
    // </div>
  );
}

export default SingleCard;
