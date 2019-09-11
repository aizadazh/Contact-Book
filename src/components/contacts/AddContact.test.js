import React from "react";
import { shallow } from "enzyme";
import { AddContact } from "./AddContact";


function setup() {
    const props = {
        newContact: {
            name: "Aizada",
            address: "Bishkek",
            phone: "0552440028",
        },
        addContact: jest.fn()
    }
    const wrapper = shallow(<AddContact {...props} />)
        return {
            props,
            wrapper
        }
}

describe("Testing AddContact component", () => {    
    it("renders correctly", () => {
        const { wrapper } = setup()
        expect(wrapper.find('.card-header').text()).toBe('Добавить контакт')        
        expect(wrapper.find('TextGroupInput')).toBeDefined()
    })
    it('should call addContact if length of text is greater than 0', ()=> {
        const { wrapper } = setup()        
        expect(wrapper.find('value')).toEqual({})

    })
})