'use client';

import '@toast-ui/editor/dist/toastui-editor.css';

import React from 'react';
import { Viewer } from '@toast-ui/react-editor';

interface MarkdownViewerProps {
  readonly initialValue?: string;
}

function MarkdownViewer({ initialValue = '' }: MarkdownViewerProps) {
  return <Viewer initialValue={initialValue} />;
}

export default MarkdownViewer;
