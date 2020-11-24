// Button.stories.js

import React from 'react';
import  Button  from './Button';

export default {
  title: 'Components/Button',
  component: Button,
}

export const Primary = () => <Button style="bg-black"  label="Button" text="cool" />;
export const Secondary = () =>  <Button style="bg-red-700 rounded p-8"  label="Button" text="cool" />;

