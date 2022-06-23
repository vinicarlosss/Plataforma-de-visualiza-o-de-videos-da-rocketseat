import React from "react"
import { Link } from "react-router-dom";
import gif from "../img/react.gif"
import { Logo } from "../components/Logo";

export function Home(){
        return(
            <div className="w-full py-5 flex flex-col items-center justify-center">
                <div className="mb-36">
                    <Logo/>
                </div>
                <strong className="mb-8 text-4xl hover:text-blue-500 transition-colors">
                    Clique no React para começar!
                </strong>
                <Link to={`/Event`} className="flex flex-1 justify-center items-center">
                    <img src={gif}/>
                </Link>
            </div>

        )
    }