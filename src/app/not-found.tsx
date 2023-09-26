import Link from "next/link"

const NotFound = () => {
    return (
        <div className="text-center text-zinc-400 leading-10 py-10">
            <h1>Oooops....</h1>
            <p className="text-3xl">That page cannot be found</p>
            <p>Go back to the <Link href="/" className="text-sky-600"><b>Homepage</b></Link>
            </p>
        </div>
    )
}

export default NotFound