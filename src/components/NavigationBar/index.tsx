'use client';

import React, { PropsWithChildren } from 'react';

interface NavigationBarProps {
  readonly backgroundClass?: string;
}

function NavigationBar({ children, backgroundClass = 'bg-slate-50' }: PropsWithChildren<NavigationBarProps>) {
  return (
    <div className={`w-full h-14 flex items-center ${backgroundClass}`}>
      <div className="container flex items-center justify-between mx-auto">{children}</div>
    </div>
  );
}

export default NavigationBar;
