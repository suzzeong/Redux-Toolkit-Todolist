import React from "react"
import Layout from "./Layout";
import styled from "styled-components";

const Home = () => {

    return (

        <Layout>
            <HomeTop>무엇을 할까요?</HomeTop>
            <HomeBottom>
                <button>할일 기록하기</button> 
                <button>TODO LIST</button>
            </HomeBottom>
        </Layout>

    )

}

export default Home;

const HomeTop = styled.div`
    background-color: red;
`

const HomeBottom = styled.div`
    
`