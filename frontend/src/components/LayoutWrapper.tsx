'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import Footer from './footer';
import React from 'react';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    // Pages that should not have navbar/footer
    const isAuthPage = pathname.startsWith('/auth');
    const isDashboardPage = pathname.startsWith('/dashboard');

    return (
        <>
            {!isAuthPage && !isDashboardPage && <Navbar />}
            <main>{children}</main>
            {!isAuthPage && !isDashboardPage && <Footer />}
        </>
    );
};

export default LayoutWrapper;
