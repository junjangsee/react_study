import { configure } from '@storybook/react'

// ../src/design-system/*.stories.js

configure(
  require.context('../src/design-systems', true, /\.stories\.js$/),
  module,
)
