import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [addAttempts, setAddAttempts] = useState<string>("0"); //second state per instructions
    const added = parseInt(addAttempts) || 0;

    return (
        <div>
            <h3>Number of Attempts: {numAttempts}</h3>
            <Form.Group controlId="formAddAttempts">
                <Form.Label>Increase Attempts by:</Form.Label>
                <Form.Control
                    type="number"
                    value={addAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAddAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <span>
                <Button
                    onClick={() => setNumAttempts(numAttempts - 1)}
                    disabled={numAttempts <= 0}
                >
                    use
                </Button>
            </span>
            <span>
                <Button onClick={() => setNumAttempts(numAttempts + added)}>
                    gain
                </Button>
            </span>
        </div>
    );
}
