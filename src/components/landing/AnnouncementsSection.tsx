import Section from "@/components/Section";
import { Megaphone } from "lucide-react";

const announcements = [
  {
    title: "Registration Now Open for 2026 Cohort",
    date: "Feb 10, 2026",
    content: "All new and returning students can now register on the platform.",
  },
  {
    title: "Committee Elections Coming Soon",
    date: "Feb 5, 2026",
    content: "Nominations for the executive committee close on March 1st. Get involved!",
  },
  {
    title: "Updated Union Constitution",
    date: "Jan 20, 2026",
    content: "The revised constitution is now available. Please review before the AGM.",
  },
];

const AnnouncementsSection = () => {
  return (
    <Section id="announcements">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
          Latest News
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mt-2">
          Announcements
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {announcements.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 bg-card p-5 rounded-lg border border-border hover-scale shadow-sm"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
              <Megaphone className="h-5 w-5 text-navy" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-display font-semibold text-navy">{item.title}</h3>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AnnouncementsSection;
