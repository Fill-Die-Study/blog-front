'use client';

import React from 'react';
import useIntersectionObserver from '@hooksuseIntersectionObserver';

interface TOCProps {
  readonly content: string;
  readonly isContentLoaded: boolean;
}

function TOC({ content, isContentLoaded }: TOCProps) {
  const headings = content.split(`\n`).filter((t) => t[0] === '#');
  const currentElementId = useIntersectionObserver(isContentLoaded);
  const tocElements = headings.map((heading) => {
    const title = heading.replace(/#/g, '').trim();
    const tocStyle = (indent: string, currentTitle: string) => {
      return `cursor-pointer hover:text-black ${indent} ${
        currentElementId === currentTitle ? 'text-black text-lg transition-all' : ''
      }`;
    };

    if (heading[2] === '#') {
      return (
        <p key={title} className={tocStyle('indent-4', title)}>
          <a href={`#${title}`}>{title}</a>
        </p>
      );
    }
    if (heading[1] === '#') {
      return (
        <p key={title} className={tocStyle('indent-2', title)}>
          <a href={`#${title}`}>{title}</a>
        </p>
      );
    }
    if (heading[0] === '#') {
      return (
        <p key={title} className={tocStyle('', title)}>
          <a href={`#${title}`}>{title}</a>
        </p>
      );
    }
    return <></>;
  });

  return <div className="fixed border-l-2 pl-2 ml-20 text-gray-400">{tocElements.map((i) => i)}</div>;
}

export default TOC;
