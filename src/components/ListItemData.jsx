import { Box, Button, Divider, ListItem, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, edit, fetchTodo } from '../features/todos/todoSlice'

const ListItemData = ({todo}) => {

  const dispatch = useDispatch()
  const {isSuccess} = useSelector(state => state.todos)

  const handleDelete = (_id) =>{
    dispatch(deleteTodo(_id))
    if(isSuccess){
      dispatch(fetchTodo())
    }
  }

  const handleEdit = (todo) =>{
    dispatch(edit(todo))
  }


  return (
    <div>
        <ListItem>
            <Box sx={{display:'flex' , flexDirection:'column' , flexGrow:'1'}} >
            <Typography variant='h4'>{todo.title}</Typography>
            <Typography variant='body1'>{todo.description}</Typography>
            </Box>
            <Button variant='contained' color='warning' sx={{marginRight:'5px'}} onClick={()=>handleEdit(todo)}>Edit</Button>
            <Button variant='contained' color='error' onClick={()=>handleDelete(todo._id)}>Delete</Button>
        </ListItem>
            <Divider/>
    </div>
  )
}

export default ListItemData