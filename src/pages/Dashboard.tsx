import DashboardLayout from "@/components/DashboardLayout";
import { Users, UserCheck, Shield, TrendingUp, Calendar, Megaphone } from "lucide-react";

const stats = [
  { label: "Total Students", value: "512", icon: Users, change: "+12 this month" },
  { label: "Active Students", value: "478", icon: UserCheck, change: "93% active" },
  { label: "Committee Members", value: "24", icon: Shield, change: "Across 6 roles" },
  { label: "Upcoming Events", value: "5", icon: Calendar, change: "Next: March 15" },
];

const recentActivity = [
  { text: "Ahmed Ibrahim registered as a new member", time: "2 hours ago" },
  { text: "Annual General Meeting event created", time: "5 hours ago" },
  { text: "3 new student profiles approved", time: "1 day ago" },
  { text: "Committee roles updated for 2026 session", time: "2 days ago" },
  { text: "New announcement posted: Registration Open", time: "3 days ago" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card rounded-lg p-5 border border-border shadow-sm hover-scale"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold font-display text-foreground mt-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-navy" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-lg border border-border shadow-sm p-6">
        <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-gold-dark" />
          Recent Activity
        </h2>
        <div className="space-y-3">
          {recentActivity.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 border-b border-border last:border-0"
            >
              <p className="text-sm text-foreground">{item.text}</p>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
