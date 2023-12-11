import BobaLink from "@/boba-ui/link/BobaLink"
import Link from "next/link"

const components = {
    h1: (props) => {
        return <h1 className="font-display font-bold text-4xl" {...props} />
    },
    h2: (props) => {
        return <h2 className="font-display font-bold text-3xl" {...props} />
    },
    h3: (props) => {
        return <h3 className="font-display font-bold text-2xl" {...props} />
    },
    h4: (props) => {
        return <h4 className="font-display font-bold text-xl" {...props} />
    },
    h5: (props) => {
        return <h5 className="font-display font-bold text-lg" {...props} />
    },
    ul: (props) => {
        return <ul className="list-disc list-inside" {...props} />
    },
    p: (props) => {
        return <p className="font-body text-lg mb-6 inline-block" {...props} />
    },
    a: (props) => {
        return <Link {...props} className="underline" />
    },
    hr: (props) => {
        return <hr className="my-8 border-black/50" {...props} />
    }
}

export default components