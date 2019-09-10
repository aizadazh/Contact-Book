import ContactReducer from "./ContactReducer";
import { GET_CONTACTS } from "../actions/ActionTypes";


describe("ContactReducer", () => {
    it("should have an initial state", () =>{
        expect(ContactReducer(undefined, { type: 'unexpected' })).toEqual({ contacts: [], contact: {} });
    });

    it("can handle GET_CONTACTS", () => {
        expect(ContactReducer(undefined, {
            type: GET_CONTACTS,            
            payload: { data: [Array] } 
        })).toEqual({
            data: [Array],
        });
    });

});