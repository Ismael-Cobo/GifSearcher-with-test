import { render, screen, fireEvent, waitForElementToBeRemoved, waitFor } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('GifExpertApp test', () => {

  test('debe devolver el título de la categoria y un array de al menos 1 imagen', async () => {

    render(<GifExpertApp />)

    await waitForElementToBeRemoved(screen.queryByText('Cargando...'))

    expect(screen.getByText('One Punch')).toBeTruthy()
    expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
  })

  test('debe de mostrar los 2 titulos al hacer submit', () => {

    render(<GifExpertApp />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: 'Saitama' } })

    fireEvent.submit(form)

    expect(screen.getByText('One Punch')).toBeTruthy()
    expect(screen.getByText('Saitama')).toBeTruthy()

  })

  test('debe de mostrar 1 titulos al hacer submit con la misma categoria', async () => {

    render(<GifExpertApp />)

    await waitForElementToBeRemoved(screen.queryByText('Cargando...'))

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: 'One Punch' } })

    fireEvent.submit(form)

    expect(screen.getAllByText('One Punch').length).toBe(1)
  })


})