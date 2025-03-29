import React from "react";

export default function Dashboard() {
    return (
        <div>
            <h2 className="text-2xl font-bold mt-10 mb-5">Recent Activity</h2>
            <div className="grid md:grid-cols-1 gap-6 grid-col-1">
                <div className="bg-gray-200 rounded-sm p-5">
                    <h2 className="text-sm font-semibold">Item Name</h2>
                    <span className="text-xl font-bold">Token 1</span>
                </div>
                <div className="bg-gray-200 rounded-sm p-5">
                    <h2 className="text-sm font-semibold">Item Name</h2>
                    <span className="text-xl font-bold">Token 2</span>
                </div>
                <div className="bg-gray-200 rounded-sm p-5">
                    <h2 className="text-sm font-semibold">Item Name</h2>
                    <span className="text-xl font-bold">Token 3</span>

                </div>
            </div>
        </div>
    )
}