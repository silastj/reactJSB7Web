import React, { useState, useEffect } from "react";


function Lista() {

    const [ list, setList] = useState([]);

        useEffect(()=> {
            setList([
                {title: "Comprar o bolo", done:false},
                {title: "Pegar o cachorro no Petshop", done:true},
                {title: "Gravar aula", done:false}
            ]);
        }, []);

    return(

        <>
            <h1>Lista de Tarefas:</h1>
               <ul>
                    {list.map((item, index)=> (                                          
                      <li key={index}>{item.title} é falso? R= {item.done.toString()}</li>                    
                    ))}            
               </ul> 

               <h1>Tarefas feitas?</h1>
               <ul>
                   {list.map((item,index)=> (
                       <li key={index}>
                            {item.done &&
                            <del>{item.title}</del>
                            }
                           {!item.done &&
                           item.title
                           }
                       </li>
                   ))}
               </ul>
            
        </>
    )
}

export default Lista;















