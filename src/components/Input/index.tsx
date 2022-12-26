import React from 'react';

interface InputProps {
  readonly icon?: JSX.Element;
  readonly placeholder?: string;
  readonly width?: 'normal' | 'long';
}

function Input({ icon: Icon, placeholder = '', width = 'normal' }: InputProps) {
  const widthSize = width === 'normal' ? 'w-48' : 'w-80';
  const inputWidthSize = width === 'normal' ? 'w-40' : 'w-72';

  return (
    <div
      className={`${widthSize} h-10 px-1 py-1 border-gray-200 border-2 flex items-center cursor-text focus-within:border-black`}
    >
      {Icon && Icon}
      <input className={`ml-1 ${inputWidthSize} focus:outline-0 bg-transparent`} placeholder={placeholder} />
    </div>
  );
}

export default Input;
