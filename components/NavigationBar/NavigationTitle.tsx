import React from 'react';

interface NavigationTitleProps {
  readonly title: string;
}

function NavigationTitle({ title }: NavigationTitleProps) {
  return <h1 className="text-2xl font-bold font-firamono">{title}</h1>;
}

export default NavigationTitle;
