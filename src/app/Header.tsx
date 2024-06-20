'use client'

export default function Header(){
    return (
        <header>
            <ul>
                <li>
                    <a href="/">
                        <p>Home</p>
                    </a>
                </li>
                <li>
                    <a href="/content">
                        <p>Content</p>
                    </a>
                </li>
                <li>
                    <a href="/about">
                        <p>About</p>
                    </a>
                </li>
            </ul>
        </header>
    );
}