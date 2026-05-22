import { Award, Trophy, BookOpen, Cloud, TrendingUp } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    { title: "AWS Cloud Essentials for Business Leaders", issuer: "Amazon Web Services", icon: Cloud },
    { title: "GEN AI Fundamentals", issuer: "AI & Machine Learning", icon: TrendingUp },
    { title: "Agile Scrum Fundamentals", issuer: "Agile Methodologies", icon: TrendingUp },
    { title: "Walmart USA - Advanced Software Engineering Simulation", issuer: "Walmart (Simulation)", icon: TrendingUp },
  ];

  const awards = [
    { title: "Wipro Recognition Award", description: "Recognized for driving reporting automation and BA initiatives", icon: Award, color: "primary" },
    { title: "Stakeholder Excellence Recognition", description: "Effective cross-functional coordination", icon: Trophy, color: "success" },
    { title: "Business Analysis Excellence", description: "Documentation quality and transformation support", icon: Award, color: "secondary" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Certifications & Awards</h2>
          <p className="text-lg text-slate-600">Professional credentials and enterprise recognition</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="text-primary w-6 h-6" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-lg flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <cert.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{cert.title}</div>
                    <div className="text-sm text-slate-600">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Trophy className="text-success w-6 h-6" />
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-lg flex items-center gap-4">
                  <div className={`w-12 h-12 bg-${award.color}/10 rounded-lg flex items-center justify-center`}>
                    <award.icon className={`text-${award.color} w-6 h-6`} />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{award.title}</div>
                    <div className="text-sm text-slate-600">{award.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <BookOpen className="text-primary w-6 h-6" />
            Publications
          </h3>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-medium text-slate-900 mb-2">"A Novel Watermarking and Re-Encryption Approach to Avoid Illegal Content Sharing In Cloud"</div>
            <div className="text-sm text-slate-600 mb-2">Author: Manoj Srinivasan</div>
            <div className="text-sm text-slate-700">Research publication focused on cloud security, encryption techniques, and enterprise data protection mechanisms.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
