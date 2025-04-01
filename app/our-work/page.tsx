"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Layout } from "@/components/layout"
import Link from "next/link"
import patient1Before from "@/public/patient1-before.jpeg";
import patient1After from "@/public/patient1-after.jpeg";
import patient2Before from "@/public/patient2-before.jpeg";
import patient2After from "@/public/patient2-after.jpeg";
import patient3Before from "@/public/patient3-before.jpeg";
import patient3After from "@/public/patient3-after.jpeg";

const caseStudies = [
  {
    title: "Complete Smile Makeover",
    description: "A comprehensive transformation including veneers, whitening, and gum contouring.",
    before: patient1Before,
    after: patient1After,
    category: "Cosmetic Dentistry",
    location: "Balajipuram Clinic"
  },
  {
    title: "Dental Implant Restoration",
    description: "Replacing missing teeth with natural-looking, functional implants.",
    before: patient2Before,
    after: patient2After,
    category: "Implant Dentistry",
    location: "Township Clinic"
  },
  {
    title: "Dental Implant",
    description: "An 18-month journey to perfectly aligned teeth using invisible aligners.",
    before: patient3Before,
    after: patient3After,
    category: "Restorative Dentistry",
    location: "Township Clinic"
  },
]

const categories = ["All", ...new Set(caseStudies.map(study => study.category))]
const locations = ["All", ...new Set(caseStudies.map(study => study.location))]

export default function OurWorkPage() {
  const [filteredStudies, setFilteredStudies] = useState(caseStudies)
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeLocation, setActiveLocation] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null)

  useEffect(() => {
    const filtered = caseStudies.filter(study => 
      (activeCategory === "All" || study.category === activeCategory) &&
      (activeLocation === "All" || study.location === activeLocation) &&
      (study.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       study.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
       study.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredStudies(filtered)
  }, [activeCategory, activeLocation, searchTerm])

  const handleStudyClick = (study: typeof caseStudies[0]) => {
    setSelectedStudy(study)
  }

  const handleCloseModal = () => {
    setSelectedStudy(null)
  }

  const handlePrevStudy = () => {
    const currentIndex = filteredStudies.findIndex(study => study.title === selectedStudy?.title)
    const prevIndex = (currentIndex - 1 + filteredStudies.length) % filteredStudies.length
    setSelectedStudy(filteredStudies[prevIndex])
  }

  const handleNextStudy = () => {
    const currentIndex = filteredStudies.findIndex(study => study.title === selectedStudy?.title)
    const nextIndex = (currentIndex + 1) % filteredStudies.length
    setSelectedStudy(filteredStudies[nextIndex])
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50/50 to-white py-20 dark:from-blue-950/10 dark:to-background min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">
              Transforming Smiles, <span className="text-blue-600">Changing Lives</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of dental transformations and see the remarkable results we&apos;ve achieved for our patients.
            </p>
          </motion.div>

          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end mt-4 md:mt-0">
              {locations.map((location, index) => (
                <motion.button
                  key={location}
                  onClick={() => setActiveLocation(location)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeLocation === location
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {location}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="relative mb-8">
            <Input
              type="text"
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredStudies.map(study => (
                <motion.div
                  key={study.title}
                  layoutId={study.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  onClick={() => handleStudyClick(study)}
                >
                  <div className="relative h-64">
                    <Image
                      src={study.before}
                      alt={`Before - ${study.title}`}
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <Image
                      src={study.after}
                      alt={`After - ${study.title}`}
                      fill
                      className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-1">{study.title}</h3>
                    <p className="text-sm">{study.category} - {study.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {selectedStudy && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={handleCloseModal}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-4xl w-full mx-4 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                    onClick={handleCloseModal}
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <h3 className="text-2xl font-semibold mb-4">{selectedStudy.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Before</h4>
                      <Image
                        src={selectedStudy.before}
                        alt={`Before - ${selectedStudy.title}`}
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">After</h4>
                      <Image
                        src={selectedStudy.after}
                        alt={`After - ${selectedStudy.title}`}
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedStudy.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {selectedStudy.category} - {selectedStudy.location}
                  </p>
                  <div className="flex justify-between">
                    <Button onClick={handlePrevStudy} variant="outline">
                      <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                    <Button onClick={handleNextStudy} variant="outline">
                      Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your smile? Book a consultation with our expert team and start your journey to a confident, radiant smile.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
              >
                Schedule Your Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

