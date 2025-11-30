import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  link: string
  github: string
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  category,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="bg-[#0f0f1a] rounded-lg overflow-hidden">
      <div className="relative h-60">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-[#1a1a2e]">
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge variant="secondary" className="bg-[#1a1a2e]">
              +{technologies.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link href={github} className="text-gray-400 hover:text-white">
            <Github className="w-5 h-5" />
          </Link>
          <Link href={link} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            View Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
