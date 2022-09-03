# Modal

The Modal component displays a container over top of the screen.

## Properties

**children**

| _type:_ node | _required:_ false | _default:_ null | _description:_ Body content of the Modal component. |

**color**

| _type:_ string | _required:_ false | _default:_ 'green' | _description:_ The color of the Modal's header. | _values:_ 'green', 'yellow', 'red' |

**isVisible**

| _type:_ boolean | _required:_ true | _default:_ false | _description:_ Determines whether the Modal is visible. |

**title**

| _type:_ string | _required:_ false | _default:_ '' | _description:_ Value shown on the Modal header. |

## Usage

Example:

```
<Button onClick={() => setIsVisible(true)}>
  Display Modal
</Button>

<Modal title="Add Card" color="green" isVisible={isVisible}>
    <p>
        Which deck would you like to add this card to?
    </p>
    <Dropdown
        label="Dropdown"
        items={[
            {name: "Basic Vocabulary", value: "basicVocabulary"},
            {name: "Grammar", value: "grammar"},
            {name: "Tech Words", value: "techWords"},
        ]}
    />
    <Button
    onClick={() => setIsVisible(false)}
    kind="close"
    label="Close"
    />
    <Button kind="success" label="Save" />
</Modal>
```
