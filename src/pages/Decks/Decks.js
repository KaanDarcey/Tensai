import React from "react";
import Button from "../../comps/Button";
import Card from "../../comps/Card";
import PageTemplate from "../PageTemplate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import "./Decks.scss";
import Input from "../../comps/Input";
import Progressbar from "../../comps/Progressbar";

const mockData = [
  {name: "Deck A", current: 10, total: 20},
  {name: "Deck B", current: 30, total: 100},
  {name: "Deck C", current: 48, total: 50},
  {name: "Deck A", current: 10, total: 20},
  {name: "Deck B", current: 30, total: 100},
  {name: "Deck C", current: 48, total: 50},
];

const Study = () => {
  return (
    <PageTemplate>
      <h1>TENSAI</h1>
      <h2 className="">Decks</h2>
      <p className="decks-description">Here you can view and edit all your decks.</p>
      <div className="align-row">
        <Button>View all cards</Button>
        <span className="align-row margin-left">
          <Button kind="success">
            <span className="margin-right">Add Deck</span>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </span>
      </div>
      <Input placeholder="Search" style={{marginTop: "1rem", width: "100%"}} />
      <div class="deck-container">
        {mockData.map((deck) => {
          return (
            <Card style={{padding: "1rem"}} className="deck-card">
              <span className="deck-card-heading">
                <h3>{deck.name}</h3>
                <Button kind="link">View Cards</Button>
              </span>
              <Progressbar current={deck.current} total={deck.total} />
            </Card>
          );
        })}
      </div>
    </PageTemplate>
  );
};

Study.displayName = "Study";

export default Study;
