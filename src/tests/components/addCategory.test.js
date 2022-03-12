import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";
describe("Pruebas en <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    //CON ESTO REINICIO EL WRAPPER EN CADA TEST
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Evaluar los cambios en caja de texto ", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo 01";
    input.simulate("change", {
      target: { value: value },
    });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe de postear la info con submit ", () => {
    const form = wrapper.find("form"); 
    form.simulate("submit", { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled(); 
  });

  test("Pruebas sobre setCategory", () => {
  //01. simular el inputChange
    const value = "Hola Mundo 02";
    const input = wrapper.find("input");
    input.simulate("change",
     { 
         target: { value: value }, 
     });

  //02. simular el submit
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

  //03. setCategories debe de ser llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

  //04. el valor del imput debe de estar ''
    const input2 = wrapper.find('input'); 
    expect(input2.prop("value")).toBe("");
  });
});
