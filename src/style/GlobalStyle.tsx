import React from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const defaultStyle = css`
    ${emotionReset}

    *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }

    body {
        /* font */
        font-family: 'Noto Sans KR', serif;
    }
`;

const GlobalStyle: React.FC = () => {
    return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
