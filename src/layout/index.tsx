import PageHeader from '@components/PageHeader';
import React from 'react';
import GlobalStyle from '@style/GlobalStyle';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <PageHeader />
            <main>{children}</main>
        </>
    );
};

export default Layout;
