import { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Todo = (props) => {
  const { title, completed } = props.data;
  const [ hover, setHover ] = useState(false)

  const fade = useSpring({
    opacity: completed ? 0.5 : 1,
    from: {
      opacity: completed ? 1 : 0.5 
    }
  })

  const Title = styled.h2`
    text-decoration: ${completed ? "line-through" : "none" }
    margin: 0;
  `
  
  const TodoWrapper = styled.article`
    text-align: left;
    padding: 0.5em 0 0.5em 0;
    margin: 1em 1em 0 1em;
    border-radius: 2px;
    background-color: #FCFDFF;  
    box-shadow: ${ hover ? "0px 15px 20px -15px #CCC;" : "0px 0px 0px 0px #FFF;" }  
    transition: box-shadow 1s;
  `

  const Complete = styled.button`
    margin-left: -22px;
    background-color: #C7D66D;
    border-radius: 50px;
    border: none;
    font-size: 18px;
    height: 44px;
    width: 44px;
  `

  const Delete = styled.button`
    margin-right: -22px;
    background-color: #E94F37;
    border-radius: 50px;
    border: none;
    color: #EEE;
    font-size: 18px;
    height: 44px;
    width: 44px;
  `

  const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `

  console.log(hover)
  return (
    <animated.div style={fade}>
      <TodoWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Row>
          <Complete onClick={() => props.handleCompletion(props.index)}>✓</Complete>
          <Title>{title}</Title>
          <Delete onClick={() => props.handleDelete(props.index)}>X</Delete>
        </Row> 
      </TodoWrapper>
    </animated.div>
  )
}

export default Todo;
