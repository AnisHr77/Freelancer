'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import Footer from './footer';
import React from 'react';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    // Pages that should not have navbar/footer
    const isAuthPage = pathname.startsWith('/auth');

    return (
        <>
            {!isAuthPage && <Navbar />}
            <main>{children}</main>
            {!isAuthPage && <Footer />}
        </>
    );
};

export default LayoutWrapper;
