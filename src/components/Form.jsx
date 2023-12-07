import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { saveTodo, updateTodo } from '../features/todos/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
  
  const dispatch = useDispatch()
  const {edit} = useSelector(state => state.todos)

  const [formData , setFormData] = useState({
    title : '',
    description : ''
  })
  const {title , description} = formData

  const handleChange = (e) =>{
    setFormData({ 
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(edit.editMode){
      dispatch(updateTodo({_id : edit.todo._id , title , description}))
    }else{
      dispatch(saveTodo(formData))
    }
    setFormData({
      title : '',
      description : ''
    })
  }

  useEffect(()=>{
    setFormData({
      title : edit.todo.title,
      description : edit.todo.description
    })
  },[edit])


  return (
    <>
        <Typography sx={{margin:'20px'}} variant='h3' align='center'>
            Enter your task here...
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField variant='outlined' label='Enter Title' fullWidth
        name='title'
        value={title}
        onChange={handleChange}
        required
        ></TextField>
        <TextField sx={{margin:'20px 0px'}} variant='outlined' multiline rows={4} label='Enter Description Here...' fullWidth
        name='description'
        value={description}
        onChange={handleChange}
        required
        ></TextField>
        <Button type='submit' variant='contained' color="success" fullWidth>Save</Button>
        </form>
    </>
  )
}

export default Form