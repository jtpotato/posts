"use client"

import { useEffect } from "react";

function MouseTracker() {
  function handleMouseMove(e: MouseEvent) {
    const x = e.clientX
    const y = e.clientY
    document.body.style.setProperty("--mouse-x", x + "px")
    document.body.style.setProperty("--mouse-y", y + "px")
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)

    return () => { window.removeEventListener("mousemove", handleMouseMove) }
  }, [])
  
  return (<></>);
}

export default MouseTracker;