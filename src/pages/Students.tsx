import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Mail, Phone, Loader2 } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useStudents } from "@/hooks/useStudents";
import { Alert, AlertDescription } from "@/components/ui/alert";

type Student = {
  id: number;
  name: string;
  rank: number;
  year: number;
  skills: string[];
  status: string;
  bio: string;
  email: string;
  phone: string;
};

const Students = () => {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [selected, setSelected] = useState<Student | null>(null);
  
  const { data: students, isLoading, error } = useStudents();

  const filtered = (students || []).filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.skills.some((sk) => sk.toLowerCase().includes(search.toLowerCase()));
    const matchYear = yearFilter === "all" || s.year.toString() === yearFilter;
    return matchSearch && matchYear;
  });

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">Student Directory</h1>
        <p className="text-muted-foreground mt-1">Browse and search all union members. Click a card to view full profile.</p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>
            Failed to load students. Please check your Supabase configuration.
          </AlertDescription>
        </Alert>
      )}

      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
        </div>
      )}

      {/* Filters */}
      {!isLoading && !error && (
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
      )}

      {/* Student Grid */}
      {!isLoading && !error && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((student) => (
          <div
            key={student.id}
            onClick={() => setSelected(student)}
            className="bg-card rounded-lg border border-border p-5 hover-scale shadow-sm cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-12 w-12 bg-navy text-gold-light">
                <AvatarFallback className="bg-navy text-gold-light font-display font-bold">
                  {student.name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-foreground text-sm group-hover:text-navy transition-colors">{student.name}</h3>
                <p className="text-xs text-muted-foreground">Rank #{student.rank} • Class of {student.year}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{student.bio}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {student.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs bg-navy/10 text-navy border-0">
                  {skill}
                </Badge>
              ))}
            </div>
            <Badge className="bg-success/15 text-success border-0 text-xs">
              {student.status}
            </Badge>
          </div>
        ))}
      </div>
      )}

      {filtered.length === 0 && !isLoading && !error && (
        <div className="text-center py-12 text-muted-foreground">
          <p>No students found matching your criteria.</p>
        </div>
      )}

      {/* Student Detail Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{selected.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-5 pt-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 bg-navy text-gold-light">
                    <AvatarFallback className="bg-navy text-gold-light font-display font-bold text-xl">
                      {selected.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-muted-foreground">Rank #{selected.rank} • Class of {selected.year}</p>
                    <Badge className="bg-success/15 text-success border-0 text-xs mt-1">{selected.status}</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-sm text-foreground mb-1">Bio</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selected.bio}</p>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-sm text-foreground mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-navy/10 text-navy border-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-sm text-foreground mb-2">Contact</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-gold-dark" />
                      <span>{selected.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-gold-dark" />
                      <span>{selected.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Students;
