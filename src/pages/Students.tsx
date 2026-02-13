import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Mail, Phone, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useStudents } from "@/hooks/useStudents";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { isSupabaseConfigured } from "@/lib/supabase";

const mockStudents = [
  { id: 1, name: "Aman", rank: 1, year: 2026, skills: ["Leadership", "Management", "Strategy"], status: "active", bio: "Passionate leader with a vision for community building and academic excellence.", email: "aman@hikma.edu", phone: "+234 801 000 0001" },
  { id: 2, name: "Nihal", rank: 2, year: 2026, skills: ["Research", "Data Analysis", "Statistics"], status: "active", bio: "Research enthusiast who thrives on turning raw data into meaningful insights.", email: "nihal@hikma.edu", phone: "+234 801 000 0002" },
  { id: 3, name: "Rayyan", rank: 3, year: 2026, skills: ["Engineering", "Robotics", "CAD"], status: "active", bio: "Aspiring engineer with hands-on experience in robotics and mechanical design.", email: "rayyan@hikma.edu", phone: "+234 801 000 0003" },
  { id: 4, name: "Yaseen", rank: 4, year: 2026, skills: ["Public Speaking", "Writing", "Debate"], status: "active", bio: "Eloquent communicator and debater who inspires through words and action.", email: "yaseen@hikma.edu", phone: "+234 801 000 0004" },
  { id: 5, name: "Nahash", rank: 5, year: 2026, skills: ["Design", "Figma", "Illustration"], status: "active", bio: "Creative designer with an eye for detail and a passion for visual storytelling.", email: "nahash@hikma.edu", phone: "+234 801 000 0005" },
  { id: 6, name: "Nadih", rank: 6, year: 2026, skills: ["Marketing", "Branding", "Content Creation"], status: "active", bio: "Marketing strategist who builds brands and engages audiences effectively.", email: "nadih@hikma.edu", phone: "+234 801 000 0006" },
  { id: 7, name: "Shadi", rank: 7, year: 2026, skills: ["Finance", "Budgeting", "Excel"], status: "active", bio: "Finance-savvy student managing union funds with precision and transparency.", email: "shadi@hikma.edu", phone: "+234 801 000 0007" },
  { id: 8, name: "Anas", rank: 8, year: 2026, skills: ["Medicine", "First Aid", "Biology"], status: "active", bio: "Dedicated medical student committed to health awareness and community care.", email: "anas@hikma.edu", phone: "+234 801 000 0008" },
  { id: 9, name: "Ameen", rank: 9, year: 2026, skills: ["Data Science", "Machine Learning", "Python"], status: "active", bio: "Data science enthusiast exploring the intersection of AI and real-world applications.", email: "ameen@hikma.edu", phone: "+234 801 000 0009" },
  { id: 10, name: "Khaleel", rank: 10, year: 2026, skills: ["Python", "Django", "Backend Dev"], status: "active", bio: "Backend developer building robust systems and scalable web applications.", email: "khaleel@hikma.edu", phone: "+234 801 000 0010" },
  { id: 11, name: "Shehin", rank: 11, year: 2026, skills: ["UI/UX", "Prototyping", "User Research"], status: "active", bio: "User experience designer focused on creating intuitive and delightful interfaces.", email: "shehin@hikma.edu", phone: "+234 801 000 0011" },
  { id: 12, name: "Anzil", rank: 12, year: 2026, skills: ["SEO", "Digital Marketing", "Analytics"], status: "active", bio: "Digital marketing expert driving online visibility and engagement strategies.", email: "anzil@hikma.edu", phone: "+234 801 000 0012" },
  { id: 13, name: "Fawaz", rank: 13, year: 2026, skills: ["Debate", "Critical Thinking", "Philosophy"], status: "active", bio: "Sharp thinker and debater who approaches problems with logic and clarity.", email: "fawaz@hikma.edu", phone: "+234 801 000 0013" },
  { id: 14, name: "Midlaj", rank: 14, year: 2026, skills: ["Biology", "Ecology", "Lab Research"], status: "active", bio: "Biology student exploring ecosystems and conducting impactful lab research.", email: "midlaj@hikma.edu", phone: "+234 801 000 0014" },
  { id: 15, name: "Ziyad", rank: 15, year: 2026, skills: ["Accounting", "Taxation", "Auditing"], status: "active", bio: "Detail-oriented accounting student with expertise in financial reporting.", email: "ziyad@hikma.edu", phone: "+234 801 000 0015" },
  { id: 16, name: "Ashkar", rank: 16, year: 2026, skills: ["Law", "Constitutional Studies", "Ethics"], status: "active", bio: "Aspiring lawyer with a strong sense of justice and ethical reasoning.", email: "ashkar@hikma.edu", phone: "+234 801 000 0016" },
  { id: 17, name: "Munfis", rank: 17, year: 2026, skills: ["AI", "Deep Learning", "NLP"], status: "active", bio: "AI researcher pushing boundaries in natural language processing and deep learning.", email: "munfis@hikma.edu", phone: "+234 801 000 0017" },
  { id: 18, name: "Hisham", rank: 18, year: 2026, skills: ["Networking", "System Admin", "Linux"], status: "active", bio: "Networking specialist skilled in system administration and infrastructure management.", email: "hisham@hikma.edu", phone: "+234 801 000 0018" },
  { id: 19, name: "Razi", rank: 19, year: 2026, skills: ["Cybersecurity", "Ethical Hacking", "Forensics"], status: "active", bio: "Cybersecurity enthusiast focused on protecting systems and ethical penetration testing.", email: "razi@hikma.edu", phone: "+234 801 000 0019" },
  { id: 20, name: "Bishr", rank: 20, year: 2026, skills: ["Cloud Computing", "AWS", "DevOps"], status: "active", bio: "Cloud computing specialist building scalable infrastructure on modern platforms.", email: "bishr@hikma.edu", phone: "+234 801 000 0020" },
];

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
  
  const supabaseConfigured = isSupabaseConfigured();
  const { data: students, isLoading, error } = useStudents();
  
  // Use mock data if Supabase is not configured or if there's an error
  const dataSource = supabaseConfigured && !error && students ? students : mockStudents;

  const filtered = dataSource.filter((s) => {
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

      {!supabaseConfigured && (
        <Alert className="mb-6 border-gold/50 bg-gold/5">
          <AlertCircle className="h-4 w-4 text-gold" />
          <AlertDescription className="text-sm">
            <strong>Demo Mode:</strong> Showing sample data. To enable persistent storage, follow the setup guide in <code className="text-xs bg-navy/10 px-1 py-0.5 rounded">SUPABASE_SETUP.md</code>
          </AlertDescription>
        </Alert>
      )}

      {error && supabaseConfigured && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>
            Failed to load students from database. Showing sample data instead.
          </AlertDescription>
        </Alert>
      )}

      {isLoading && supabaseConfigured && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
        </div>
      )}

      {/* Filters */}
      {(!isLoading || !supabaseConfigured) && (
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
      {(!isLoading || !supabaseConfigured) && (
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

      {filtered.length === 0 && (!isLoading || !supabaseConfigured) && (
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
