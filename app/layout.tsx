import '@styles/global.css';
import React from 'react';
import NavigationBar from '@components/NavigationBar';
import NavigationTitle from '@components/NavigationBar/NavigationTitle';
import NavigationItemList from '@components/NavigationBar/NavigationItemList';
import { IoSearch, IoSunny } from 'react-icons/io5';
import Button from '@components/Button';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="box-border bg-slate-50">
        <NavigationBar>
          <NavigationTitle title="Blog" />
          <NavigationItemList>
            <IoSunny size={24} />
            <IoSearch size={24} />
            <Button color="black" className="w-20 h-8 text-base" isRound>
              로그인
            </Button>
          </NavigationItemList>
        </NavigationBar>
        {children}
      </body>
    </html>
  );
}

export default Layout;
