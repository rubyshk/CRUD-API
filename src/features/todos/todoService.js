import axios from "axios"

export const getAllTodos = async () => {
    const response = await axios.get('/api/todo')
    return response.data
}

export const addTodo = async(formData) =>{
    const response = await axios.post('/api/todo' , formData)
    return response.data
}

export const removeTodo = async(_id) =>{
    const response = await axios.delete('/api/todo/' + _id)
    return response.data
}

export const updateTodoService = async(formData) => {
    const {_id ,title , description} = formData
    const response = await axios.put('/api/todo/' + _id , {title  , description })
    return response.data
    // const response = await axios.put('/api/todo/' + formData._id , {title : formData.title , description : formData.description})
}