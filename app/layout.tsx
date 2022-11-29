import './styles/global.css';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="box-border">{children}</body>
    </html>
  );
}

export default Layout;
