'use client'

export default function Header(){
    return (
        <header>
            <ul className="flex w-1/3 font-bold">
                <a href="/">
                    <li className="">
                        Home
                    </li>
                </a>
                <a href="/content">
                    <li>
                        Content

                    </li>
                </a>
                <a href="/about">
                    <li>
                        About
                    </li>
                </a>
            </ul>
        </header>
    );
}