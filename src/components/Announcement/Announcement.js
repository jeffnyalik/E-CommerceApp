
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: teal;
    height:30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () =>{
    return (
        <Container>
            Super deal!! free shipping on orders over 50%
        </Container>
    );
};

export default Announcement;