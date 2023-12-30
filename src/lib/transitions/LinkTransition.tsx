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
      if (props.type == "back") {
        document.documentElement.classList.add('back-transition')
      }
      // browser supports view transition. Animate the transtion.
      e.preventDefault();
      router.push(props.href.toString());
      // const transition = document.startViewTransition(() => {
      //   router.push(props.href.toString());
      // });

      // try {
      //   await transition.finished;
      // } finally {
      //   document.documentElement.classList.remove('back-transition');
      // }
    }
  };

  return (
    <Link onClick={handleClick} {...props}>
      {props.children}
    </Link>
  );
}
export default LinkTransition;