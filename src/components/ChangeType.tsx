import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const Qtypes: QuestionType[] = [
        "multiple_choice_question",
        "short_answer_question"
    ];
    const [qtype, setQtype] = useState<QuestionType>(Qtypes[1]);

    const changePet = (): void => {
        qtype == "multiple_choice_question"
            ? setQtype(Qtypes[1])
            : setQtype(Qtypes[0]);
    };

    return (
        <div>
            <Button onClick={changePet}>Change Type</Button>{" "}
            <div>
                {" "}
                {qtype == "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </div>
    );
}
