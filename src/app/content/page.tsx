import Image from "next/image";
import Header from "@/app/Header";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Header/>
            <div>You can find here the different type of content avalaible on the site</div>
        </main>
    );
}