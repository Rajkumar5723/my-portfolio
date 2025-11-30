"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Github, Code, Eye, Layers, ImageIcon, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CursorAnimation from "@/components/cursor-animation"
import Image from "next/image"

interface ProjectData {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  link: string
  github: string
  role?: string
  features?: string[]
  challenges?: {
    problems: string[]
    solutions: string[]
  }
  summary?: string
  keyFeatures?: string[]
  techStack?: string[]
  keyLearnings?: string[]
  gallery?: string[]
}

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [project, setProject] = useState<ProjectData | null>(null)
  const [nextProject, setNextProject] = useState<ProjectData | null>(null)
  const [prevProject, setPrevProject] = useState<ProjectData | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  // New state to store the specific image to display in the modal
  const [activeImage, setActiveImage] = useState<string | null>(null)

  // Project data
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "VibeCheckHQ – Multi-Platform Influencer Sentiment Insights",
      description:
        "VibeCheckHQ is a social media sentiment and emotion analysis platform that collects user comments from YouTube, Instagram, Facebook, and Twitter. It uses an ensemble of transformer models (BERT, XLNet, RoBERTa) to detect standard sentiment classes (positive, negative, neutral) as well as finer emotions (e.g., happy, sad, angry). With over 100,000 manually-labeled comments, the tool delivers robust accuracy. Additionally, a Llama-based LLM provides feedback on potential misclassifications, offering data augmentation and re-labeling suggestions.",
      image: "/images/comments.jpg",
      gallery: [
        "/images/Vibe-gallery1.png",
        "/images/Vibe-gallery2.png",
      ],
      technologies: [
        "BERT",
        "XLNet",
        "RoBERTa",
        "Llama LLM",
        "Sentiment Analysis",
        "Multi-Emotion Classification",
        "Data Labeling",
      ],
      category: "Data",
      link: "#",
      github: "https://github.com/Rajkumar5723/VibeCheckHQ",
      keyFeatures: [
        "Multi-Platform Scraping: Automated data ingestion from multiple social networks.",
        "Advanced NLP Models: Ensemble of BERT, XLNet, and RoBERTa for detailed emotion and sentiment tagging.",
        "Manual Labeling Scale: Over 100,000 comments labeled to ensure quality ground truth.",
        "Llama-based Feedback Loop: Uses Llama LLM to identify mislabeled samples and refine the data pipeline.",
      ],
      challenges: {
        problems: [
          "Ensemble Integration – Combined multiple transformer outputs by refining inference pipelines to optimize performance.",
          "High-Volume Manual Labeling – Built an internal semi-automated annotation tool and weekly spot checks for data integrity.",
          "Fine-Grained Emotion Detection – Implemented a two-stage model: broad sentiment first, sub-emotion classification next.",
          "Inconsistent Data Formats – Developed unified data pre-processing for hashtags, emojis, and domain-specific slang.",
        ],
        solutions: [
          "Implemented adaptive ensemble weighting based on confidence scores",
          "Created a feedback loop with active learning to prioritize uncertain samples",
          "Developed hierarchical classification with specialized models for each emotion family",
          "Built robust preprocessing pipeline with custom tokenization for social media content",
        ],
      },
      techStack: [
        "Python",
        "Selenium",
        "APIs (YouTube, Twitter, Instagram, Facebook)",
        "TensorFlow",
        "Flask",
        "Llama LLM",
      ],
      keyLearnings: [
        "Ensemble transformer models can significantly boost accuracy for emotion classification when carefully orchestrated.",
        "Continuous feedback from an LLM helps detect labeling or inference issues early.",
      ],
    },
    {
      id: 2,
      title: "Smart BPM – AI Prioritizer",
      description: "Quantum BPO is a multilingual voice-based AI assistant designed for BPOs. It attends incoming calls, interacts with customers via speech, collects essential information, and applies Quantum Machine Learning to classify intent, detect emotions, and assign call priority. The system fuses audio-text features using quantum-enhanced layers for superior accuracy in prioritizing critical support queries.",
      image: "/images/BPO.png",
      technologies: [
        "Quantum Machine Learning",
        "Speech Recognition",
        "Multimodal Fusion",
        "Whisper ASR",
        "PennyLane",
        "Flask"
      ],
      category: "AI",
      link: "#",
      github: "https://github.com/Rajkumar5723/SmartBPM",
      gallery: [
        "/images/BPM-gallery1.png",
        "/images/BPO-gallery2.png",
        "/images/BPO-gallery3.png",
        "/images/BPO-gallery4.png",
      ],
      keyFeatures: [
        "AI-First Voice Assistant – Speaks, collects user data, and handles full voice interaction.",
        "Quantum Variational Classifier – Detects sentiment and intent using QML techniques.",
        "Fusion Layer with Quantum Kernel – Fuses audio-text features for deeper context understanding.",
        "Multilingual Support – Supports Tamil, Hindi, English, and other regional languages.",
        "Smart Priority Assignment – Routes critical calls based on emotion and intent fusion.",
        "Call Summary and Handoff – Passes prioritized summary to human agent if needed."
      ],
      challenges: {
        "problems": [
          "Multilingual Audio Understanding – Difficult to handle mixed-language queries in real-time.",
          "Emotion Misclassification – Traditional models struggled with noisy or subtle tones.",
          "Feature Fusion Complexity – Combining audio and text lacked deep contextual entanglement."
        ],
        "solutions": [
          "Used Whisper + language models fine-tuned for Indian regional languages.",
          "Implemented Quantum Variational Classifier trained on multimodal emotion datasets.",
          "Replaced transformer fusion with quantum entangled kernel to improve precision."
        ]
      },
      techStack: [
        "Python",
        "Flask",
        "PennyLane",
        "Whisper",
        "Librosa",
        "Transformers (Hugging Face)"
      ],
      keyLearnings: [
        "Replacing rule-based routing with AI fusion models drastically improves SLA adherence.",
        "Quantum feature fusion can outperform classical attention when combining sentiment-intent pairs.",
        "AI-first voice bots reduce manual load and improve customer satisfaction in high-volume BPOs."
      ]
    }
    ,
    {
      id: 3,
      title: "Automatic Annotation",
      description:
        "A specialized system that auto-labels objects in images using YOLOv11-L, reaching 98% annotation accuracy. By drastically reducing manual labeling overhead, it expedites dataset creation and model training for computer vision tasks.",
      image: "/images/Auto.png",
      technologies: ["Computer Vision", "Object Detection", "YOLO", "Python", "OpenCV"],
      category: "AI",
      link: "#",
      github: "https://github.com/Rajkumar5723/AnnotAIte",
      gallery: [
        "/images/Auto-gallery1.png",
        "/images/Auto-gallery2.jpg",
      ],
      keyFeatures: [
        "Automated Bounding Box Generation – Eliminates manual annotation for routine object detection tasks.",
        "Real-time Dataset Creation – Continually refines detection with newly added data.",
        "Scalable – Handles large image libraries efficiently.",
        "OpenCV Integration – Streams from cameras or video files for immediate labeling.",
      ],
      challenges: {
        problems: [
          "Model Drift – Retrained YOLO with newly labeled data periodically.",
          "Complex Backgrounds – Augmented training sets with varied lighting and occlusion scenarios.",
          "Resource Constraints – Leveraged GPU acceleration and batch processing to handle bulk images.",
        ],
        solutions: [
          "Implemented continuous learning pipeline with automated retraining triggers",
          "Created synthetic data generation with randomized backgrounds and lighting conditions",
          "Developed efficient batch processing with dynamic resource allocation",
        ],
      },
      techStack: ["Python", "OpenCV", "TensorFlow", "LabelImg", "YOLOv11-L"],
      keyLearnings: [
        "Auto-labeling drastically accelerates CV pipelines by maintaining consistent data quality.",
        "Frequent retraining keeps detection performance high.",
      ],
    },
    {
      id: 4,
      title: "Cardioneus - Heart Disease Detection",
      description:
        "An ensemble-based heart disease prediction model that employs Voting Classifier and Stacking methods for robust accuracy. Deployed with a Flask-powered dashboard, it visualizes patient health parameters in real time and guides clinical decisions.",
      image: "/images/Heart-gallery1.png?height=400&width=600",
      gallery: [
        "/images/Heart-gallery1.png",
        "/images/Heart-gallery2.png",
        "/images/Heart-gallery3.png",
        "/images/Heart-gallery4.png",
        "/images/Heart-gallery5.png",
        "/images/Heart-gallery6.png",
        "/images/Heart-gallery7.png",
      ],
      technologies: ["Healthcare", "Ensemble Learning", "Data Analytics", "Flask"],
      category: "Data",
      link: "#",
      github: "https://github.com/Rajkumar5723/CARDIONEXUS",
      keyFeatures: [
        "Multiple Base Learners – Combines Logistic Regression, Random Forest, XGBoost, and more.",
        "Flask Dashboard – Interactive interface for doctors and clinicians to assess patient risk levels.",
        "MongoDB – Stores patient records and model outputs for quick retrieval.",
        "Cross-Validation – Delivers stable, reliable performance across different datasets.",
      ],
      challenges: {
        problems: [
          "Data Inconsistency – Standardized data handling (removing outliers, normalizing scales) for uniform results.",
          "High False Positives – Tuned ensemble thresholds to balance sensitivity (recall) and specificity.",
          "Clinical Integration – Ensured secure data exchange protocols, meeting privacy requirements.",
        ],
        solutions: [
          "Implemented robust preprocessing pipeline with outlier detection and feature scaling",
          "Used ROC curve analysis to find optimal decision thresholds for clinical use cases",
          "Developed HIPAA-compliant data handling with end-to-end encryption",
        ],
      },
      techStack: ["Python", "Scikit-learn", "Flask", "MongoDB"],
      keyLearnings: [
        "Ensemble methods frequently yield better performance over single classifiers in healthcare.",
        "Carefully tuned thresholds can reduce misdiagnosis risk.",
      ],
    },
    {
      id: 5,
      title: "Book Popularity Insights",
      description:
        "A data-driven platform that monitors book sales and popularity trends across leading eBook sites. BeautifulSoup and Selenium handle daily web scraping, while Pandas organizes and cleans the data. Interactive Tableau dashboards reveal top sellers, emerging genres, and usage patterns for more strategic marketing decisions.",
      image: "/images/book.jpg?height=400&width=600",
      gallery: [
        "/placeholder.svg",
        "/placeholder.svg",
      ],
      technologies: ["Web Scraping", "Data Visualization", "Pandas", "Tableau"],
      category: "Data",
      link: "#",
      github: "https://github.com/Rajkumar5723/BookInsights",
      keyFeatures: [
        "Automated Scraping – Collects review counts, sales ranks, and rating distributions from multiple platforms.",
        "Data Cleaning & Aggregation – Consolidates tens of thousands of records into a unified dataset.",
        "Tableau Dashboards – User-friendly visuals for quick trend identification and comparative analysis.",
        "Predictive Models – Basic time-series forecasting for demand fluctuations.",
      ],
      challenges: {
        problems: [
          "Frequent Site Updates – Created flexible CSS selector fallback to handle layout changes.",
          "Large-Scale Data Management – Implemented chunk processing in Pandas for efficient merges.",
          "Mixed Quality Data – De-duplicated entries and standardized categories for consistent analysis.",
        ],
        solutions: [
          "Developed adaptive scraping with multiple selector strategies and automatic fallbacks",
          "Implemented memory-efficient processing with chunking and incremental operations",
          "Created robust data cleaning pipeline with fuzzy matching for deduplication",
        ],
      },
      techStack: ["Python", "BeautifulSoup", "Pandas", "Tableau"],
      keyLearnings: [
        "Thorough data validation is essential for large-scale web scraping.",
        "Interactive visual analytics empower non-technical stakeholders.",
      ],
    },
  ]

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    const projectId = Number(params.id)
    const currentProject = projects.find((p) => p.id === projectId) || null
    setProject(currentProject)

    if (currentProject) {
      // Set the active image to the main image by default
      setActiveImage(currentProject.image)
    }

    // Find next and previous projects
    const currentIndex = projects.findIndex((p) => p.id === projectId)
    setNextProject(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null)
    setPrevProject(currentIndex > 0 ? projects[currentIndex - 1] : null)

    return () => clearTimeout(timer)
  }, [params.id])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0a0a14] text-white flex items-center justify-center font-poppins">
        <div className="w-16 h-16 border-4 border-t-purple-500 border-r-blue-500 border-b-cyan-500 border-l-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a14] text-white flex items-center justify-center font-poppins">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Button
            onClick={() => router.push("/projects")}
            className="bg-purple-600 hover:bg-purple-700 font-inter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Projects
          </Button>
        </motion.div>
      </div>
    )
  }

  const tabIcons = {
    overview: <Eye className="w-4 h-4 mr-2" />,
    "features-tech": <Code className="w-4 h-4 mr-2" />,
    challenges: <Layers className="w-4 h-4 mr-2" />,
    gallery: <ImageIcon className="w-4 h-4 mr-2" />,
  }

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white font-poppins">
      <CursorAnimation />

      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0 bg-[#0a0a14]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
      </div>

      {/* Header with always visible navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/80 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-400 font-signature">
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Rajkumar G
            </motion.span>
          </Link>
          <nav className="flex space-x-8">
            {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-white/80 text-white/60 font-inter"
              >
                <motion.span whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  {item}
                </motion.span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        {/* Back button with animation */}
        <motion.div
          className="mb-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors font-inter"
          >
            <motion.div whileHover={{ x: -5 }} whileTap={{ x: 0 }}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </motion.div>
          </Link>
        </motion.div>

        {/* Project title with animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 font-poppins">
            {project.title}
          </h1>

          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <Badge className="bg-[#1a1a2e] text-white font-inter">{tech}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tab navigation with animation */}
        <motion.div
          className="border-b border-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap space-x-4 md:space-x-8">
            {["Overview", "Features & Tech", "Challenges", "Gallery"].map((tab) => {
              const tabId = tab.toLowerCase().replace(/ & /g, "-")
              return (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tabId)}
                  className={`pb-4 relative flex items-center font-inter ${
                    activeTab === tabId ? "text-white" : "text-gray-400 hover:text-gray-300"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {tabIcons[tabId as keyof typeof tabIcons]}
                  {tab}
                  {activeTab === tabId && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Tab content with animation */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-8">
                    <motion.div
                      className="relative h-64 md:h-80 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => {
                        setActiveImage(project.image)
                        setShowImageModal(true)
                      }}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Eye className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="mb-8">
                    <p className="text-gray-300 mb-6 font-poppins">{project.description}</p>
                  </div>

                  <h2 className="text-2xl font-bold mb-6 font-poppins">Key Features</h2>
                  <ul className="space-y-3">
                    {project.keyFeatures?.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-cyan-400 text-xl leading-none">•</span>
                        <span className="font-poppins">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === "features-tech" && (
                <motion.div
                  key="features-tech"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-6 font-poppins">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <Badge className="bg-[#1a1a2e] text-white py-2 px-4 text-lg font-inter">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-bold mb-4 font-poppins">Tech Stack</h3>
                    <div className="bg-[#0f0f1a] p-6 rounded-lg">
                      <ul className="space-y-2">
                        {project.techStack?.map((tech, index) => (
                          <li key={index} className="flex items-start gap-2 font-poppins">
                            <span className="text-purple-400 text-xl leading-none">•</span>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-xl font-bold mb-4 font-poppins">Key Learnings</h3>
                    <div className="bg-[#0f0f1a] p-6 rounded-lg">
                      <ul className="space-y-2">
                        {project.keyLearnings?.map((learning, index) => (
                          <li key={index} className="flex items-start gap-2 font-poppins">
                            <span className="text-cyan-400 text-xl leading-none">•</span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "challenges" && (
                <motion.div
                  key="challenges"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6 font-poppins">Challenges</h2>
                    <ul className="space-y-3">
                      {project.challenges?.problems.map((problem, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-cyan-400 text-xl leading-none">•</span>
                          <span className="font-poppins">{problem}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6 font-poppins">Solutions</h2>
                    <ul className="space-y-3">
                      {project.challenges?.solutions.map((solution, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + 0.1 * index }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-purple-400 text-xl leading-none">•</span>
                          <span className="font-poppins">{solution}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "gallery" && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-6 font-poppins">Project Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery?.map((img, index) => (
                      <motion.div
                        key={index}
                        className="aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        onClick={() => {
                          setActiveImage(img)
                          setShowImageModal(true)
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center text-gray-500 relative">
                          <Image
                            src={img}
                            alt={`${project.title} gallery image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <Eye className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="space-y-8">
              <motion.div className="bg-[#0f0f1a] rounded-lg p-6" whileHover={{ scale: 1.02 }}>
                <h3 className="text-xl font-bold mb-4 font-poppins">Project Links</h3>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-white mb-3 font-inter"
                  >
                    <Github className="w-5 h-5" /> View Source Code
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div className="bg-[#0f0f1a] rounded-lg p-6" whileHover={{ scale: 1.02 }}>
                <h3 className="text-xl font-bold mb-4 font-poppins">Quick Summary</h3>
                <p className="text-gray-300 mb-4 font-poppins">{project.description.split(".")[0]}.</p>

                <h4 className="font-medium text-gray-400 mb-2 font-inter">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Badge key={tech} className="bg-[#1a1a2e] text-white font-inter">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div className="bg-[#0f0f1a] rounded-lg p-6" whileHover={{ scale: 1.02 }}>
                <h3 className="text-xl font-bold mb-4 font-poppins">Project Navigation</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  {prevProject && (
                    <motion.div whileHover={{ x: -5 }} className="flex-1">
                      <Link
                        href={`/projects/${prevProject.id}`}
                        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors w-full font-inter"
                      >
                        <ArrowLeft className="w-4 h-4" /> Previous Project
                      </Link>
                    </motion.div>
                  )}

                  {nextProject && (
                    <motion.div whileHover={{ x: 5 }} className="flex-1">
                      <Link
                        href={`/projects/${nextProject.id}`}
                        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors w-full font-inter"
                      >
                        Next Project <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Image modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImageModal(false)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[80vh] w-full h-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <Image src={activeImage || "/placeholder.svg"} alt={project.title} fill className="object-contain" />
              <button
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/80"
                onClick={() => setShowImageModal(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating action button to scroll to top */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg z-20 font-inter"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft className="w-5 h-5 transform rotate-90" />
      </motion.button>
    </div>
  )
}
