"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Layout } from "@/components/layout"
import Link from "next/link"

const galleryImages = [
  { 
    src: "https://i.ibb.co/cyVyPvg/Whats-App-Image-2024-12-12-at-18-33-56.jpg", 
    alt: "Balajipuram Clinic Reception", 
    location: "Balajipuram",
    category: "Interior"
  },
  { 
    src: "https://i.ibb.co/vkkzQt1/Whats-App-Image-2024-12-12-at-18-33-59.jpg", 
    alt: "Township Clinic Dental Chair", 
    location: "Township",
    category: "Equipment"
  },
  { 
    src: "https://i.ibb.co/dLrHLSh/Whats-App-Image-2024-12-12-at-18-33-58.jpg", 
    alt: "Balajipuram Clinic X-ray Room", 
    location: "Balajipuram",
    category: "Equipment"
  },
  { 
    src: "https://i.ibb.co/qxvpT4Z/Whats-App-Image-2024-12-12-at-10-44-39.jpg", 
    alt: "Township Clinic Waiting Area", 
    location: "Township",
    category: "Interior"
  },
  { 
    src: "/placeholder.svg?height=600&width=800&text=Balajipuram+Sterilization+Room", 
    alt: "Balajipuram Clinic Sterilization Room", 
    location: "Balajipuram",
    category: "Equipment"
  },
  { 
    src: "/placeholder.svg?height=600&width=800&text=Township+Consultation+Room", 
    alt: "Township Clinic Consultation Room", 
    location: "Township",
    category: "Interior"
  },
  { 
    src: "/placeholder.svg?height=600&width=800&text=Balajipuram+Equipment", 
    alt: "Balajipuram Clinic Advanced Dental Equipment", 
    location: "Balajipuram",
    category: "Equipment"
  },
  { 
    src: "/placeholder.svg?height=600&width=800&text=Township+Exterior", 
    alt: "Township Clinic Exterior", 
    location: "Township",
    category: "Exterior"
  },
  { 
    src: "/placeholder.svg?height=600&width=800&text=Balajipuram+Treatment+Room", 
    alt: "Balajipuram Treatment Room", 
    location: "Balajipuram",
    category: "Interior"
  },
  { 
    src: "/placeholder.svg?height=600&width=800&text=Township+Smile+Makeover", 
    alt: "Township Clinic Smile Makeover Result", 
    location: "Township",
    category: "Results"
  },
  { 
    src: "/placeholder.svg?height=600&width=800&text=Balajipuram+Team", 
    alt: "Balajipuram Clinic Team", 
    location: "Balajipuram",
    category: "Team"
  },
  { 
    src: "/placeholder.svg?height=600&width=800&text=Township+Technology", 
    alt: "Township Clinic Advanced Technology", 
    location: "Township",
    category: "Equipment"
  },
]

const categories = ["All", ...new Set(galleryImages.map(img => img.category))]
const locations = ["All", ...new Set(galleryImages.map(img => img.location))]

export default function GalleryPage() {
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeLocation, setActiveLocation] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  useEffect(() => {
    const filtered = galleryImages.filter(img => 
      (activeCategory === "All" || img.category === activeCategory) &&
      (activeLocation === "All" || img.location === activeLocation) &&
      (img.alt.toLowerCase().includes(searchTerm.toLowerCase()) || 
       img.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
       img.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredImages(filtered)
  }, [activeCategory, activeLocation, searchTerm])

  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage?.src)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage?.src)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
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
              Explore Our <span className="text-blue-600">State-of-the-Art Facilities</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a virtual tour of our modern clinics in Balajipuram and Township. 
              Experience the comfort and technology that await you at Confidental.
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
              placeholder="Search images..."
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
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layoutId={image.src}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-1">{image.alt}</h3>
                    <p className="text-sm">{image.location} - {image.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {selectedImage && (
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
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[70vh] object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{selectedImage.alt}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedImage.location} - {selectedImage.category}
                  </p>
                  <div className="flex justify-between">
                    <Button onClick={handlePrevImage} variant="outline">
                      <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                    <Button onClick={handleNextImage} variant="outline">
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
              Experience our cutting-edge technology and comfortable environments in person. 
              Book your appointment today and visit one of our modern clinics.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
              >
                Book an Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

