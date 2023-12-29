import BobaLink from "@/boba-ui/link/BobaLink"
import fixImageSrc from "@/lib/images/fixImageSrc"
import Image from "next/image"
import Link from "next/link"
import { JSX, ClassAttributes, HTMLAttributes, IframeHTMLAttributes } from "react"
import YouTubeEmbed from "./YouTubeEmbed"

const components = {
    h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => {
        return <h1 className="font-display font-bold text-4xl" {...props} />
    },
    h2: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => {
        return <h2 className="font-display font-bold text-3xl" {...props} />
    },
    h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => {
        return <h3 className="font-display font-bold text-2xl" {...props} />
    },
    h4: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => {
        return <h4 className="font-display font-bold text-xl" {...props} />
    },
    h5: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => {
        return <h5 className="font-display font-bold text-lg" {...props} />
    },
    ul: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement>) => {
        return <ul className="list-disc list-inside" {...props} />
    },
    p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => {
        return <p className="font-body text-lg my-4 inline-block" {...props} />
    },
    a: (props: any) => {
        return <Link {...props} className="underline" />
    },
    hr: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHRElement> & HTMLAttributes<HTMLHRElement>) => {
        return <hr className="my-8 border-black/50" {...props} />
    },
    img: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & HTMLAttributes<HTMLImageElement> & { src: string, alt: string }) => {
        return <img {...props} src={fixImageSrc(props.src)} />
    },
    YouTubeEmbed: (props: { src: string }) => {
        return <YouTubeEmbed src={props.src} />
    }
}

export default components