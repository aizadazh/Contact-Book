import { GET_CONTACTS, GET_CONTACT, DELETE_CONTACT, ADD_CONTACT, EDIT_CONTACT  } from "./ActionTypes";
import { getContact, getContacts, deleteContact, editContact, addContact } from "./ContactAction";

describe("Testing actions", () => {
    it("returns GET_CONTACTS type", () => {
        expect(getContacts({})).toEqual({ type: GET_CONTACTS, payload: res.data });
    })
    it("returns GET_CONTACT type", () => {
        expect(getContact({})).toEqual({ type: GET_CONTACT, payload: res.data });
    })
    it("returns ADD_CONTACT type", () => {
        expect(addContact({})).toEqual({ type: ADD_CONTACT, payload: res.data });
    })
    it("returns EDIT_CONTACT type", () => {
        expect(editContact({})).toEqual({ type: EDIT_CONTACT, payload: res.data });
    })
    it("returns DELETE_CONTACT type", () => {
        expect(deleteContact({})).toEqual({ type: DELETE_CONTACT, payload: id });
    })

})