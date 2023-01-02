'use client';

import '@toast-ui/editor/dist/toastui-editor.css';

import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import { HeadingMdNode } from '@toast-ui/editor';

interface MarkdownViewerProps {
  readonly initialValue?: string;
  readonly setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function MarkdownViewer({ initialValue = '', setLoading }: MarkdownViewerProps) {
  return (
    <Viewer
      initialValue={initialValue}
      onLoad={() => setLoading(true)}
      customHTMLRenderer={{
        heading: (_node, context) => {
          const node = _node as HeadingMdNode;
          return {
            type: context.entering ? 'openTag' : 'closeTag',
            tagName: `h${node.level}`,
            attributes: { id: context.getChildrenText(node) }
          };
        }
      }}
    />
  );
}

export default MarkdownViewer;
