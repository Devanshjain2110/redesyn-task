import React from 'react';

import { cn } from '@/lib/utils';

type MaxWidthWrapperProps = {
    children: React.ReactNode;
    className?: string;
};

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
    return (
        <div className={cn(`max-w-[450px] mx-auto w-full`, className)}>
            {children}
        </div>
    );
};
export default MaxWidthWrapper;