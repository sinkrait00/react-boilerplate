import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Preloader from '../preloader/Preloader'

interface IFetchSmoothlyProps {
  loading: boolean
}

// eslint-disable-next-line react/function-component-definition
function FetchSmoothly({ children, loading }: PropsWithChildren<IFetchSmoothlyProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<string | number>('auto')
  useEffect(() => {
    if (ref.current?.scrollHeight) {
      setHeight(ref.current?.scrollHeight)
    }
  }, [ref.current?.scrollHeight])

  function animation() {
    if (!loading) {
      return 'enter'
    }
    return 'exit'
  }
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          variants={{
            // exist: {
            //   maxHeight: height,
            //   height,
            //   opacity: 1,
            // },
            enter: {
              opacity: 1,
              maxHeight: height,
              transition: {
                opacity: {
                  delay: 0.5,
                },
                duration: 0.5,
              },
            },
            exit: {
              opacity: 0,
              maxHeight: 0,
              transition: {
                opacity: {
                  delay: 0.5,
                },
                duration: 0.5,
              },
            },
          }}
          initial="exit"
          animate={animation()}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
export default FetchSmoothly
