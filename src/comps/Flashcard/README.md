# Flashcard

The Flashcard component displays a value on one side of a card, when click it flips and displays a second value.

## Properties

**answerValid**

| _type:_ boolean | _required:_ true | _default:_ true | _description:_ if true makes flipside green, if false it is red. |

**kana**

| _type:_ string | _required:_ true | _default:_ N/A | _description:_ kana characters to display on front of card. |

**kanji**

| _type:_ string | _required:_ false | _default:_ N/A | _description:_ Kanji characters to display on front of card. |

**translation**

| _type:_ string | _required:_ true | _default:_ N/A | _description:_ Translation to be displayed on back of card. |

## Usage

Example:

`<Flashcard kana="てんさい" kanji="天才" translation="genius" />`
