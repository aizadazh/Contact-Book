import {
    GET_CONTACTS,
    GET_CONTACT,
    DELETE_CONTACT,
    ADD_CONTACT,
    EDIT_CONTACT,
} from "../actions/ActionTypes";

const initialState = {
    contacts: [],
    contact: {},
};
export default function (state=initialState, action) {
    switch (action.type){
        case GET_CONTACTS:
            return { ...state, contacts: action.payload };
        case GET_CONTACT:
            return { ...state, contact: action.payload }; 
        case ADD_CONTACT: {
            return { ...state, contacts: [ ...state.contacts, action.payload ] };            
        } 
        case EDIT_CONTACT: {
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    if(contact.id === action.payload.id) return action.payload;
                    else return contact;
                }),
            };
        }
        case DELETE_CONTACT: {
            return {
              ...state,
              contacts: state.contacts.filter(
                contact => contact.id !== action.payload,
              ),
            };
          }
          default:
            return state;
        }
      }
