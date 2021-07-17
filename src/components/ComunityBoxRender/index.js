import React from 'react' ; 
import { ProfileRelationsBoxWrapper } from '../ProfileRelations';


export default function ComunityRender(props){
    if(props.type == 'Pessoas da Comunidade'){
    return(
        <>
         <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                    {props.type} ({props.array.length})
                </h2>

                <ul>
                {props.array.slice(0,6).map((itemAtual) => {
                        return (
                        <li>
                            <a href={`/users/${itemAtual}`} key={itemAtual}>
                            <img src={`https://github.com/${itemAtual}.png`} />
                            <span>{itemAtual}</span>
                            </a>
                        </li>
                        )
                     })}   
                </ul>
          </ProfileRelationsBoxWrapper>


        </>
    ) }else if(props.type == 'Comunidades'){
        return(

            <>
                <ProfileRelationsBoxWrapper>
                    <h2 className="smallTitle">
                        {props.type} ({props.array.length})
                    </h2>

                    <ul>
                    {props.array.slice(0,6).map((itemAtual) => {
                            return (
                                <li>
                                    <a href="" key={itemAtual.id}>
                                    <img src={itemAtual.image} />
                                    <span>{itemAtual.title}</span>
                                    </a>
                                </li>
                            )
                        })}   
                    </ul>
                </ProfileRelationsBoxWrapper>
            </>

        )
    }else if(props.type=="Seguidores"){
        if(props.array.length > 0){
        return(
            
            <>
                <ProfileRelationsBoxWrapper>
                    <h2 className="smallTitle">
                        {props.type} ({props.array.length})
                    </h2>

                    <ul>
                    {props.array.slice(0,6).map((itemAtual) => {
                            return (
                                <li>
                                    <a href="" key={itemAtual.id}>
                                    <img src={itemAtual.avatar_url} />
                                    <span>{itemAtual.login}</span>
                                    </a>
                                </li>
                            )
                        })}   
                    </ul>
                </ProfileRelationsBoxWrapper>
            </>

        )
     }else {
         return(
               
            <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                    {props.type} ({props.array.length})
                </h2>

            </ProfileRelationsBoxWrapper>

         )
     }
    }
}


// 