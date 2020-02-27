import { configure } from '@storybook/react'

// ../src/design-systems/*.stories.js

configure(
  require.context('../src/design-systems', true, /\.stories\.js$/),
  module,
)
