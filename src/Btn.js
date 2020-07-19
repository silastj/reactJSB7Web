import React from 'react';
import styled from 'styled-components';


const Btn = styled.button`
    width:100px;
    height:48px;
    background-color:red;
`;

const BtnP = styled(Btn)`
    color:blue;
`;

function BtnA(){
    return (
        <>
            <Btn>Color</Btn>
            <BtnP>Color</BtnP>
        </>
    )
}

export default BtnA;