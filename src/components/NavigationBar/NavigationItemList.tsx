'use client';

import React, { PropsWithChildren } from 'react';

function NavigationItemList({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-4">{children}</div>;
}

export default NavigationItemList;
