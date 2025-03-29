import { Award, Coins, LayoutPanelLeft, QrCode, User } from "lucide-react";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function DashboardLayout() {
    const location = useLocation(); // Get current route

    const tabs = [
        { id: 1, link: "/dashboard", title: "Dashboard", icon: LayoutPanelLeft },
        { id: 2, link: "/dashboard/scan", title: "Scan", icon: QrCode },
        { id: 3, link: "/dashboard/redeem", title: "Redeem", icon: Coins },
        { id: 4, link: "/dashboard/profile", title: "Profile", icon: User },
        { id: 5, link: "/dashboard/rank", title: "Rank", icon: Award },
    ];

    return (
        <div className="min-h-screen md:max-w-6xl p-4 mx-auto">
            <h2 className="text-2xl font-bold">ScanForChange</h2>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/6 bg-gray-100 h-[45vh] p-5 mr-5 mt-5 rounded-sm">
                    <ul>
                        {tabs.map((tab) => (
                            <li key={tab.id} className="mb-5">
                                <Link
                                    to={tab.link}
                                    className={`flex items-center gap-2 p-2 rounded-sm ${
                                        location.pathname === tab.link ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                                    }`}
                                >
                                    <tab.icon className="text-xl" />
                                    <span>{tab.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="grid md:grid-cols-3 mt-5 gap-6 grid-cols-1">
                        <div className="bg-gray-200 rounded-sm p-5">
                            <h2 className="text-sm font-semibold">Total Earned Tokens</h2>
                            <span className="text-xl font-bold">100</span>
                        </div>
                        <div className="bg-gray-200 rounded-sm p-5">
                            <h2 className="text-sm font-semibold">Items Scanned</h2>
                            <span className="text-xl font-bold">100</span>
                        </div>
                        <div className="bg-gray-200 rounded-sm p-5">
                            <h2 className="text-sm font-semibold">Rank</h2>
                            <span className="text-xl font-bold">10</span>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
