import {useEffect} from "react";
import {gql, useQuery } from "@apollo/client";
import {client} from "./lib/apollo";
import { Event } from "./pages/Event";

function App() {
  return (
    <Event/>
  )
}

export default App

