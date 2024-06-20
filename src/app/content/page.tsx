import Image from "next/image";
import Header from "@/app/Header";

export default function Home() {
    return (
        <main className="">
            <div>You can find here the different type of content avalaible on the site</div>
            <video width="1240" height="720" controls>
                <source src="C:/Users/Sinis/Videos/Enr/films/StarWars/StarWarsEpisode_9_LAscensionDeSkywalker.mkv" type="video/mkv"/>
                Your browser does not support the video tag.
            </video>
        </main>
    );
}