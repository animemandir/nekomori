import React from "react";

function ReviewCard(props) {
  function getName() {
    return props.review.media.title
      ? props.review.media.title.english
      : props.review.media.title.romaji;
  }

  return (
    <div className="bg-gray-800 h-44 md:h-48 flex w-auto rounded-md text-gray-300 overflow-hidden transition duration-300 ease-in-out transform hover:scale-101 hover:shadow-2xl elementToFadeInAndOut">
      {/* Card Image */}
      <div className="relative md:w-56 w-40 aspect-w-16 aspect-h-1">
        <img
          className="object-cover rounded-l-md"
          alt="review-img"
          src={props.review.media.coverImage.large}
        />
        <a
          // href={`https://anilist.co/${props.review.mediaId}/${props.review.mediaId}/`}
          href={`https://anilist.co/review/${props.review.id}`}
          rel="noreferrer"
          target="_blank"
        >
          {/*Card Studio & Title */}
          <div className="absolute inset-x-0 bottom-0 bg-gray-800 bg-opacity-90 w-full py-2 px-2 rounded-bl-md studio">
            <h1 className="text-white font-bold text-left text-sm">{getName()}</h1>
            {props.review.media.studios.edges[0] ? (
              <p
                style={{
                  color: `${props.review.media.coverImage.color}`,
                }}
                className="text-left font-bold text-xs"
              >
                {props.review.media.studios.edges[0].node.name}
              </p>
            ) : (
              <p className="text-left font-bold text-xs">
                {props.review.media.staff.edges[0].node.name.full}
              </p>
            )}
          </div>
        </a>
      </div>
      {/* Card Desc */}
      <div className="w-full md:max-w-full flex flex-col justify-between">
        <div className="mx-3 mt-3 mb-2 overflow-auto">
          <div>
            <p className="text-left text-xs">{`Review by ${props.review.user.name}`}</p>
            <div className="text-left text-sm md:text-lg font-bold ep-time">
              Rating : {props.review.score} / 100
            </div>
          </div>

          <p className="text-left text-xs">Type • {props.review.mediaType}</p>
          <div className="text-left text-xs mt-3 text-gray-400 hover:text-gray-300" id="ep-desc">
            {props.review.summary}
          </div>
        </div>
        <div className=" px-3 text-left text-xs mt-3 text-gray-200"></div>
        <div className="bg-gray-700 text-gray-300 py-2 rounded-br-md">
          {props.review.rating} <i className="bi bi-hand-thumbs-up-fill"></i> out of{" "}
          {props.review.ratingAmount}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
