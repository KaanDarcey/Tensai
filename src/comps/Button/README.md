# Button

The Button component can be clicked by a user to trigger an event.

## Properties

**children**

| *type:* node | *required:* false | *default:* null | *description:* Body content of the Button component. |

**isRound** 

| *type:* boolean | *required:* false | *default:* false | *description:* Makes Button round. |

**isSubmit**

| *type:* boolean | *required:* false | *default:* false | *description:* Changes button type to submit. |

**label**

| *type:* string | *required:* false | *default:* '' | *description:* Label displayed in the Button. |

**onClick**

| *type:* any | *required:* true | *default:* () => {} | *description:* Executable when the Button is clicked. |

**size**

| *type:* string | *required:* false | *default:* 'auto' | *description:* Size of the Button component. | *values:* 'auto', 'small', 'medium', 'large'. |

**kind**

| *type:* string | *required:* false | *default:* 'primary' | *description:* Kind sets the styling of the button. | *values:* 'primary', 'secondary', 'action', 'success', 'warning', 'danger', 'close', 'link'. |

## Usage

Example:

```<Button kind="secondary" size="medium" onClick={() => {}} isRound label="Button"/>```