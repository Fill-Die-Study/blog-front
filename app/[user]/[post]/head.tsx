import React from 'react';

function Head({ params }: { params: Record<'user' | 'post', string> }) {
  return (
    <>
      <title>{params.post}</title>
    </>
  );
}

export default Head;
