import React from "react";

import "./card.styles.scss";

import Card from "react-bootstrap/Card";

import Time from "../time/time.component";

function SingleCard(props) {
  function createMarkup() {
    return { __html: props.anime.description };
  }

  function getName() {
    return props.anime.title.english ? props.anime.title.english : props.anime.title.romaji;
  }

  return (
    <div>
      <Card className="custom-card my-3" bg={"dark"} text={"white"}>
        <div className="card-img">
          <Card.Img className="card-image" src={props.anime.coverImage.large} />
          <div className="card-title">
            <Card.Title className="card-text text-left">{getName()}</Card.Title>
            <Card.Title
              style={{
                color: `${props.anime.coverImage.color}`,
              }}
              className="studio-text text-left"
            >
              {props.anime.studios.edges[0].node.name}
            </Card.Title>
          </div>
        </div>
        <div className="custom-card-container">
          <Card.Body>
            <Card.Text className="text-small text-muted my-0 text-left ep-text">
              Ep {props.anime.nextAiringEpisode.episode} airing in
            </Card.Text>

            <Time seconds={props.anime.nextAiringEpisode.timeUntilAiring} />

            <Card.Text className="text-small text-muted my-0 text-left ep-source">
              Source • {props.anime.source}
            </Card.Text>

            <Card.Text dangerouslySetInnerHTML={createMarkup()} className="text-left ep-desc" />
          </Card.Body>
          {/* <Card.Footer className="text-muted ep-footer">
            {props.anime.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                style={{
                  backgroundColor: `${props.anime.coverImage.color}`,
                }}
                className="ep-genre mx-2"
              >
                {genre}
              </span>
            ))}
          </Card.Footer> */}
        </div>
      </Card>
    </div>
  );
}

export default SingleCard;
