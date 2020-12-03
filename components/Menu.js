import Link from 'next/Link'

function Menu() {
    return (
        <>
            <Link href="/interactive-projects">
                <a>Interactive Projects</a>
            </Link>
            <Link href="/product-projects">
                <a>Product Design</a>
            </Link>
            <Link href="/minor-projects">
                <a>Minor Projects</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </>
    )
}

export default Menu
