# Button

The Button component can be clicked by a user to trigger an event.

## Properties

**children**

| _type:_ node | _required:_ false | _default:_ null | _description:_ Body content of the Button component. |

**isRound**

| _type:_ boolean | _required:_ false | _default:_ false | _description:_ Makes Button round. |

**isSubmit**

| _type:_ boolean | _required:_ false | _default:_ false | _description:_ Changes button type to submit. |

**label**

| _type:_ string | _required:_ false | _default:_ '' | _description:_ Label displayed in the Button. |

**onClick**

| _type:_ any | _required:_ true | _default:_ () => {} | _description:_ Executable when the Button is clicked. |

**size**

| _type:_ string | _required:_ false | _default:_ 'auto' | _description:_ Size of the Button component. | _values:_ 'auto', 'small', 'medium', 'large'. |

**kind**

| _type:_ string | _required:_ false | _default:_ 'primary' | _description:_ Kind sets the styling of the button. | _values:_ 'primary', 'secondary', 'action', 'success', 'warning', 'danger', 'close', 'link'. |

## Usage

Example:

`<Button kind="secondary" size="medium" onClick={() => {}} isRound label="Button"/>`
