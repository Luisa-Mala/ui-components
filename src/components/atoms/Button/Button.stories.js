import React from 'react';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'iol',
    },
  },
};

const template = (args) => <Button {...args} />;

export const ButtonDefault = template.bind({});
ButtonDefault.storyName = 'Button';
