import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, Calendar, Megaphone, Image, Settings,
  GraduationCap, ChevronLeft, ChevronRight, LogOut, UserCircle, Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Students", icon: Users, href: "/dashboard/students" },
  { label: "My Profile", icon: UserCircle, href: "/dashboard/profile" },
  { label: "Events", icon: Calendar, href: "/dashboard/events" },
  { label: "Announcements", icon: Megaphone, href: "/dashboard/announcements" },
  { label: "Gallery", icon: Image, href: "/dashboard/gallery" },
  { label: "Admin Panel", icon: Shield, href: "/dashboard/admin" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 bottom-0 z-40 flex flex-col gradient-navy transition-all duration-300 border-r border-sidebar-border",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 h-16 border-b border-sidebar-border">
          <GraduationCap className="h-7 w-7 text-gold flex-shrink-0" />
          {!collapsed && (
            <span className="font-display text-lg font-bold text-gold-light whitespace-nowrap">
              Hikma
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
          {menuItems.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  active
                    ? "bg-sidebar-accent text-gold"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-3">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Sign Out</span>}
          </Link>
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-navy border border-sidebar-border flex items-center justify-center text-sidebar-foreground hover:text-gold transition-colors"
        >
          {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
        </button>
      </aside>

      {/* Main content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300 min-h-screen bg-background",
          collapsed ? "ml-16" : "ml-64"
        )}
      >
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
