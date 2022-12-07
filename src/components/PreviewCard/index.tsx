'use client';

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
    <div className="w-80 h-96 bg-white rounded-lg shadow flex flex-col justify-between cursor-pointer hover:shadow-lg hover:-translate-y-2 transition-transform duration-500">
      {thumbnail ? <div className="w-80 h-40 [&>*]:w-80 [&>*]:h-40">{thumbnail}</div> : <></>}
      <div className="px-4 py-4 h-[50%] flex flex-col justify-between">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{children}</p>
        </div>
        <div className="text-sm text-gray-400">
          <p>
            {date} &middot; {replyCount}개의 댓글
          </p>
        </div>
      </div>
      <div className="px-4 py-4 border-t-2 text-sm flex justify-between">
        <div className="flex items-center">
          {profile || <span className="w-6 h-6 bg-slate-400 rounded-full" />}&nbsp;
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
