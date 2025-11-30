interface TimelineItemProps {
  date: string
  title: string
  color: string
  position: "left" | "right"
}

export default function TimelineItem({ date, title, color, position }: TimelineItemProps) {
  return (
    <div className="relative">
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${color} border-4 border-[#0a0a14] z-10`}
      ></div>

      <div className={`flex items-center ${position === "left" ? "flex-row-reverse md:pr-16" : "md:pl-16"}`}>
        <div className={`w-full md:w-1/2 ${position === "left" ? "text-right md:pr-16" : "md:pl-16"}`}>
          <div className="bg-[#0f0f1a] p-4 rounded-lg">
            <h4 className="font-bold text-lg">{title}</h4>
            <p className={`${color.replace("bg-", "text-")}`}>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
