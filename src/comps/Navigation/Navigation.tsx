import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faLayerGroup, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import * as sc from "./Navigation.styles";

export interface NavigationProps {
  initialRoute: string;
  items: any;
}

const Navigation = ({initialRoute, items, ...moreProps}: NavigationProps) => {
  const path = window.location.pathname;
  return (
    <sc.Nav {...moreProps}>
      <sc.Navigation>
        {items.map((item: any) => {
          return (
            <sc.Item
              data-cy={item.label}
              color={item.color}
              count={items.length}
              isActive={item.route === path}
              key={item.label}
              onClick={() => item.navigate()}
            >
              <FontAwesomeIcon icon={item.icon} />
              <sc.Label>{item.label}</sc.Label>
            </sc.Item>
          );
        })}
      </sc.Navigation>
    </sc.Nav>
  );
};

const defaultProps = {
  initialRoute: "study",
  items: [
    {
      icon: faHouse,
      label: "Study",
      color: "pink",
      route: "study",
      navigate: () => {},
    },
    {
      icon: faLayerGroup,
      label: "Decks",
      color: "yellow",
      route: "decks",
      navigate: () => {},
    },
    {
      icon: faUserCircle,
      label: "Profile",
      color: "green",
      route: "profile",
      navigate: () => {},
    },
  ],
};

Navigation.defaultProps = defaultProps;
Navigation.displayName = "Navigation";

export default Navigation;
