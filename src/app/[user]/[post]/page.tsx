'use client';

import React from 'react';
import Tag from '@components/Tag';
import dynamic from 'next/dynamic';
import TOC from '@components/TOC';

const MarkdownViewer = dynamic(() => import('@components/MarkdownViewer'), { ssr: false });
const CONTENT_MOCK = `
# 제목

누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.

대통령은 국민의 보통·평등·직접·비밀선거에 의하여 선출한다. 대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다.

국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다. 제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다.

정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다. 국가안전보장회의는 대통령이 주재한다. 국회의원의 수는 법률로 정하되, 200인 이상으로 한다.

감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그 결과를 보고하여야 한다. 재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다.

## 제목2

### 제목3

[링크는 이렇게 표현합니다.](./)
`;

function Page({ params }: { params: Record<'user' | 'post', string> }) {
  return (
    <>
      <div className="flex mt-28">
        <div className="container lg:w-[48rem] md:w-[32rem] mx-auto ">
          <h1 className="text-5xl font-bold mb-8">블로그 제목입니다.</h1>
          <p>
            <span className="font-bold">{params.user.replace('%40', '')}</span>{' '}
            <span className="text-gray-400">&middot; 1일 전</span>
          </p>
          <div className="flex space-x-4 mt-2">
            <Tag>next.js</Tag>
            <Tag>test</Tag>
          </div>
          <div className="mt-8">
            <MarkdownViewer initialValue={CONTENT_MOCK} />
          </div>
        </div>
        <div className="hidden md:hidden lg:block ">
          <TOC content={CONTENT_MOCK} />
        </div>
      </div>
    </>
  );
}

export default Page;
