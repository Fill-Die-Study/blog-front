'use client';

import '@styles/global.css';

import React from 'react';
import NavigationBar from '@components/NavigationBar';
import NavigationTitle from '@components/NavigationBar/NavigationTitle';
import NavigationItemList from '@components/NavigationBar/NavigationItemList';
import { IoSearch, IoSunny } from 'react-icons/io5';
import Button from '@components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const params = pathname?.split('/').slice(1) ?? [];
  const backgroundColor = params[0] ? 'bg-white' : 'bg-slate-50';
  return (
    <html lang="ko">
      <body className={`box-border ${backgroundColor}`}>
        <div className="space-y-6">
          <NavigationBar backgroundClass={backgroundColor}>
            <Link href="/">
              <NavigationTitle title={params[0] || 'blog-front'} />
            </Link>
            <NavigationItemList>
              <IoSunny size={24} />
              <IoSearch size={24} />
              <Button color="black" size="small" isRound>
                로그인
              </Button>
            </NavigationItemList>
          </NavigationBar>
          <div className="container flex justify-center mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
