import { motion } from "framer-motion"

export function DentalBackground() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  }

  const icons = [
    { d: "M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8m-5 6a5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5m5-3a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1z", title: "Tooth" },
    { d: "M19.4 5c-.7-1.2-2-2-3.4-2H8c-1.4 0-2.7.8-3.4 2-1.3 2.2-.6 4.9 1.4 6.5l1.7 1.3c.3.3.5.7.5 1.1v6.1c0 1.1.9 2 2 2h3.6c1.1 0 2-.9 2-2v-6.1c0-.4.2-.8.5-1.1l1.7-1.3c2-1.6 2.7-4.3 1.4-6.5zM12 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z", title: "Toothbrush" },
    { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm4-5h-3v3h-2v-3H8v-2h3V8h2v5h3v2z", title: "Dental Floss" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map((icon, index) => (
        Array.from({ length: 16 }).map((_, i) => (
          <motion.svg
            key={`${index}-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 40 + 20}px`,
              width: `${Math.random() * 40 + 20}px`,
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: Math.random() * 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <title>{icon.title}</title>
            <path d={icon.d} className="text-primary/10 dark:text-primary/5" />
          </motion.svg>
        ))
      ))}
    </div>
  )
}

