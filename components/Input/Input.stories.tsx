import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { IoSearch } from 'react-icons/io5';
import InputComponent from './index';

export default {
  title: 'Input',
  component: InputComponent,
  argTypes: {
    icon: {
      control: false
    }
  }
} as ComponentMeta<typeof InputComponent>;

export function Input({ ...args }) {
  return (
    <>
      <p className="text-xl">Input field with Icon</p>
      <InputComponent icon={<IoSearch />} {...args} />
      <br />
      <p className="text-xl">Input field without Icon</p>
      <InputComponent {...args} />
    </>
  );
}
