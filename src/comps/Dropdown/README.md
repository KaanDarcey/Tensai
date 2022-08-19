# Dropdown

The Dropdown component can be used as a container to display other content.

## Properties

**label**

| _type:_ string | _required:_ false | _default:_ 'null' | _description:_ Initial value shown on the Dropdown component. |

**items**

| _type:_ array | _required:_ true | _default:_ N/A | _description:_ Items that are listed when the dropdown is open. |

**setValue**

| _type:_ string | _required:_ false | _default:_ 'auto' | _description:_ Accepts a useState to retrieve Dropdown's value. |

## Usage

Example:

`<Dropdown setValue="setState" label="Dropdown Label" items={[{name: "Item A", value: "itemA"},{name: "Item B", value: "itemB"}]}/>`
