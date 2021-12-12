import React from 'react';
import { css } from '@emotion/react';

const LogoItem = () => {
    return (
        <div
            css={css`
                width: 240px;
                height: 240px;
                overflow: hidden;
            `}
        >
            <img
                src="https://img.hankyung.com/photo/201808/03.17543429.1.jpg"
                alt="logo"
                css={css`
                    width: 240px;
                    max-width: 100%;
                    height: auto;

                    &:hover {
                        transform: scale(1.05);
                        transition: transform 0.5s ease;
                    }
                `}
            />
        </div>
    );
};

export default LogoItem;
