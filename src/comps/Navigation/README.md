# Navigation

The Navigation component displays options that can be selected to navigate to other routes or trigger events.

## Properties

**initialRoute**

| _type:_ string | _required:_ false | _default:_ Study | _description:_ Determines which item is initially selected. |

**items**

| _type:_ array | _required:_ true | _default:_ N/A | _description:_ Array of items that will represent each navigation item and their details. | _values:_ [{icon: iconVariable, label: string, color: 'green' | 'yellow' | 'pink', route: string, navigate: function }] |

## Usage

Example:

```
    <Navigation items={
        [
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
            }
        ]
    }
    />
```
