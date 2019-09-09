import React from "react";
import { shallow } from "enzyme";
import Contact from "./Contact";

describe("Testing Contact component", ()=>{
    const props = {
        contact: {
            id: 1,
            name: "vasya",
            address: "Shopokova",
            phone: "0552440028"
        },
        deleteContact: jest.fn()
    }

    describe("Testing availability of classes, tags and icons", ()=>{
        const wrapper = shallow(<Contact {...props} />)
        it('renders correctly', () => {
            expect(wrapper.find('li')).toHaveLength(1);
            expect(wrapper.find('.fas fa-sort-down')).toHaveLength(1);
            expect(wrapper.find('.fas fa-times')).toHaveLength(1);
            expect(wrapper.find('.fas fa-pencil-alt')).toHaveLength(1);
            expect(wrapper.find('h4').text()).toEqual('{$props.contact.name}');
            wrapper.setState({showContactInfo: true});

            wrapper.find('.fas fa-sort-down').simulate('click')
            expect(wrapper.setState({ showContactInfo: true }))

            expect(wrapper).toMatchSnapshot();
        })
    })
})