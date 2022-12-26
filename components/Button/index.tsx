import React, { PropsWithChildren } from 'react';

const ButtonColor = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  white: 'bg-white',
  black: 'bg-black'
};

const ButtonHoverColor = {
  red: 'hover:bg-red-400',
  green: 'hover:bg-green-400',
  blue: 'hover:bg-blue-400',
  yellow: 'hover:bg-yellow-400',
  white: 'hover:bg-gray-200',
  black: 'hover:bg-neutral-700'
};

interface ButtonProps {
  readonly color: keyof typeof ButtonColor;
  readonly size?: 'small' | 'normal';
  readonly isRound?: boolean;
  readonly isDisable?: boolean;
}

function Button({ color, size = 'normal', isDisable, isRound, children }: PropsWithChildren<ButtonProps>) {
  const disableStyle = isDisable ? 'opacity-50 cursor-not-allowed' : '';
  const roundStyle = isRound ? 'rounded-full' : 'rounded-[4px]';
  const textColor = color === 'white' ? 'text-green-500' : 'text-white';
  const sizeStyle = size === 'small' ? 'w-20 h-8 text-base' : 'w-24 h-10 text-lg';

  return (
    <button
      type="button"
      className={`${sizeStyle} ${textColor} font-bold ${ButtonHoverColor[color]} ${roundStyle} ${ButtonColor[color]} ${disableStyle}`}
    >
      {children}
    </button>
  );
}

export default Button;
