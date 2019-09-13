import mockAxios from "axios";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  getContacts,  
  deleteContact,
  addContact
 
 } from "../actions/ContactAction"; 

jest.mock('../store.js');
test('Retrieve transaction data based on a date range', async () => {
 
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore()   
  const mockData = {
    'data': 123,    
  }
  
mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: mockData }),
  )
  const actions = store.getActions();    
  await store.dispatch(getContacts()); 
  expect(actions[0].type).toEqual("GET_CONTACTS");   
  expect(mockAxios.get).toHaveBeenCalledTimes(1);  


mockAxios.delete.mockImplementationOnce(() =>
    Promise.resolve({ data: mockData }),
)
  await store.dispatch(deleteContact()); 
  expect(actions[1].type).toEqual("DELETE_CONTACT");   
  expect(mockAxios.delete).toHaveBeenCalledTimes(1);

mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({ data: mockData }),
)
  await store.dispatch(addContact()); 
  expect(actions[2].type).toEqual("ADD_CONTACT");   
  expect(mockAxios.post).toHaveBeenCalledTimes(1); 

// mockAxios.put.mockImplementationOnce(() =>
//     Promise.resolve({ data: mockData }),
// )
//   await store.dispatch(editContact()); 
//   expect(actions[3].type).toEqual("EDIT_CONTACT");   
//   expect(mockAxios.put).toHaveBeenCalledTimes(1); 

  
});
