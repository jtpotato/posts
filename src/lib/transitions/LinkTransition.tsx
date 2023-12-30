"use client"

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { HTMLAttributes, MouseEvent } from "react";

function LinkTransition(props: LinkProps & HTMLAttributes<HTMLAnchorElement> & { type?: "back" | "forward" }) {
  const router = useRouter();
  const handleClick = async (e: MouseEvent) => {
    if (!document.startViewTransition) {
      // browser does not support view transition. Continue the default behavior.
      return;
    } else {
      let transitionClass = "exit-animation"
      // browser supports view transition. Animate the transtion.
      e.preventDefault();
      document.documentElement.classList.remove("entry-animation")
      document.documentElement.classList.add(transitionClass)

      setTimeout(() => {
        router.push(props.href.toString());
        document.documentElement.classList.remove(transitionClass)
        document.documentElement.classList.add("entry-animation")
      }, 200)
    }
  };

  return (
    <Link onClick={handleClick} {...props}>
      {props.children}
    </Link>
  );
}
export default LinkTransition;