"use client"

import { CSSProperties, useEffect, useRef, useState } from "react"
import styles from "./PostsList.module.css"

function PostListBackground() {
  const [rectPos, setRectPos] = useState([-90, -90])
  const postListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
      if (!postListRef.current) return;

      const
          rect = postListRef.current.getBoundingClientRect(),
          rectX = rect.x,
          rectY = rect.y

      setRectPos([rectX, rectY])
  }, [])

  return (<>
    <div className={"absolute top-0 left-0 w-full h-full -z-10 " + styles.postlist} style={{ "--rect-x": rectPos[0] + "px", "--rect-y": rectPos[1] + "px" } as CSSProperties} ref={postListRef}></div>
  </>);
}

export default PostListBackground;