import React from 'react';
import { ComponentMeta } from '@storybook/react';
import TagComponent from './index';

export default {
  title: 'Tag',
  component: TagComponent,
  args: {
    content: '내용'
  }
} as ComponentMeta<typeof TagComponent>;

export function Tag({ ...args }) {
  return <TagComponent {...args}>{args.content}</TagComponent>;
}
