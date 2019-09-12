import ContactReducer from "../reducers/ContactReducer";
import GET_CONTACTS from "../actions/ActionTypes";



describe("ContactReducer", () => {
    it("should have an initial state", () =>{
        expect(ContactReducer(undefined, {})).toEqual({ contacts: [],
            contact: {} });
    });

    it("can handle GET_CONTACTS", () => {
        expect(ContactReducer(undefined, {
            type: GET_CONTACTS,            
            contacts: [],
            contact: {},
        })).toEqual(
            {
                contacts: [],
                contact: {},
            },
          
        );
    });

});