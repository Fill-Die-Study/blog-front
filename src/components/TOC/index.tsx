'use client';

import React from 'react';

interface TOCProps {
  readonly content: string;
}

function TOC({ content }: TOCProps) {
  const headings = content.split(`\n`).filter((t) => t[0] === '#');
  const tocElements = headings.map((heading) => {
    const title = heading.replace(/#/g, '').trim();
    if (heading[2] === '#') {
      return (
        <p key={title} className="cursor-pointer hover:text-black indent-4">
          {title}
        </p>
      );
    }
    if (heading[1] === '#') {
      return (
        <p key={title} className="cursor-pointer hover:text-black indent-2">
          {title}
        </p>
      );
    }
    if (heading[0] === '#') {
      return (
        <p key={title} className="cursor-pointer hover:text-black">
          {title}
        </p>
      );
    }
    return <></>;
  });

  return <div className="fixed border-l-2 pl-2 ml-20 text-gray-400">{tocElements.map((i) => i)}</div>;
}

export default TOC;
