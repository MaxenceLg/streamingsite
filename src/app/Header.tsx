'use client'

export default function Header(){
    return (
        <ul className="flex justify-between w-1/2">
        <li>

            <a href="/">Home</a>
        </li>
        <li>

            <a href="/content">Content</a>
        </li>
        <li>

            <a href="/about">About</a>
        </li>
    </ul>
    );
}