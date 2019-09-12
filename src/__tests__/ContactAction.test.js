import mockAxios from "axios";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getContacts } from "../actions/ContactAction"; 

jest.mock('../store.js');
test('Retrieve transaction data based on a date range', async () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore()
  const mockData = {
    'data': 123
  }

mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: mockData }),
  )
  const actions = store.getActions();    
  await store.dispatch(getContacts()); 
  expect(actions[0].type).toEqual("GET_CONTACTS");   
  expect(mockAxios.get).toHaveBeenCalledTimes(1);  
});
