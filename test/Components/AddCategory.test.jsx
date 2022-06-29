import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('AddCategory test', () => {

  test('debe de cambiar el value del input', () => {

    render(<AddCategory onNewCategory={() => { }} />)

    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Saitama' } })

    expect(input.value).toBe('Saitama')

  })


  describe('hacer submit al formulario', () => {

    const defaultValue = 'Saitama'
    const onNewCategory = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('debe de llamar a la función onNewCategory', () => {

      render(<AddCategory onNewCategory={onNewCategory} />)
      const input = screen.getByRole('textbox')
      const form = screen.getByRole('form')

      fireEvent.input(input, { target: { value: defaultValue } })
      fireEvent.submit(form)

      expect(input.value).toBe('')
      expect(onNewCategory).toHaveBeenCalledTimes(1)
      expect(onNewCategory).toHaveBeenCalledWith(defaultValue)
    })

    test('no debe de llamar a la función onNewCategory', () => {

      render(<AddCategory onNewCategory={onNewCategory} />)
      const input = screen.getByRole('textbox')
      const form = screen.getByRole('form')

      fireEvent.input(input, { target: { value: '' } })
      fireEvent.submit(form)

      expect(input.value).toBe('')
      expect(onNewCategory).not.toHaveBeenCalled()
    })

  })

})