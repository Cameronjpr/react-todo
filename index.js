import { useState, useEffect } from 'react'
import Meta from '../src/Meta'
import Todo from '../src/Todo'
import Composer from '../src/Composer'
import styled from 'styled-components'

const TodosList = styled.ul`
  padding: 0;
`

const Wrapper = styled.main`
  padding: 1em;
  text-align: center;
  background-color: #EEE;
  width: 20em;
  margin: 0 auto;
  margin-top: 10vh;
  border-radius: 5px;
  box-shadow: 0px 10px 7px -5px #DDD
`

const Index = () => {
  const [todos, setTodos] = useState([{ title: "Something to do", completed: false }])

  const handleSubmit = (e, t) => {
    setTodos([...todos, 
      { title: t, completed: false }
    ])

    e.preventDefault()
  }
  
  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => index !== i))
  }

  const handleCompletion = (index) => {
    setTodos(todos.map((todo, i) => {
      if (index == i)
        todo.completed = !todo.completed;
      return todo;
    }))
  }

  return (
    <>
      <Meta />
      <Wrapper>
        <h1>Another Todo 🙄</h1>
        <Composer handleSubmit={handleSubmit}/>
        <TodosList>
          { todos.map((todo, index) => (
            <Todo key={index} index={index} data={todo} handleDelete={handleDelete} handleCompletion={handleCompletion}/>
            ))}
        </TodosList>
      </Wrapper>
    </>
  )
}

export default Index;