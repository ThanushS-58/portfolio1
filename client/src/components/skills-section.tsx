import { BarChart, Database, Settings, Briefcase } from "lucide-react";

export default function SkillsSection() {
  const businessAnalysis = [
    "Requirements Elicitation",
    "Stakeholder Management",
    "Business Process Analysis",
    "Gap Analysis",
    "Impact Analysis",
    "BRD / FRD",
    "User Stories & Acceptance Criteria",
    "RTM",
    "Change Management",
    "SIT & UAT Support",
    "Agile Scrum / Waterfall",
  ];

  const dataMigration = [
    "Data Migration",
    "Data Validation",
    "Data Reconciliation",
    "ETL Validation",
    "Cutover Validation",
    "Delta Load Validation",
    "STTM / S2T Mapping",
    "Master Data Management (MDM)",
    "Data Governance",
    "Regulatory Reporting",
    "Data Quality Management",
  ];

  const tools = [
    "SQL",
    "Oracle",
    "SQL Server",
    "AWS Glue",
    "Informatica",
    "Power BI",
    "Tableau",
    "Python",
    "Excel VBA",
    "DB Visualizer",
    "Jira",
    "Azure DevOps",
    "Confluence",
    "Visio",
  ];

  const domains = ["BFSI", "Banking", "Insurance", "Financial Services", "Enterprise Data Management", "Compliance Reporting"];

  return (
    <section id="skills" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">Specialized expertise across Business Analysis, Data Migration, Regulatory Reporting, and Enterprise Data Governance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Business Analysis</h3>
            </div>
            <ul className="text-slate-700 space-y-2">
              {businessAnalysis.map((b, i) => <li key={i}>• {b}</li>)}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-secondary" />
              <h3 className="text-lg font-semibold">Data Migration & Governance</h3>
            </div>
            <ul className="text-slate-700 space-y-2">
              {dataMigration.map((d, i) => <li key={i}>• {d}</li>)}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-semibold">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-success" />
              <h3 className="text-lg font-semibold">Domain Expertise</h3>
            </div>
            <ul className="text-slate-700 space-y-2">
              {domains.map((d, i) => <li key={i}>• {d}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
