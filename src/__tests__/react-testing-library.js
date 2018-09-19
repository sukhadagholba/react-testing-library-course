import 'jest-dom/extend-expect'
import React from 'react'
import {render} from 'react-testing-library'

import {FavoriteNumber} from '../favorite-number'

it('renders a number input with a label "Favorite Number"', () => {
  const {getByLabelText} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
