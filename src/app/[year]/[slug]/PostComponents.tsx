import BobaLink from "@/boba-ui/link/BobaLink"
import Link from "next/link"
import { JSX, ClassAttributes, HTMLAttributes } from "react"

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
        return <hr className="my-16 border-black/50" {...props} />
    }
}

export default components