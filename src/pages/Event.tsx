import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import gif from "../img/react.gif"

export function Event(){
    const { slug } = useParams<{ slug: string}>()

    function loadingImage(){
        return(
            <div className="flex flex-1 flex-col justify-center items-center">
                <strong className="p-6 text-4xl">Selecione a aula que deseja assistir na sidebar ao lado</strong>
                <img src={gif}/>
            </div>
        )
    }

    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                {slug ? <Video lessonSlug={slug}/> : loadingImage()}
                <Sidebar/>
            </main>
        </div>
        
    )
}