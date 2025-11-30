interface AchievementCardProps {
  title: string
  description: string
}

export default function AchievementCard({ title, description }: AchievementCardProps) {
  return (
    <div className="bg-[#0f0f1a] p-6 rounded-lg">
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
