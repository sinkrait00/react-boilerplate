import React, { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { mainSlice } from '../../store/main-reducer'

function ResizeDetector({ children }: PropsWithChildren<{}>) {
  const dispatch = useAppDispatch()
  const router = useNavigate()
  const detectResize = () => {
    dispatch(mainSlice.actions.setIsMobile(window.innerWidth < 992))
  }

  useEffect(() => {
    detectResize()
  }, [router])

  useEffect(() => {
    window.addEventListener('resize', detectResize, false)
    return () => {
      window.removeEventListener('resize', detectResize)
    }
  }, [router])
  return <div>{children}</div>
}

export default ResizeDetector
