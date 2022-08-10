import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useTextarea = () => {

    const param = useParams()
    const { todos } = useSelector((state) => state.todos);
    const todo = todos.find((todo) => todo.id === parseInt(param.id));

    const [value, setValue] = useState(todo.content)

    const handler = (e) => {
        setValue(e.target.value);
    }

    return [value, handler]

}
export default useTextarea;