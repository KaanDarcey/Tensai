import React from "react";
import Button from "../../comps/Button";
import Card from "../../comps/Card";
import PageTemplate from "../PageTemplate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";
import "./Study.scss";

const mockData = [
  {name: "Deck A"},
  {name: "Deck B"},
  {name: "Deck A"},
  {name: "Deck B"},
  {name: "Deck A"},
  {name: "Deck B"},
];

const Study = () => {
  return (
    <PageTemplate>
      <h1>TENSAI</h1>
      <Card className="new-set">
        <span>
          <h2 className="card-title">Learn New Set</h2>
          <p className="card-text">Default Deck</p>
        </span>
        <Button isRound>
          <FontAwesomeIcon className="chevron-icon" icon={faChevronCircleRight} />
        </Button>
      </Card>

      <Card className="new-set">
        <h2 className="card-title">Review</h2>
        <Button isRound kind="danger">
          29
        </Button>
      </Card>

      <h2 className="decks-title ">Your Decks</h2>
      {mockData.map((deck) => {
        return (
          <Card className="new-set">
            <h3 className="card-title">{deck.name}</h3>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button>Learn</Button>
              <Button style={{marginLeft: "1rem"}} kind="danger">
                Review
              </Button>
            </span>
          </Card>
        );
      })}
    </PageTemplate>
  );
};

Study.displayName = "Study";

export default Study;
