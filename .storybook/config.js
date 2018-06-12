import { configure, addDecorator } from '@storybook/react';

import { backgrounds, StoryWrapper } from './decorators'
import './styles.scss'
import '../node_modules/@masterclass/mastersass/src/masterSass.scss'

// load global decorators
addDecorator(backgrounds)
addDecorator(StoryWrapper)

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
