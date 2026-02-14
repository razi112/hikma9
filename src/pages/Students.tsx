import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const mockStudents = [
  { id: 1, name: "Ahmed Ibrahim", rank: 1, year: 2026, skills: ["Leadership", "Public Speaking"], status: "active" },
  { id: 2, name: "Fatima Abubakar", rank: 2, year: 2026, skills: ["Research", "Data Science"], status: "active" },
  { id: 3, name: "Yusuf Mohammed", rank: 3, year: 2025, skills: ["Engineering", "Python"], status: "active" },
  { id: 4, name: "Aisha Suleiman", rank: 5, year: 2026, skills: ["Design", "UI/UX"], status: "active" },
  { id: 5, name: "Musa Abdullahi", rank: 4, year: 2025, skills: ["Marketing", "SEO"], status: "pending" },
  { id: 6, name: "Khadija Umar", rank: 6, year: 2024, skills: ["Finance", "Accounting"], status: "active" },
  { id: 7, name: "Ibrahim Hassan", rank: 7, year: 2026, skills: ["Medicine", "Biology"], status: "active" },
  { id: 8, name: "Zainab Bello", rank: 8, year: 2025, skills: ["Law", "Debate"], status: "blocked" },
];

const Students = () => {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");

  const filtered = mockStudents.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.skills.some((sk) => sk.toLowerCase().includes(search.toLowerCase()));
    const matchYear = yearFilter === "all" || s.year.toString() === yearFilter;
    return matchSearch && matchYear;
  });

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">Student Directory</h1>
        <p className="text-muted-foreground mt-1">Browse and search all union members.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={yearFilter} onValueChange={setYearFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2026">2026</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Student Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((student) => (
          <div
            key={student.id}
            className="bg-card rounded-lg border border-border p-5 hover-scale shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-12 w-12 bg-navy text-gold-light">
                <AvatarFallback className="bg-navy text-gold-light font-display font-bold">
                  {student.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{student.name}</h3>
                <p className="text-xs text-muted-foreground">Rank #{student.rank} • Class of {student.year}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {student.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs bg-navy/10 text-navy border-0">
                  {skill}
                </Badge>
              ))}
            </div>
            <Badge
              variant={student.status === "active" ? "default" : student.status === "pending" ? "secondary" : "destructive"}
              className={
                student.status === "active"
                  ? "bg-success/15 text-success border-0 text-xs"
                  : student.status === "pending"
                  ? "bg-warning/15 text-warning border-0 text-xs"
                  : "text-xs"
              }
            >
              {student.status}
            </Badge>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>No students found matching your criteria.</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Students;
