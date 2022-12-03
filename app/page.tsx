import React from 'react';
import PreviewCard from '@components/PreviewCard';

function Page() {
  return (
    <>
      <div className="flex flex-wrap justify-center [&>div]:mr-6 [&>div]:mt-6 ">
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
