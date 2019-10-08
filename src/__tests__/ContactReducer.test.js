import ContactReducer from "../reducers/ContactReducer";
import GET_CONTACTS from "../actions/ActionTypes";
import GET_CONTACT from "../actions/ActionTypes";
import ADD_CONTACT from "../actions/ActionTypes";
import DELETE_CONTACT from "../actions/ActionTypes";
import EDIT_CONTACT from "../actions/ActionTypes";

describe("ContactReducer", () => {
    test("should have an initial state", () =>{
        expect(ContactReducer(undefined, {})).toEqual({ contacts: [],
            contact: {} });
    });

    test("can handle GET_CONTACTS", () => {
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
    test('can handle GET_CONTACT', ()=> {
        expect(ContactReducer(undefined, {
            type:GET_CONTACT,
            contacts: [],
            contact: {},
        })).toEqual(
            {     
                contacts: [],      
                contact: {},
            }
        )
    })
    test('can handle ADD_CONTACT', () => {
        expect(ContactReducer(undefined,{
            type: ADD_CONTACT,
            contacts: [],
            contact: {},
        })).toEqual(
            {
                contacts: [],      
                contact: {},
            }
        )
    })
    test('can handle DELETE_CONTACT', () => {
        expect(ContactReducer(undefined,{
            type: DELETE_CONTACT,
            contacts: [],
            contact: {},
        })).toEqual(
            {
                contacts: [],      
                contact: {},
            }
        )
    })
    test('can handle EDIT_CONTACT', () => {
        expect(ContactReducer(undefined,{
            type: EDIT_CONTACT,
            contacts: [],
            contact: {},
        })).toEqual(
            {
                contacts: [],      
                contact: {},
            }
        )
    })
   

});