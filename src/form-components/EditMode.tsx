import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [canEdit, setCanEdit] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setCanEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="can-edit-check"
                label="Edit"
                checked={canEdit}
                onChange={updateEdit}
            />
            <div>
                {canEdit ? (
                    <>
                        <Form.Group controlId="formUserName">
                            {" "}
                            <Form.Label>Name:</Form.Label>{" "}
                            <Form.Control
                                value={userName}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setUserName(event.target.value)}
                            />{" "}
                        </Form.Group>{" "}
                        <Form.Check
                            type="checkbox"
                            id="is-student-checkbox"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        />{" "}
                    </>
                ) : (
                    <span>
                        {" "}
                        {userName} is {!isStudent && "not"} a student{" "}
                    </span>
                )}
            </div>
        </div>
    );
}
