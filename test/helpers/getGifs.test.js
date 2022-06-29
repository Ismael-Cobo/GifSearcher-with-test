import { getGifs } from "../../src/helpers/getGifs"

describe('getGifs Test', () => { 
  
  test('debe de devolver un array de gifs ', async () => {

    const gifs = await getGifs('saitama')

    expect( gifs.length ).toBeGreaterThanOrEqual(0)
    expect( gifs.length ).toBeLessThanOrEqual(10)
    expect( gifs[0] ).toStrictEqual({
      id: expect.any( String),
      title: expect.any( String),
      url: expect.any( String)
    })

  })
 })