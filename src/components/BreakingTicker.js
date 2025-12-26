
import { useEffect, useState } from "react";

export default function BreakingTicker({ news }) {
    // If no news, show default static messages
    const defaultHeadlines = [
        "Welcome to Local News India - Your trusted source for regional updates.",
        "Breaking: 5G Services now live in 500+ villages across India.",
        "Weather Alert: Heavy rains predicted in coastal Andhra and Tamil Nadu.",
        "Economy: Sensex touches all-time high amidst global rally.",
        "Sports: India wins cricket series against Australia.",
    ];

    const headlines = news && news.length > 0
        ? news.map(n => n.title)
        : defaultHeadlines;

    // Dynamic Duration Calculation for Constant Speed
    // Formula: (TotalChars * DuplicationFactor) * SecondsPerChar
    const totalLength = headlines.join("").length;
    const duration = Math.max((totalLength * 2) * 0.25, 40); // 0.25s per char, min 40s duration

    return (
        <div className="w-full bg-red-700 text-white overflow-hidden py-2 shadow-md flex items-center relative z-20">
            <div className="bg-red-800 px-4 py-1 font-bold text-xs md:text-sm uppercase tracking-wider absolute left-0 z-10 h-full flex items-center shadow-lg">
                Breaking News
            </div>
            <div
                className="whitespace-nowrap animate-marquee flex gap-10 pl-32 items-center"
                style={{ animationDuration: `${duration}s` }}
            >
                {headlines.map((headline, index) => (
                    <span key={index} className="text-sm font-medium mx-4 inline-flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                        {headline}
                    </span>
                ))}
                {/* Duplicate simply for smooth loop effect */}
                {headlines.map((headline, index) => (
                    <span key={`dup-${index}`} className="text-sm font-medium mx-4 inline-flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                        {headline}
                    </span>
                ))}
            </div>
        </div>
    );
}
