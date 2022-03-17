import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
import styles from './Dropdown.module.scss'
import { arrowAnimation, dropSelectAnimation } from './animation'
import { arrowSVG } from '../../assets/icons'

interface IDropdownSelectProps {
  activeOption: any
  onClick: (option: any) => any
  options: any[]
  className?: string
  classNameContainer?: string
  propValue?: string
  propLabel?: string
  zIndex?: number
}
function DropdownSelect({
  activeOption,
  zIndex = 0,
  propValue = 'value',
  propLabel = 'label',
  onClick,
  options,
  className,
  classNameContainer,
}: IDropdownSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  const handleClose = () => setIsOpen(false)
  const handleClick = (option: any) => () => onClick(option)
  const handleActiveOption = (option: any) => option[propValue] === activeOption[propValue]
  const optionElements = options.map((option, index) => (
    <div
      key={index}
      className={`${styles.dropdown_select_item} ${
        handleActiveOption(option) ? styles.active : ''
      }`}
      onClick={handleClick(option)}
      aria-hidden="true"
    >
      {option.element || option[propLabel]}
    </div>
  ))

  return (
    <div
      aria-hidden="true"
      className={styles.dropdown_select_wrapper}
      onClick={toggleOpen}
      style={{ zIndex }}
    >
      <div className={`${styles.dropdown_select} ${className || ''}`}>
        <span>{activeOption?.element || activeOption[propLabel] || ''}</span>
        <motion.div variants={arrowAnimation} animate={isOpen ? 'enter' : 'exit'}>
          <img src={arrowSVG} alt="" />
        </motion.div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <OutsideClickHandler onOutsideClick={handleClose}>
            <motion.div
              variants={dropSelectAnimation}
              initial="hidden"
              exit="exit"
              animate={isOpen ? 'enter' : 'exit'}
              className={`${styles.dropdown_select_container} ${classNameContainer || ''}`}
            >
              {optionElements}
            </motion.div>
          </OutsideClickHandler>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DropdownSelect
