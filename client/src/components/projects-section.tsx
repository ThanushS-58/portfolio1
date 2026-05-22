import { Settings, PieChart, Users, Rocket, Shield, Cloud } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Oracle to AWS Migration Program",
      description:
        "Enterprise-scale migration initiative involving regulatory reporting, SQL-based reconciliation, data validation, governance, STTM mapping, and cutover readiness activities.",
      icon: Cloud,
      color: "primary",
      metrics: [
        { label: "Datasets Validated", value: "100+" },
        { label: "Data Quality Improvement", value: "20%" },
        { label: "Faster Development Readiness", value: "30%" },
      ],
      technologies: ["Oracle", "AWS Glue", "SQL", "Informatica"],
    },
    {
      title: "Insurance Reporting Transformation",
      description:
        "Standardized reporting framework across insurance operations improving audit readiness, reporting consistency, and governance compliance.",
      icon: PieChart,
      color: "secondary",
      metrics: [
        { label: "Manual Reporting Reduction", value: "30%" },
        { label: "Audit Readiness Improvement", value: "25%" },
        { label: "Operational Efficiency", value: "20%" },
      ],
      technologies: ["Power BI", "SQL", "Tableau", "Reporting Governance"],
    },
    {
      title: "Master Data Management Initiative",
      description:
        "Designed MDM hierarchy structures and supported golden record creation improving reporting consistency and reducing enterprise data duplication.",
      icon: Settings,
      color: "accent",
      metrics: [
        { label: "Duplicate Record Reduction", value: "30%" },
        { label: "Reporting Accuracy", value: "20%" },
        { label: "Data Consistency", value: "98%" },
      ],
      technologies: ["MDM", "SQL", "Data Governance", "Data Quality"],
    },
    {
      title: "Regulatory Reporting & Validation Framework",
      description:
        "Implemented SQL-based validation and reconciliation processes supporting enterprise regulatory reporting and governance requirements.",
      icon: Shield,
      color: "success",
      metrics: [
        { label: "Validation Checks", value: "100+" },
        { label: "Validation Efficiency", value: "25%" },
        { label: "Reduced Migration Defects", value: "20%" },
      ],
      technologies: ["SQL", "Validation", "Reconciliation", "Compliance"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Enterprise Transformation Projects</h2>
          <p className="text-lg text-slate-600">
            Large-scale BFSI, Insurance, and Data Migration initiatives delivering measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const bgColorClass = `bg-${project.color}/10`;
            const textColorClass = `text-${project.color}`;

            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="mb-4">
                  <div className={`w-12 h-12 ${bgColorClass} rounded-lg flex items-center justify-center mb-3`}>
                    <IconComponent className={`${textColorClass} text-xl w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-slate-700 text-sm">{metric.label}</span>
                      <span className="font-semibold text-success">{metric.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
