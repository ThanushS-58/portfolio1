import { TrendingUp, Database, BarChart } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Business Analyst – Enterprise Data & Migration Program",
      company: "Object Win Technology",
      subtitle: "Big 4 Financial Services Client (Project-Based Engagement)",
      period: "Sep 2025 – Feb 2026",
      location: "Bengaluru, India",
      color: "primary",
      stats: [
        { label: "Datasets Managed", value: "80+" },
        { label: "Faster Development Readiness", value: "30%" },
        { label: "Improved SIT/UAT Efficiency", value: "25%" },
      ],
      achievements: [
        "Led business analysis activities for a large-scale Oracle-to-AWS enterprise data migration program supporting regulatory reporting and enterprise transformation initiatives.",
        "Addressed legacy system data duplication and reconciliation challenges, improving reporting consistency across enterprise systems.",
        "Reverse-engineered undocumented business processes with SMEs and created DSIS and STTM documents for 11 data domains and 80+ datasets, accelerating development readiness by 30%.",
        "Acted as primary point of contact across Finance, Risk, Compliance, and Data Engineering teams, reducing requirement clarification cycles by 25% and improving cross-functional delivery coordination.",
        "Performed SQL-based data validation and reconciliation across 100+ datasets, improving data accuracy and completeness by 20%.",
        "Designed Master Data Management (MDM) hierarchies and supported golden record creation, reducing data duplication and improving reporting accuracy by 30%.",
        "Conducted detailed gap and impact analysis across enterprise data pipelines identifying functional and data inconsistencies early in the lifecycle, reducing downstream SIT/UAT issues by 20%.",
        "Improved data quality and test stability by resolving critical defects and strengthening validation controls, resulting in 25% higher SIT/UAT execution efficiency and reduced migration rework.",
        "Led cutover validation and post-migration verification activities ensuring stable production deployment and minimizing critical post-go-live defects across insurance transformation programs.",
      ],
    },
    {
      title: "Senior Business Analyst – Insurance Transformation Program",
      company: "Wipro Ltd.",
      period: "Sep 2021 – Jun 2024",
      location: "Bengaluru, Karnataka, India",
      color: "secondary",
      stats: [
        { label: "Stakeholder Workshops", value: "25+" },
        { label: "Manual Effort Reduction", value: "30%" },
        { label: "Documentation Accuracy", value: "98%" },
      ],
      achievements: [
        "Contributed to modernization of a legacy insurance platform by supporting scalable digital transformation initiatives across policy, underwriting, claims, and reporting modules, improving operational efficiency and system scalability.",
        "Led end-to-end Business Analysis lifecycle activities improving requirement clarity and reducing rework by 20%.",
        "Identified workflow inefficiencies through detailed gap and impact analysis improving audit readiness and governance compliance by 25%.",
        "Translated business requirements into BRDs, FRDs, user stories, and acceptance criteria reducing ambiguity and requirement clarification cycles by 20%.",
        "Created RTM documentation ensuring end-to-end traceability and reducing requirement leakage by 15%.",
        "Led 25+ stakeholder workshops across business and technology teams accelerating requirement alignment and reducing approval delays.",
        "Defined regulatory KPIs and reporting frameworks aligned with compliance requirements improving reporting consistency, audit readiness, and regulatory visibility across insurance operations.",
        "Performed policy and claims data analysis improving business decision-making and customer engagement by 12%.",
        "Standardized reporting processes across insurance modules reducing manual effort by 30% while improving report consistency, accuracy, and timeliness.",
        "Managed documentation for 30+ contracts improving documentation accuracy to 98% and reducing onboarding delays by 40%.",
        "Led SIT/UAT validation, defect resolution, and cutover readiness activities ensuring smooth production deployments with zero major audit issues.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600">3.5+ years of experience delivering Business Analysis, Insurance Transformation, and Enterprise Data Migration solutions across BFSI domain</p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const colorClass = `text-${exp.color}`;
            const bgColorClass = `bg-${exp.color}`;

            return (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    {exp.location && <p className="text-slate-600 text-sm mt-1">{exp.location}</p>}
                  </div>
                  <div className="text-slate-600 mt-3 lg:mt-0">{exp.period}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {exp.stats.map((stat, si) => (
                    <div key={si} className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 text-slate-700">
                  {exp.achievements.map((ach, ai) => (
                    <li key={ai} className="flex items-start gap-2">
                      <svg className={`${colorClass} mt-1 text-sm w-4 h-4 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
