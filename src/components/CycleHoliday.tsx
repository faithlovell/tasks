import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "👻" | "🎄" | "🎆" | "🥂" | "🐣";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holidays>("🥂");

    function changeByDate(): void {
        //I had to write code this way because of the eslint/prettier issues w/ ternary operators
        if (holiday == "🥂") {
            setHoliday("🐣");
        } else if (holiday == "🐣") {
            setHoliday("🎆");
        } else if (holiday == "🎆") {
            setHoliday("👻");
        } else if (holiday == "👻") {
            setHoliday("🎄");
        } else {
            setHoliday("🥂");
        }
    }

    function changeByAlpha(): void {
        //I had to write code this way because of the eslint/prettier issues w/ ternary operators
        if (holiday == "🥂") {
            setHoliday("🎄");
        } else if (holiday == "🐣") {
            setHoliday("🎆");
        } else if (holiday == "🎆") {
            setHoliday("👻");
        } else if (holiday == "👻") {
            setHoliday("🥂");
        } else {
            setHoliday("🐣");
        }
    }

    return (
        <div>
            Holiday: {holiday}
            <div>
                <Button onClick={() => changeByAlpha()}>
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <Button onClick={() => changeByDate()}>Advance by Year</Button>
            </div>
        </div>
    );
}
