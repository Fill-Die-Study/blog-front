import React from 'react';
import Button from '@components/Button';
import Input from '@components/Input';
import { IoSearch } from 'react-icons/io5';
import PreviewCard from '@components/PreviewCard';

function Page() {
  return (
    <>
      <Button color="green">테스트</Button>
      <Input icon={<IoSearch size={18} />} width="long" placeholder="검색어를 입력하세요." />
      <div className="flex flex-wrap">
        <PreviewCard
          title="제목"
          author="admin"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
        >
          간단한 설명
        </PreviewCard>
        <PreviewCard
          title="제목"
          thumbnail={<div />}
          author="admin"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
        >
          썸네일이 있는 글
        </PreviewCard>
      </div>
    </>
  );
}

export default Page;
