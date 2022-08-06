import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList"
import TodoDetail from "../pages/TodoDetail"
import TodoForm from "../pages/TodoForm"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<TodoList/>}/>
                {/* <Route path ="/detail/:id" element={<TodoDetail/>}/> */}
                <Route path ="/detail" element={<TodoDetail/>}/>
                <Route path ="/form" element={<TodoForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;