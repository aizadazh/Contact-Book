import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../layout/Header";


Enzyme.configure ({
    adapter: new Adapter()
});

it('should render something', () => {
    const wrapper = shallow(
        <Header>
            
        </Header>
    );
    expect(wrapper).toMatchSnapshot();
});
