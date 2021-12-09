import { css } from '@emotion/react';
import React from 'react';

const headerCss = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: green;
`;

const PageHeader = () => {
    return (
        <header css={headerCss}>
            <div>홈버튼</div>
            <div>로그인</div>
        </header>
    );
};

export default PageHeader;
