import React, { ReactElement, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './Dropdown.module.scss'
import { arrowAnimation, dropAnimation } from './animation'
import { arrowSVG } from '../../assets/icons'

interface IDropdownClassNames {
  wrapper?: string
  root?: string
  container?: string
}

interface IDropdownProps {
  title: string | ReactElement
  elements: ReactElement[]
  className?: IDropdownClassNames
  open?: boolean
}

function Dropdown({ className, open = false, title, elements }: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(open)
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <div
      className={`${styles.dropdown_wrapper} ${className?.wrapper}`}
      aria-hidden="true"
      onClick={toggleOpen}
    >
      <div className={`${styles.dropdown} ${className?.root}`}>
        {title}
        <motion.div variants={arrowAnimation} animate={isOpen ? 'enter' : 'exit'}>
          <img src={arrowSVG} alt="" />
        </motion.div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            variants={dropAnimation}
            initial="hidden"
            exit="exit"
            animate={isOpen ? 'enter' : 'exit'}
            className={`${styles.dropdown_container} ${className?.container}`}
          >
            {elements}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown
