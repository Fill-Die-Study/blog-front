import '@styles/global.css';
import React from 'react';
import NavigationBar from '@components/NavigationBar';
import NavigationTitle from '@components/NavigationBar/NavigationTitle';
import NavigationItemList from '@components/NavigationBar/NavigationItemList';
import { IoSearch, IoSunny } from 'react-icons/io5';
import Button from '@components/Button';
import Link from 'next/dist/client/link';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="box-border bg-slate-50">
        <div className="space-y-6">
          <NavigationBar>
            <Link href="/">
              <NavigationTitle title="Blog-Front" />
            </Link>
            <NavigationItemList>
              <IoSunny size={24} />
              <IoSearch size={24} />
              <Button color="black" size="small" isRound>
                로그인
              </Button>
            </NavigationItemList>
          </NavigationBar>
          <div className="container mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}

export default Layout;
