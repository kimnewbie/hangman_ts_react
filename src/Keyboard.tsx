import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyBoardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled: boolean
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyBoardProps) {
    return (
        <div className="keyboard">
            {
                KEYS.map(key => {
                    const isActive = activeLetters.includes(key);
                    const isInactive = inactiveLetters.includes(key);

                    return (
                        <button
                            className={`${styles.btn} ${isActive ? styles.active : isInactive ? styles.inactive : ""}`}
                            key={key}
                            onClick={() => addGuessedLetter(key)}
                            disabled={isActive || isInactive || disabled}
                        >
                            {key}
                        </button>
                    )
                })
            }
        </div>
    )
}