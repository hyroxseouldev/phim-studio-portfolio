"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const pathname = usePathname();
  // studio 에서는 가림
  const isStudio = pathname.includes("/studio");
  if (isStudio) return null;

  const navItems = [
    { name: "홈", href: "/", icon: "🏠" },
    { name: "프로젝트", href: "/projects", icon: "📁" },
    { name: "웍스", href: "/works", icon: "🎨" },
    { name: "소셜", href: "/social", icon: "👥" },
    { name: "콘택트", href: "/contact", icon: "📧" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors duration-200 min-w-[60px]",
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <span className="text-lg mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
