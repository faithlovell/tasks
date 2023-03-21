import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS: string[] = [
        "lightpink",
        "indianred",
        "lightsalmon",
        "lemonchiffon",
        "lightgreen",
        "lightskyblue",
        "plum",
        "lavender"
    ];
    const [selectedColor, setColor] = useState<string>("lightpink");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={color}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                    style={{ backgroundColor: color }}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </span>{" "}
            </div>
        </div>
    );
}
