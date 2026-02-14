import DashboardLayout from "@/components/DashboardLayout";
import { Users, UserCheck, Shield, AlertTriangle, Plus, Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Total Students", value: "512", icon: Users },
  { label: "Active", value: "478", icon: UserCheck },
  { label: "Committee", value: "24", icon: Shield },
  { label: "Pending", value: "10", icon: AlertTriangle },
];

const recentStudents = [
  { name: "Aman", email: "aman@hikma.edu", role: "Committee Admin", status: "active" },
  { name: "Nihal", email: "nihal@hikma.edu", role: "Student", status: "active" },
  { name: "Rayyan", email: "rayyan@hikma.edu", role: "Student", status: "active" },
  { name: "Yaseen", email: "yaseen@hikma.edu", role: "Student", status: "active" },
  { name: "Nahash", email: "nahash@hikma.edu", role: "Student", status: "active" },
  { name: "Nadih", email: "nadih@hikma.edu", role: "Student", status: "active" },
  { name: "Shadi", email: "shadi@hikma.edu", role: "Student", status: "active" },
  { name: "Anas", email: "anas@hikma.edu", role: "Student", status: "active" },
  { name: "Ameen", email: "ameen@hikma.edu", role: "Student", status: "active" },
  { name: "Khaleel", email: "khaleel@hikma.edu", role: "Student", status: "active" },
  { name: "Shehin", email: "shehin@hikma.edu", role: "Student", status: "active" },
  { name: "Anzil", email: "anzil@hikma.edu", role: "Student", status: "active" },
  { name: "Fawaz", email: "fawaz@hikma.edu", role: "Student", status: "active" },
  { name: "Midlaj", email: "midlaj@hikma.edu", role: "Student", status: "active" },
  { name: "Ziyad", email: "ziyad@hikma.edu", role: "Student", status: "active" },
  { name: "Ashkar", email: "ashkar@hikma.edu", role: "Student", status: "active" },
  { name: "Munfis", email: "munfis@hikma.edu", role: "Student", status: "active" },
  { name: "Hisham", email: "hisham@hikma.edu", role: "Student", status: "active" },
  { name: "Razi", email: "razi@hikma.edu", role: "Student", status: "active" },
  { name: "Bishr", email: "bishr@hikma.edu", role: "Student", status: "active" },
];

const AdminPanel = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Admin Panel</h1>
          <p className="text-muted-foreground mt-1">Manage students, roles, and union settings.</p>
        </div>
        <Button className="bg-gold text-navy hover:bg-gold-dark">
          <Plus className="h-4 w-4 mr-2" /> Add Student
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-lg border border-border p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-navy" />
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Student Table */}
      <div className="bg-card rounded-lg border border-border shadow-sm">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-foreground">Students</h2>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search students..." className="pl-10 h-9" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden sm:table-cell">Email</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Role</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((s) => (
                <tr key={s.email} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium text-foreground">{s.name}</td>
                  <td className="py-3 px-4 text-muted-foreground hidden sm:table-cell">{s.email}</td>
                  <td className="py-3 px-4">
                    <Badge variant="secondary" className="bg-navy/10 text-navy border-0 text-xs">
                      {s.role}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge
                      className={
                        s.status === "active"
                          ? "bg-success/15 text-success border-0 text-xs"
                          : s.status === "pending"
                          ? "bg-warning/15 text-warning border-0 text-xs"
                          : "bg-destructive/15 text-destructive border-0 text-xs"
                      }
                    >
                      {s.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminPanel;
