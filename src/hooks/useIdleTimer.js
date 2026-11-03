// FIX 1: The useIdleTimer hook. Uncomment this whole file.
//
// import { useEffect, useState } from 'react'
//
// // Returns true when the mouse hasn't moved for `timeout` ms.
// export default function useIdleTimer(timeout) {
//   const [isIdle, setIsIdle] = useState(false)
//
//   useEffect(() => {
//     let timer = setTimeout(() => setIsIdle(true), timeout)
//
//     const handleMouseMove = () => {
//       setIsIdle(false)
//       clearTimeout(timer)
//       timer = setTimeout(() => setIsIdle(true), timeout)
//     }
//
//     window.addEventListener('mousemove', handleMouseMove)
//
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove)
//       clearTimeout(timer)
//     }
//   }, [timeout])
//
//   return isIdle
// }
