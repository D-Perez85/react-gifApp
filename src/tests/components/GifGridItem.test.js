import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";
import "@testing-library/jest-dom";

/*1. Mostrar el componente GifGridItem correctamente 
    -shallow
    -wrapper
    -wrapper.toMatchSnapshot(); 
*/

describe("Pruebas en componente GifGridItem", () => {
 
  const title = 'un titulo'; 
  const url = 'una url'; 
  let wrapper = shallow(<GifGridItem title={title} url={url} />);  //WRAPPER GLOBAL

  test("Snapshot de GifGridItem ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el titulo ', () => {
    const p = wrapper.find('p'); 
    expect(p.text().trim()).toBe(title); 
  })
  
  test('La Img deberia de tener una url y un texto alternativo ', () => {
    const img = wrapper.find('img'); 
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })

  test('debe de tener incluido la clase animate__fadeIn', () => {
    const div = wrapper.find('div'); 
    const className = div.prop('className')
    expect(className.includes('animate__fadeIn')).toBe(true)
  })
  
  

});