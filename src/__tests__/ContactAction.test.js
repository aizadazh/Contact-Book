import mockAxios from "axios";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getContacts, getContact, deleteContact, addContact } from "../actions/ContactAction"; 
import { GET_CONTACTS, GET_CONTACT, DELETE_CONTACT, ADD_CONTACT } from "../actions/ActionTypes";


jest.mock('../store.js');
test('getContacts', async () => { 
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore()   
  const mockData = {
    'data': 123,    
  }  
mockAxios.get.mockResolvedValue({ data: mockData })  
  const expectedActions = [    
    { type: GET_CONTACTS, payload: mockData },    
   
  ]      
  await store.dispatch(getContacts()); 
  expect(store.getActions()).toEqual(expectedActions)  
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
})
test('getContact', async () => { 
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore()   
  const mockData = {
    'data': 789,    
  }
mockAxios.get.mockResolvedValue({ data: mockData })  
  const expectedActions1 = [  
    { type: GET_CONTACT, payload: mockData },
  ]
    await store.dispatch(getContact());
    expect(store.getActions()).toEqual(expectedActions1)
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
  });
test('deleteContact', async () => { 
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore()   
  const mockData = {
    'data': 345,    
  }
mockAxios.delete.mockResolvedValue({ data: mockData })
  const expectedActions2 = [
    { type: DELETE_CONTACT, payload: undefined },
  ]
 
  await store.dispatch(deleteContact()); 
  expect(store.getActions()).toEqual(expectedActions2);   
  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
})
test('addContact', async () => { 
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore()   
  const mockData = {
    'data': 321,    
  }

mockAxios.post.mockResolvedValue({ data: mockData })
  const expectedActions3 = [
    { type: ADD_CONTACT, payload: mockData },  
  ]
  await store.dispatch(addContact()); 
  expect(store.getActions()).toEqual(expectedActions3);   
  expect(mockAxios.post).toHaveBeenCalledTimes(1); 
})

// test('editContact', async () => { 
//   const middlewares = [thunk]
//   const mockStore = configureMockStore(middlewares)
//   const store = mockStore()   
//   const mockData = {
//     'data': 321,    
//   }
//   const props = { id: 1 }
//   const expectedActions4 = [
//     { type: EDIT_CONTACT, payload: mockData }, 
//   ]
// mockAxios.put.mockResolvedValue({ data: mockData })
//   await store.dispatch(editContact()); 
//   expect(store.getActions()).toEqual(expectedActions4(props));   
//   expect(mockAxios.put).toHaveBeenCalledTimes(1); 
// })