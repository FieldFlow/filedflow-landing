import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="inline-flex" aria-label="Cruip">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 400 400">
                <path d="M50 250 Q 200 100 350 250" fill="none" stroke="#4299e1" stroke-width="16"></path>

                <circle cx="100" cy="250" r="10" fill="#48cae4"></circle>
                <circle cx="300" cy="250" r="10" fill="#48cae4"></circle>
            </svg>
        </Link>
    );
}
