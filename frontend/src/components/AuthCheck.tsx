// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// export default function AuthCheck() {
//     const router = useRouter();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (!token) return;

//         axios.get('http://localhost:8001/user', {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         })
//             .then(response => {
//                 if (response.status === 200) {
//                     router.push('/home'); // ✅ Redirect if user is authenticated
//                 }
//             })
//             .catch(error => {
//                 console.error('Auth check failed:', error); // stay on landing page
//             });
//     }, []);

//     return null;
// }


'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function AuthCheck() {
    const router = useRouter();

    useEffect(() => {
        axios.get('http://localhost:8001/user', {
            withCredentials: true,
        })
        .then(res => {
            if (res.status === 200) {
                router.push('/home');
            }
        })
        .catch(() => {
        
        });
    }, []);

    return null;
}
