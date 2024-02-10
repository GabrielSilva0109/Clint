import React from "react"
import styled from "styled-components"

const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    color: black;
    font-family: 'Poppins', sans-serif;
`
 
const Header = styled.div`
    width: 100%;
    background-color: #333;
    color: #fff;
    height: 50px;
`

export default function TollBar() {
  return (
    <Header>
        <div>
            <Title>Clint KanBan</Title>
        </div>
    </Header>
  )
}
