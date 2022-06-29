import { render, screen } from "@testing-library/react"

import { GifItem } from "../../src/components/GifItem"

describe('GifItem tets', () => {

  const title = 'Saitama'
  const url = 'https://giphy.com/gifs/rick-and-morty-dance-e6tJpLvjY8jXa'


  test('debe de hacer match con el snapshot', () => {

    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()

  })

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

    render(<GifItem title={title} url={url} />)

    const { src, alt } = screen.getByRole('img')

    expect(src).toBe(url)
    expect(alt).toBe(title)

  })

  test('debe de mostrar el texto indicado', () => {
    render(<GifItem title={title} url={url} />)

    expect(screen.getByText(title)).toBeTruthy()

  })


})