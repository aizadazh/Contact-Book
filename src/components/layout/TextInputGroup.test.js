import React from "react";
import TextInputGroup from "./TextInputGroup";
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const TextInputComponent = renderer
        .create(<TextInputGroup />)
        .toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});