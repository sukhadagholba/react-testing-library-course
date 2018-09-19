import React from 'react'
import ReactDOM from 'react-dom'
import 'jest-dom/extend-expect'

import {FavoriteNumber} from '../favorite-number'

it('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)

  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')

  //expect(div.querySelector('input').type).toBe('number');
  //expect(div.querySelector('label').textContent).toBe('Favorite Number');
})
