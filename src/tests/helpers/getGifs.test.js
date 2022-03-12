import GetGifs from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {
    test('Debe de traer 4 elementos ', async() => {
       const gifs  = await GetGifs('One Punch'); 
       expect(gifs.length).toBe(4)
    })
    test('Debe de generar un array vacio sin params ', async() => {
        const gifs  = await GetGifs(''); 
        expect(gifs.length).toBe(0)
     })
    
})
