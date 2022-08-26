# Input

The Input component can be used as a text field, checkbox, or radio element.

## Properties

**defaultValue**

| _type:_ any | _required:_ false | _default:_ '' | _description:_ Initial value shown in the Input component. |

**name**

| _type:_ string | _required:_ false | _default:_ '' | _description:_ Name property of the input |

**onChange**

| _type:_ any | _required:_ false | _default:_ '() => {}' | _description:_ Event to be trigger upon a change of the input value. |

**placeholder**

| _type:_ string | _required:_ false | _default:_ '' | _description:_ PLaceholder value shown inside the input. |

**inputType**

| _type:_ string | _required:_ false | _default:_ 'text' | _description:_ The type of input that is rendered. | _values:_ "text", "checkbox", "radio" |

**color**

| _type:_ string | _required:_ false | _default:_ 'black' | _description:_ Color of the checkbox or radio box-shadow | _values:_ "purple", "yellow", "blue", "green", "pink", "red", "grey", "black" |

## Usage

Example:

` <Input inputType="text" placeholder="Type here.." />`

` <Input inputType="radio" color="blue" />`
