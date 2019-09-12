import React from "react";
import Header from "../components/layout/Header";
import { shallow } from "enzyme";

describe("Header", () => {
    it("should render correctly", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper).toMatchSnapshot();
    });
    it("should render initial layout", () => {
      // when
      const wrapper = shallow(<Header />);
      // then
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });






