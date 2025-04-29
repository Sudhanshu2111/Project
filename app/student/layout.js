import React from 'react';
import Sidebar from '@/components/Navigation/Sidebar';
import StudentDashboard from '@/components/student/StudentDashboard';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <StudentDashboard children={children} />
        </div>
    );
};

export default Layout;