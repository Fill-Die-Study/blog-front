import React, { PropsWithChildren } from 'react';

function Tag({ children }: PropsWithChildren) {
  return (
    <div className="w-fit bg-gray-100 text-green-500 rounded-full px-3 py-1 text-md hover:bg-gray-50 hover:text-green-400 cursor-pointer">
      {children}
    </div>
  );
}

export default Tag;
