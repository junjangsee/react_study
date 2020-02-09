import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'

export default { title: 'Button' }

storiesOf('Button Component', module)
  .add('withText', () => <Button>Hello Button</Button>)
  .add('withEmoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
