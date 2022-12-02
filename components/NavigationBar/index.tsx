'use client';

import React, { PropsWithChildren } from 'react';

function NavigationBar({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-12 bg-gray-100 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-10">{children}</div>
    </div>
  );
}

export default NavigationBar;
