import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { closeSVG } from '../../../assets/icons'
import { useLocalize } from '../../../hooks/localization/useLocalize'
import styles from '../Modal.module.scss'

function ModalAuth({ onClose }: any) {
  const [locale] = useLocalize()
  const [authStep, setAuthStep] = useState(0)

  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <div className={styles.modal_auth}>
        <span aria-hidden="true" className={styles.modal_auth__close_btn} onClick={onClose}>
          <img src={closeSVG} alt="" />
        </span>
      </div>
    </OutsideClickHandler>
  )
}

export default ModalAuth
