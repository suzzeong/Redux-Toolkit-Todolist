import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoHome from "../pages/TodoHome"
import TodoDetail from "../pages/TodoDetail"
import TodoForm from "../pages/TodoForm"
import Comment from "../components/Comment"
import TodoList from "../pages/TodoList";
import TodoDetailChange from "../pages/TodoDetailChange";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<TodoHome/>}/>
                {/* <Route path ="/detail/:id" element={<TodoDetail/>}/> */}
                <Route path ="/detail" element={<TodoDetail/>}/>
                <Route path ="/form" element={<TodoForm/>}/>
                <Route path ="/todolist" element={<TodoList/>}/>

                <Route path ="/comment" element={<Comment/>}/>
                <Route path ="/detailchange" element={<TodoDetailChange/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;