type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({
    guessedLetters,
    wordToGuess,
    reveal = false,
}: HangmanWordProps) {
    return (
        <div className="hangman__word">
            {wordToGuess.split("").map((letter, index) => (
                <span className="word__underline" key={index}>
                    <span
                        style={{
                            visibility:
                                guessedLetters.includes(letter) || reveal
                                    ? "visible"
                                    : "hidden",
                            color:
                                !guessedLetters.includes(letter) && reveal ? "#ff0000" : "#000",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}