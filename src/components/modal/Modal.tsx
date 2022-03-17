import React from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import styles from './Modal.module.scss'
import { modalSlice } from '../../store/modal'
import ModalAuth from './Modal-auth/Modal-auth'

const modalAnimation = {
  exit: {
    x: '100%',
    transition: { duration: 0.5 },
  },
  enter: {
    x: 0,
    transition: { duration: 0.5 },
  },
}

export enum EModalTypes {
  LINKS = 'LINKS',
  LANG = 'LANG',
  AUTH = 'AUTH',
}

function Modal() {
  const { isOpen, config, data } = useAppSelector((state) => state.modalReducer)
  const dispatch = useAppDispatch()
  const handleClose = () => dispatch(modalSlice.actions.closeModal())
  const modalRender = () => {
    switch (config.type) {
      case EModalTypes.LINKS:
        return <div />
      case EModalTypes.LANG:
        return <div />
      case EModalTypes.AUTH:
        return <ModalAuth onClose={handleClose} />
      default:
        return null
    }
  }

  return (
    <motion.div
      className={styles.modal}
      variants={modalAnimation}
      initial="exit"
      exit="exit"
      animate={isOpen ? 'enter' : 'exit'}
    >
      {modalRender()}
    </motion.div>
  )
}

export default Modal
