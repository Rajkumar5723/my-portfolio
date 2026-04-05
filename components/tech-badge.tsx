import { Badge } from "@/components/ui/badge"

interface TechBadgeProps {
  name: string
  isActive?: boolean
}

export default function TechBadge({ name, isActive = false }: TechBadgeProps) {
  return (
    <Badge
      className={`${isActive ? "bg-[#1a1a2e]/80 text-cyan-400" : "bg-[#1a1a2e] text-white"} py-2 px-4 transition-colors duration-300`}
    >
      {name}
    </Badge>
  )
}
