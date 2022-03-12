import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";
import "@testing-library/jest-dom";

/*
    1. Mostrar el componente GifGrid correctamente:  
    -shallow - wrapper - wrapper.toMatchSnapshot(); 
*/

describe("Pruebas en  <GifExpertApp/>", () => {
  let wrapper = shallow(<GifExpertApp />);
  test("Snapshot de GifExpertApp ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test("debe de mostrar una lista de categorias", () => {
  //   const categories = ["One Punch", "Dragon Ball"];
  //   const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

  //   expect(wrapper).toMatchSnapshot();
  //   expect(wrapper.find('GifGrid').length).toBe( categories.length);
  // });
});
