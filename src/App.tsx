import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import shapes from "./images/shapes.png";

function App(): JSX.Element {
    return (
        <div className="App" style={{ background: "PeachPuff" }}>
            <header className="App-header">
                Hello World! Faith Lovell UD CISC275 with React Hooks and
                TypeScript
            </header>
            <h1>Wanna see some shapes?</h1>
            <img src={shapes} alt="A picture of shapes" />
            <Container>
                <Row>
                    <Col>
                        Here is some info about the shapes:{" "}
                        <ul>
                            <li>There are ten shapes</li>
                            <li>Each shape is a different color</li>
                            <li>Only two shapes have pointy edges</li>
                        </ul>{" "}
                        <div
                            style={{
                                height: "4px",
                                width: "4px",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                        </div>
                    </Col>
                    <Col>
                        {" "}
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>{" "}
                        <div
                            style={{
                                height: "4px",
                                width: "4px",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
