import 'jest-dom/extend-expect'
import React from 'react'
import ReactDOM from 'react-dom'
import {getQueriesForElement} from 'dom-testing-library'
import {FavoriteNumber} from '../favorite-number'

it('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)

  const components = getQueriesForElement(div)
  expect(components.getByLabelText('Favorite Number')).toHaveAttribute(
    'type',
    'number',
  )
})
