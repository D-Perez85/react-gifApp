import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");
/*1. Mostrar el componente GifGrid correctamente 
    -shallow
    -wrapper
    -wrapper.toMatchSnapshot(); 
*/

describe("Pruebas en  <GifGrid/>", () => {
  useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
  });

  const category = "One Punch";
  let wrapper = shallow(<GifGrid category={category} />);
  test("Snapshot de GifGrid ", () => {
    expect(wrapper).toMatchSnapshot();
  });


  test("Debe de mostrar items cuando se cargan imagenes UseFetch", () => {
    const gifs = [
      {
        id: "ABC",
        url: "Cualquier URL",
        title: "Cualquier Title",
      },
      {
        id: "ABd",
        url: "Cualquier URL",
        title: "Cualquier Title",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    let wrapper = shallow(<GifGrid category={category} />);

    const p = wrapper.find('p'); 
    expect(wrapper).toMatchSnapshot(); 
    expect(p.exists()).toBe(false); 
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length); 

  });
});
