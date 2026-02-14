import Section from "@/components/Section";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Annual General Meeting",
    date: "March 15, 2026",
    time: "10:00 AM",
    location: "Main Auditorium",
    desc: "Join us for the yearly review and planning session for the union's future activities.",
    tag: "Upcoming",
  },
  {
    title: "Career Fair & Networking",
    date: "April 22, 2026",
    time: "2:00 PM",
    location: "Student Center",
    desc: "Connect with industry professionals and explore exciting career opportunities.",
    tag: "Open",
  },
  {
    title: "Graduation Ceremony Prep",
    date: "June 1, 2026",
    time: "9:00 AM",
    location: "Hikma Hall",
    desc: "Planning session for the upcoming graduation ceremony and celebration.",
    tag: "Planning",
  },
];

const EventsSection = () => {
  return (
    <Section id="events">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
          Stay Connected
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mt-2">
          Upcoming Events
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.title}
            className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover-scale group"
          >
            <div className="gradient-navy p-4">
              <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold/20 text-gold">
                {event.tag}
              </span>
              <h3 className="font-display text-xl font-bold text-gold-light mt-3">
                {event.title}
              </h3>
            </div>
            <div className="p-5 space-y-3">
              <p className="text-sm text-muted-foreground">{event.desc}</p>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-gold-dark" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-gold-dark" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-gold-dark" />
                  <span>{event.location}</span>
                </div>
              </div>
              <Button size="sm" className="w-full bg-navy text-gold-light hover:bg-navy-light mt-2">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EventsSection;
