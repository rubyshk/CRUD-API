import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  addTodo, getAllTodos, removeTodo, updateTodoService } from "./todoService";

const todoSlice = createSlice({
    name : 'todos',
    initialState : {
        isLoading : false,
        isSuccess : false,
        isError : false ,
        todos : [],
        edit : {todo:{} , editMode : false}
    },
    reducers:{
        edit : (state ,action) => {
            return{
                ...state,
                edit : {todo : action.payload , editMode : true}
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodo.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.todos=action.payload
        })
        .addCase(fetchTodo.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false
            state.isError=true;
            state.todos=null
        })
        .addCase(saveTodo.pending , state => {
            state.isLoading = true,
            state.isSuccess = false
        })
        .addCase(saveTodo.fulfilled , (state,action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.todos = [action.payload , ...state.todos],
            state.isError = false
        })
        .addCase(saveTodo.rejected , state => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true
        })
        .addCase(deleteTodo.pending , state => {
            state.isLoading = true,
            state.isSuccess = false
        })
        .addCase(deleteTodo.fulfilled , (state,action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
            // state.todos = state.todos.filter((item) => item._id !== action.payload)
        })
        .addCase(deleteTodo.rejected , state => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true
        }).addCase(updateTodo.pending , state => {
            state.isLoading = false,
            state.isSuccess = false
        })
        .addCase(updateTodo.fulfilled , (state,action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.todos = state.todos.map(item => item._id === action.payload._id ? action.payload : item)
            state.edit = {todo : {} , editMode:false}
        })
        .addCase(updateTodo.rejected , state => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true
        })
    }
})
export const {edit} = todoSlice.actions
export default todoSlice.reducer

export const fetchTodo = createAsyncThunk("FETCH/TODOS",async()=>{
    try {
        return await getAllTodos()
    } catch (error) {
        console.log("something went wrong"+error)
    }
})

export const saveTodo = createAsyncThunk("ADD/TODO",async(formData)=>{
    try {
        return await addTodo(formData)
    } catch (error) {
        console.log(error)
    }
})

export const deleteTodo = createAsyncThunk("DELETE/TODO" , async(_id)=>{
    try {
        return await removeTodo(_id)
    } catch (error) {
        console.log(error)
    }
})

export const updateTodo = createAsyncThunk("UPDATE?TODO", async(formData) => {
    try {
        return await updateTodoService(formData)
    } catch (error) {
        console.log(error)
    }
})