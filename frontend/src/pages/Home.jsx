import React from "react"
import { Link } from "react-router-dom"
import { QrCode } from "lucide-react";
export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="flex md:max-w-6xl w-full justify-between p-4 mx-auto">
                <h2 className="text-2xl text-center font-bold">ScanForChange</h2>
                <div className="flex gap-3">
                    <Link
                        to="/login"
                        className="inline-flex items-center px-6 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="inline-flex items-center px-6 py-2 border-1 border-green-600 text-green-600 rounded-md font-semibold hover:bg-green-50 transition-colors"
                    >
                        Register
                    </Link>
                </div>
            </div>
            <div className="relative overflow-hidden py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                            Turn Your Recycling Into
                            <span className="text-green-600 block">Rewards</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join our community of eco-warriors making a difference. Scan, recycle, and earn rewards while helping to protect our planet.
                        </p>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <QrCode className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Scan & Earn</h3>
                            <p className="text-gray-600">
                                Scan QR codes on recyclable items to earn points and track your impact
                            </p>
                        </div>
                        <Link
                            to="/scan"
                            className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-colors"
                        >
                            Start Scanning
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}