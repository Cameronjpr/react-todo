import { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 15em;
  margin: 0 auto;
  padding: 0 1.5em 1em 1.5em;
  border-bottom: 1px solid #CCC;
`

const StyledLabel = styled.label`
  padding-top: 5px;
  text-align: left;
`

const StyledInput = styled.input`
  margin-bottom: 10px;
  margin-top: 3px;
  border: 1px solid #CCC;
  border-radius: 3px;
  font-size: inherit;
  padding: 5px;
`

const SubmitButton = styled.input`
  background: linear-gradient(16deg, rgba(127,153,255,1) 0%, rgba(246,158,255,1) 100%);
  border-radius: 3px;
  font-size: inherit;
  padding: 5px;
`

const Composer = (props) => {
  const [title, setTitle] = useState("")
  
  const clearValues = () => {
    setTitle("")
  }
  
  return (
    <StyledForm onSubmit={(e) => { props.handleSubmit(e, title); clearValues() }}>
      <StyledLabel>Title</StyledLabel>
      <StyledInput type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
      <SubmitButton type="submit" value="Create"/>
    </StyledForm>
  );
}

export default Composer;

