import React, { useState, useEffect } from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        if (isMobile) setSidebarOpen(false);
    };

    return (
        <div>
            <TopNav toggleSidebar={toggleSidebar} isMobile={isMobile} />

            <div style={{ display: "flex", position: "relative" }}>
                {isMobile && sidebarOpen && (
                    <div
                        onClick={closeSidebar}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(0,0,0,0.3)",
                            zIndex: 9,
                        }}
                    />
                )}

                <SideNav isOpen={sidebarOpen} isMobile={isMobile} />

                <div
                    style={{
                        flex: 1,
                        padding: "20px",
                        minHeight: "calc(100vh - 60px)",
                    }}
                >
                    {children}
                </div>
            </div>

        </div>
    );
}
