import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function inputAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formAnswerInput">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={inputAnswer} />
            </Form.Group>
            <h3>Check Answer</h3>
            <div>{answer == expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
