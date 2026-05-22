import { Check } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "100+", label: "Datasets validated" },
    { value: "30%", label: "Improved reporting accuracy" },
    { value: "25%", label: "Fewer clarification cycles" },
    { value: "98%", label: "Documentation accuracy" },
  ];

  const achievements = [
    "Led Oracle-to-AWS migration analysis across 80+ datasets",
    "Improved reporting accuracy by 30% through structured validation",
    "Reduced SIT/UAT defects by 20% via impact analysis",
    "Authored DSIS and STTM documentation across 11 data domains",
    "Led stakeholder workshops to improve alignment and delivery",
    "Supported regulatory reporting and governance for insurance programs",
  ];

  const languages = ["Tamil (Native)", "Telugu (Professional)", "Hindi (Professional)", "English (Professional)"];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">About Me</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Transforming enterprise data into reliable business insights through migration governance and business analysis
            excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Summary</h3>
            <p className="text-base text-slate-700 leading-relaxed">
              I am a Business Analyst with 3.5+ years of experience delivering enterprise transformation solutions across
              BFSI and Insurance domains. My core strengths include business analysis, data migration (Oracle → AWS), data
              validation & reconciliation, regulatory reporting, and Master Data Management (MDM).
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              I bridge the gap between business stakeholders and technical teams by translating complex business requirements into
              scalable enterprise solutions. I have hands-on experience with SQL-based reconciliation, STTM/S2T mapping, SIT/UAT
              coordination, and cutover validation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-sm text-slate-700">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Key Achievements</h3>
              <ul className="space-y-2 text-slate-700 list-inside list-disc">
                {achievements.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3">Languages</h3>
              <div className="flex flex-col gap-2">
                {languages.map((lang, i) => (
                  <div key={i} className="text-slate-700">{lang}</div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3">Core Focus</h3>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li>Business Analysis & Requirements</li>
                <li>Data Migration & Validation</li>
                <li>Regulatory Reporting & Governance</li>
                <li>Master Data Management (MDM)</li>
                <li>SIT/UAT coordination & Cutover validation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
