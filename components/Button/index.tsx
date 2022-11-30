'use client';

import React, { PropsWithChildren } from 'react';

const ButtonColor = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  white: 'bg-white'
};

const ButtonHoverColor = {
  red: 'hover:bg-red-400',
  green: 'hover:bg-green-400',
  blue: 'hover:bg-blue-400',
  yellow: 'hover:bg-yellow-400',
  white: 'hover:bg-gray-200'
};

interface ButtonProps {
  readonly color: keyof typeof ButtonColor;
  readonly isRound?: boolean;
  readonly isDisable?: boolean;
}

function Button({ color, isDisable, isRound, children }: PropsWithChildren<ButtonProps>) {
  const disableStyle = isDisable ? 'opacity-50 cursor-not-allowed' : '';
  const roundStyle = isRound ? 'rounded-full' : 'rounded-[4px]';
  const textColor = color === 'white' ? 'text-green-500' : 'text-white';

  return (
    <button
      type="button"
      className={`w-24 h-10 ${textColor} text-lg font-bold ${ButtonHoverColor[color]} ${roundStyle} ${ButtonColor[color]} ${disableStyle}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  isDisable: false,
  isRound: false
};

export default Button;
