interface SkillCardProps {
  category: string;
  description: string;
  skills: string[];
}

export default function SkillCard({ category, description, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{category}</h3>
      <p className="text-gray-600 mb-4 text-sm grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}