type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}
export function HangmanWord({
    guessedLetters,
    // wordToGuess,
    // reveal = false
}: HangmanWordProps) {
    const word = "test";

    return (
        <div className="hangman__word">
            {word.split("").map((letter, index) => {
                <span className="word__underline" key={index}>
                    <span
                        style={{
                            visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'
                        }}
                    >
                        {letter}
                    </span>
                </span>
            })}
        </div>
    )
}