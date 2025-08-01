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
    const isBlogPage = pathname.startsWith('/Blog');

    return (
        <>
            {!isAuthPage && !isDashboardPage && !isBlogPage && <Navbar />}
            <main>{children}</main>
            {!isAuthPage && !isDashboardPage && !isBlogPage && <Footer />}
        </>
    );
};

export default LayoutWrapper;
