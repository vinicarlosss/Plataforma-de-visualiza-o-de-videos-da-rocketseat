import {useEffect} from "react";
import {gql, useQuery } from "@apollo/client";
import {client} from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`
function App() {

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  console.log(data)

  interface Lesson{
    id: string;
    title: string;
  }

  return (
     <ul>
      {data?.lessons.map(lesson=>{
        return <li key={lesson.id}>{lesson.title}</li>
      })}
     </ul>
  )
}

export default App

