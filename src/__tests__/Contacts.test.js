import React from "react";
import { shallow } from "enzyme";
import { Contacts } from "../components/containers/Contacts";


describe("Testing Contacts component", () => {
    const props = {
        contacts: [],
        getContacts: jest.fn()
    }
describe("Testing the component is rendered correctly", () => {
    const wrapper = shallow(<Contacts {...props} />)
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();        
        expect(wrapper.find(".text-danger").text()).toBe("Список контактов")
    })
});
    
});