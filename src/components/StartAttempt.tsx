import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setNumAttempts(numAttempts - 1);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={() => startQuiz()}
                    disabled={inProgress || numAttempts == 0}
                >
                    Start Quiz
                </Button>
            </div>{" "}
            <div>
                <Button
                    onClick={() => setInProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setNumAttempts(numAttempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                {" "}
                <span>Number of Attempts: {numAttempts}</span>{" "}
            </div>
            <span>Quiz {inProgress == true ? "is" : "is not"} in progress</span>
        </div>
    );
}
