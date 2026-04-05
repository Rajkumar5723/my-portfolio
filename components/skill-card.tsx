import { Database, Server, Code, BarChart, Activity } from "lucide-react"

interface SkillCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function SkillCard({ title, description, icon, color }: SkillCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "server":
        return <Server className="w-8 h-8" />
      case "database":
        return <Database className="w-8 h-8" />
      case "code":
        return <Code className="w-8 h-8" />
      case "bar-chart":
        return <BarChart className="w-8 h-8" />
      case "activity":
        return <Activity className="w-8 h-8" />
      default:
        return <Server className="w-8 h-8" />
    }
  }

  return (
    <div className={`${color} p-6 rounded-lg`}>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#1a1a2e] rounded-lg">{getIcon()}</div>
        <div>
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}
