import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import React from "react";
import styled from 'styled-components';

const Container = styled.div 
`
    height: 60px;
`;

const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: flex-end;
`;
const Center = styled.div`
    flex: 1;
    text-align:center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const Logo = styled.h2`
    font-weight: bold;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    margin-left: 25px;
    padding: 5px;
    align-items: center;
`;

const Input = styled.input`
    border:none;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () =>{
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>ENG</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color: 'gray', fontSize: 16}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>App</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}


export default Navbar;