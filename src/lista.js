import React, { useState, useEffect } from "react";
import SearchBox from './components/SearchBox';
import styled from 'styled-components';


const Li = styled.li`
cursor:pointer;
`;




function Lista() {

    const [ list, setList] = useState([]);

        useEffect(()=> {
            setList([
                {title: "Comprar o bolo", done:false},
                {title: "Pegar o cachorro no Petshop", done:true},
                {title: "Gravar aula", done:false}
            ]);
        }, []);

        function addAction(newItem){
            let newList = [...list, {title:newItem, done:false}];
            setList(newList);
        }
   
        function handleToggleDone(index){
            let newList = [ ...list ];

            newList[index].done = !newList[index].done;

            setList(newList);
        }

    
    return(

        <>
            <h1>Lista de Tarefas:</h1>
            <SearchBox type="text" frasePadrao="Faça a sua busca..."
            onEnter={addAction}
            />
            <SearchBox type="text" frasePadrao="Digite o seu CPF..."
            onEnter={addAction}
            />
            <SearchBox type="text"
            onEnter={addAction}/>    
            <SearchBox type="text"
            onEnter={addAction}/>      

               <ul>
                    {list.map((item, index)=> (                                          
                      <li key={index}>{item.title} é falso? R= {item.done.toString()}</li>                    
                    ))}            
               </ul> 

               <h1>Tarefas feitas?</h1>
               <ul>
                   {list.map((item,index)=> (
                       <Li key={index} onClick={()=>handleToggleDone(index)}>
                            {item.done &&
                            <del>{item.title}</del>
                            }
                           {!item.done &&
                           item.title
                           }
                       </Li>
                   ))}
               </ul>
            
        </>
    )
}

export default Lista;















