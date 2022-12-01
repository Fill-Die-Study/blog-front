import React from 'react';
import Button from '@components/Button';
import Input from '@components/Input';
import { IoSearch } from 'react-icons/io5';

function Page() {
  return (
    <>
      <Button color="green">테스트</Button>
      <Input icon={<IoSearch size={18} />} width="long" placeholder="검색어를 입력하세요." />
    </>
  );
}

export default Page;
