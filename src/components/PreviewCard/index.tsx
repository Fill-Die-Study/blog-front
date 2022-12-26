import React, { PropsWithChildren } from 'react';
import { IoHeart } from 'react-icons/io5';

interface PreviewCardProps {
  readonly title: string;
  readonly thumbnail?: JSX.Element;
  readonly date: string;
  readonly author: string;
  readonly replyCount: number;
  readonly likeCount: number;
  readonly profile?: JSX.Element;
}

function PreviewCard({
  title,
  thumbnail,
  date,
  author,
  replyCount,
  likeCount,
  profile,
  children
}: PropsWithChildren<PreviewCardProps>) {
  return (
    <div className="flex flex-col justify-between w-full m-4 transition-transform duration-500 bg-white rounded-lg shadow cursor-pointer md:w-[calc(50%_-_2rem)] lg:w-80 hover:shadow-lg hover:-translate-y-2">
      {thumbnail && <div className="w-full aspect-[23_/_12] [&>*]:w-full">{thumbnail}</div>}
      <div className="flex flex-col justify-between p-4">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm mb-6 h-[3.9375rem] line-clamp-3">{children}</p>
        </div>
        <div className="text-sm text-gray-400">
          <p>
            {date} &middot; {replyCount}개의 댓글
          </p>
        </div>
      </div>
      <div className="flex justify-between px-4 py-4 text-sm border-t-2">
        <div className="flex items-center">
          {profile || <span className="w-6 h-6 rounded-full bg-slate-400" />}&nbsp;
          <span className="text-gray-400">by</span>&nbsp;
          {author}
        </div>
        <span className="flex items-center">
          <IoHeart />
          &nbsp;{likeCount}
        </span>
      </div>
    </div>
  );
}

export default PreviewCard;
