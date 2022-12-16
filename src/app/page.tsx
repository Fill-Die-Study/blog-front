import React, { useMemo } from 'react';
import PreviewCard from '@components/PreviewCard';

function Page() {
  return (
    <>
      <div className="flex flex-wrap -m-4">
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
          author="admin"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
        >
          간단한 설명
        </PreviewCard>
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
          author="admin"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
        >
          간단한 설명
        </PreviewCard>
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
          thumbnail={<img src="https://via.placeholder.com/3200x1600/000000" alt="테스트" />}
          author="admin"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
        >
          썸네일이 있는 글
        </PreviewCard>
        <PreviewCard
          title="제목"
          thumbnail={<img src="https://via.placeholder.com/320x160/000000" alt="테스트" />}
          author="admin"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
        >
          썸네일이 있는 글
        </PreviewCard>
        <PreviewCard
          title="제목"
          thumbnail={<img src="https://via.placeholder.com/320x160/000000" alt="테스트" />}
          author="admin"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
        >
          썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이
          있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글
          썸네일이 있는 글 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글 썸네일이 있는 글
          썸네일이 있는 글 썸네일이 있는 글
        </PreviewCard>
        <PreviewCard
          title="제목"
          thumbnail={<img src="https://via.placeholder.com/320x160/000000" alt="테스트" />}
          author="admin"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
        >
          썸네일이 있는 글
        </PreviewCard>
        <PreviewCard
          title="제목"
          thumbnail={<img src="https://via.placeholder.com/320x160/000000" alt="테스트" />}
          author="admin"
          date={new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date())}
          likeCount={10}
          replyCount={10}
        >
          썸네일이 있는 글
        </PreviewCard>
        <PreviewCard
          title="제목"
          thumbnail={<img src="https://via.placeholder.com/320x160/000000" alt="테스트" />}
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
