import * as React from "react"

export default function ArrowLeft(props) {
    return (
        <svg
            height={30}
            viewBox="0 0 21 21"
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M11.5 14.5l-4-4 4-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
