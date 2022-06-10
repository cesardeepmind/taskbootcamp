import React from 'react'
import { useParams } from 'react-router-dom'

export default function TasksDetailPage({task}) {

    const {id} = useParams();
    const {title, description} = task;

  return (
    <div>
        <h1>Task Detail - {id}</h1>
        <h2>{title}</h2>
        <h3>{description}</h3>
    </div>
  )
}
