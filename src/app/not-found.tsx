'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const NotFound: React.FC = () => {
    const router = useRouter();

    return (
        <div className="text-center mt-12">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
            <button onClick={() => router.push('/')} className="mt-6 inline-block text-blue-500 hover:underline">
                Go back to Home
            </button>
        </div>
    );

}

export default NotFound