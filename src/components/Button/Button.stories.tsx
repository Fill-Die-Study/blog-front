import React from 'react';
import { ComponentMeta } from '@storybook/react';
import ButtonComponent from './index';

export default {
  title: 'Button',
  component: ButtonComponent,
  args: {
    text: 'Button'
  }
} as ComponentMeta<typeof ButtonComponent>;

export function Button({ ...args }) {
  return (
    <ButtonComponent color="green" {...args}>
      {args.text}
    </ButtonComponent>
  );
}
