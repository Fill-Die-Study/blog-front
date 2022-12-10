import React from 'react';
import { ComponentMeta } from '@storybook/react';
import PreviewCardComponent from './index';

export default {
  title: 'PreviewCard',
  component: PreviewCardComponent,
  args: {
    content: '내용'
  },
  argTypes: {
    thumbnail: {
      control: false
    },
    profile: {
      control: false
    }
  }
} as ComponentMeta<typeof PreviewCardComponent>;

export function PreviewCard({ ...args }) {
  return (
    <div className="flex space-x-4">
      <div>
        <p className="text-xl">PreviewCard with thumbnail</p>
        <PreviewCardComponent
          title="제목"
          author="글쓴이"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
          thumbnail={<img src="https://via.placeholder.com/320x160/000000" alt="썸네일" />}
          {...args}
        >
          {args.content}
        </PreviewCardComponent>
      </div>

      <div>
        <p className="text-xl">PreviewCard without thumbnail</p>
        <PreviewCardComponent
          title="제목"
          author="글쓴이"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
          {...args}
        >
          {args.content}
        </PreviewCardComponent>
      </div>
    </div>
  );
}
