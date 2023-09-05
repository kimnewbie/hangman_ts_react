type HangmanDrawingProps = {
    numberOfGuesses: number
}

const HEAD = (<div className="drawing__head"></div>)
const BODY = (<div className="drawing__body"></div>)
const RIGHT_ARM = (<div className="drawing__right_arm"></div>)
const LEFT_ARM = (<div className="drawing__left_arm"></div>)
const RIGHT_LEG = (<div className="drawing__right_leg"></div>)
const LEFT_LEG = (<div className="drawing__left_leg"></div>)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div className="hangman__drawing">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className="drawing__hook"></div>
            <div className="drawing__top"></div>
            <div className="drawing__pillar"></div>
            <div className="drawing__support"></div>
        </div>
    )
}