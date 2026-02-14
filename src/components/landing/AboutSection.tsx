import Section from "@/components/Section";
import { BookOpen, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "We champion education and intellectual growth, supporting each member in their academic journey.",
  },
  {
    icon: Users,
    title: "Unity & Brotherhood",
    desc: "Bound by shared experiences, we foster lifelong friendships and collaborative spirit among classmates.",
  },
  {
    icon: Target,
    title: "Leadership",
    desc: "Empowering future leaders through mentorship, committee roles, and community engagement.",
  },
  {
    icon: Heart,
    title: "Service",
    desc: "Giving back to our community through outreach programs, charity events, and social initiatives.",
  },
];

const AboutSection = () => {
  return (
    <Section id="about" className="bg-cream">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
          Who We Are
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mt-2">
          About Hikma Class Union
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground leading-relaxed">
          Hikma Class Union is a vibrant community of scholars united by purpose and passion. 
          We provide a platform for members to connect, collaborate, and contribute to each other's success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((item, i) => (
          <div
            key={item.title}
            className="bg-card rounded-lg p-6 text-center hover-scale shadow-sm border border-border"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="h-7 w-7 text-navy" />
            </div>
            <h3 className="font-display text-lg font-semibold text-navy mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AboutSection;
