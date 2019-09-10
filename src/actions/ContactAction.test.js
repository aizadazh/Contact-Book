import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { getContacts } from "./ContactAction";

const mockStore = configureMockStore([thunk, promiseMiddleware()]);

describe("CET_CONTACTS", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      contacts: []
    });
  });
  describe("getContacts action creator", () => {
    it("dispatches GET_CONTACTS action and returns data on success", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: [{ id: 1, name: "Vasilis" }]
        })
      );
  
      await store.dispatch(getContacts());
      const actions = store.getActions();
      // [ { type: "GET_CONTACTS_PENDING" },
      //   { type: "GET_CONTACTS_FULFILLED", payload: { data: [Array] } } 
      // ]
  
      expect.assertions(3);
      expect(actions[0].type).toEqual("GET_CONTACTS_PENDING");
      expect(actions[1].type).toEqual("GET_CONTACTS_FULFILLED");
      expect(actions[1].payload.data[0].name).toEqual("Vasilis");
    });
  });
});
