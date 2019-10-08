import React from "react";
import { shallow } from "enzyme";
import { EditContact } from "../components/containers/EditContact";

function setup() {
    const props = {
        contact: "Aizada Zhumalieva",
        getContact: jest.fn(),
        match: { params: { id: 1 }}
    }
    const wrapper = shallow(<EditContact {...props} />)
    return {
        props,
        wrapper
    }
}
describe("Testing EditContact component", ()=> {
    it('renders correctly', ()=> {
        const { wrapper } = setup()
        expect(wrapper.find('TextGroupInput')).toBeDefined()
        expect(wrapper).toMatchSnapshot();
    })
})