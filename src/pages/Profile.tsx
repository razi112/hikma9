import DashboardLayout from "@/components/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Edit2 } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const profile = {
    name: "Ahmed Ibrahim",
    email: "ahmed@example.com",
    phone: "+234 801 234 5678",
    location: "Lagos, Nigeria",
    bio: "Computer Science student with a passion for AI and machine learning. Active member of the Hikma Class Union executive committee.",
    rank: 1,
    year: 2026,
    skills: ["Leadership", "Public Speaking", "Python", "Machine Learning"],
    role: "Committee Admin",
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="gradient-navy h-32" />
          <div className="px-6 pb-6 -mt-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
              <Avatar className="h-24 w-24 border-4 border-card bg-navy text-gold-light shadow-lg">
                <AvatarFallback className="bg-navy text-gold-light font-display font-bold text-2xl">
                  AI
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="font-display text-2xl font-bold text-foreground">{profile.name}</h1>
                <p className="text-sm text-muted-foreground">
                  Rank #{profile.rank} • Class of {profile.year}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-gold text-gold-dark hover:bg-gold/10"
                onClick={() => setEditing(!editing)}
              >
                <Edit2 className="h-4 w-4 mr-1" />
                {editing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge className="bg-navy text-gold-light border-0">{profile.role}</Badge>
              {profile.skills.map((s) => (
                <Badge key={s} variant="secondary" className="bg-navy/10 text-navy border-0">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">About</h2>
            {editing ? (
              <Textarea defaultValue={profile.bio} rows={4} className="resize-none" />
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
            )}
          </div>

          <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-gold-dark" />
                {editing ? (
                  <Input defaultValue={profile.email} className="h-8" />
                ) : (
                  <span className="text-muted-foreground">{profile.email}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-gold-dark" />
                {editing ? (
                  <Input defaultValue={profile.phone} className="h-8" />
                ) : (
                  <span className="text-muted-foreground">{profile.phone}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-gold-dark" />
                {editing ? (
                  <Input defaultValue={profile.location} className="h-8" />
                ) : (
                  <span className="text-muted-foreground">{profile.location}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {editing && (
          <div className="flex justify-end mt-6">
            <Button className="bg-navy text-gold-light hover:bg-navy-light">
              Save Changes
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
