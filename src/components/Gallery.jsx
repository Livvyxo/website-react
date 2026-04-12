import { motion } from 'framer-motion'
import { useState } from 'react'
import './Gallery.css'

const photos = [
  { src: '/photos/photo2.png', alt: 'Liv' },
  { src: '/photos/photo4.png', alt: 'Liv' },
  { src: '/photos/photo5.png', alt: 'Liv' },
  { src: '/photos/photo3.png', alt: 'Liv' },
]

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="gallery">
      <motion.div
        className="gallery__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="gallery__label">Gallery</span>
        <h2 className="gallery__title">A Glimpse</h2>
      </motion.div>

      <div className="gallery__grid">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            className={`gallery__item ${hoveredIndex === i ? 'is-hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== i ? 'is-dimmed' : ''}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="gallery__img-wrapper">
              <img src={photo.src} alt={photo.alt} className="gallery__img" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
