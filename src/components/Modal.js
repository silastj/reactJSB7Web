import React, { useState } from 'react';
import styled from 'styled-components';
import ModalOne from './Modal2';

const ModalBackGround = styled.div`
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:90;
    background-color:rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
`;
const ModalArea = styled.div`
    background-color:#ffffff;
    padding:10px;
`;


function Modal(props) {
   
    const handleBackgroundClick = () =>{
        props.setVisible(false);
    }


    return(
        <>
            {props.visible === true &&
                <ModalBackGround onClick={handleBackgroundClick}>
                <ModalArea>
                {props.children} 
                </ModalArea>
            </ModalBackGround>           
            }
               
        </>  
     
    );

    
}


export default Modal;

