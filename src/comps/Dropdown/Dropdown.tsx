import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import * as sc from "./Dropdown.styles";

export interface DropdownProps {
  label?: string;
  items: any[];
  setValue: any;
}

const Dropdown = ({label, items, setValue, ...moreProps}: DropdownProps) => {
  const [displayList, setDisplayList] = React.useState(false);
  const [dropdownLabel, setDropdownLabel] = React.useState(label);

  const handleDisplayList = () => setDisplayList(!displayList);

  const handleValueUpdate = (val: any) => {
    setValue(val);
    setDropdownLabel(val.name);
  };

  return (
    <sc.Dropdown role="list" {...moreProps}>
      <sc.DropdownHeader
        isActive={displayList}
        tabindex="0"
        onClick={() => handleDisplayList()}
      >
        <span>{dropdownLabel}</span>
        {displayList ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </sc.DropdownHeader>
      <sc.DropdownList isVisible={displayList}>
        {items.map((item) => (
          <sc.DropdownListItem
            tabindex="0"
            onClick={() => {
              handleValueUpdate(item);
              handleDisplayList();
            }}
            key={item.value}
            role="option"
          >
            {item.name}
          </sc.DropdownListItem>
        ))}
      </sc.DropdownList>
    </sc.Dropdown>
  );
};

const defaultProps = {
  label: "",
  setValue: () => {},
};

Dropdown.displayName = "Dropdown";
Dropdown.defaultProps = defaultProps;

export default Dropdown;
