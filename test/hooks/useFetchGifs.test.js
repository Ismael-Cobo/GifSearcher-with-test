import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('useFetchGifs test', () => { 
  
  const category = 'Morty'

  test('debe de devolver los valores por defecto', () => { 
    
    const { result } = renderHook( () =>useFetchGifs(category) )

    expect(result.current).toStrictEqual({
      images: [],
      isLoading: true
    })
   })

   test('debe de devolver un array de imagenes y el isLoading en false', async() => { 
    
    const { result } = renderHook(useFetchGifs)

    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0)
      expect(isLoading).toBeFalsy()
    })

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
   })



 })