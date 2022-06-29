import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"
jest.mock("../../src/hooks/useFetchGifs")

// import { data } from "../../src/data/data"


describe('GifGrid test', () => {

  const category = 'Rick and Morty'

  test('debe mostrar el loading correctamente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)

    expect(screen.getByText('Cargando...')).toBeTruthy()
    expect(screen.getByText(category)).toBeTruthy()

  })

  test('debe de mostrar items cuando se cargan las imágenes', () => {

    const data = [
      {
        id: '123',
        title: 'Rick and Morty',
        url: 'https://localhost/rick.jpg'
      },
      {
        id: '1234',
        title: 'Rick and Morty 2',
        url: 'https://localhost/rick2.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: data,
      isLoading: false
    })

    render(<GifGrid category={category} />)

    expect(screen.queryByText('Cargando...')).toBeFalsy()
    // expect(screen.getByText('Cargando...'))

    expect(screen.getAllByRole('img').length).toBe(2)

  })


})  