
import React from 'react'
import TodoItem from '../../atoms/TodoItem/TodoItem'
import { useTasks } from '../../../context/TaskProvider'
import TaskProvider from '../../../context/TaskProvider'


export default function TodoList() {

  const { tasks } = useTasks()
  return (
      
    <table>
      <tbody>
        {
 
          tasks.map((task, i) => 
            <TodoItem key={i} {...task} />
          )
        }
      </tbody>
    </table>
   
  )
}