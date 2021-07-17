import styled from 'styled-components'
import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import ComunityRender from '../src/components/ComunityBoxRender';
function ProfileSidebar(propriedades) {
 
  return (
    <Box >
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr/>
      <p style= {{marginBottom:'20px'}}>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
            @{propriedades.githubUser}
        </a>
      </p>
      
      <AlurakutProfileSidebarMenuDefault></AlurakutProfileSidebarMenuDefault>
    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '12802378123789378912789789123896123', 
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const githubUser = 'juunegreiros';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
    'Leonardo'
  ]

  const [seguidores,setSeguidores] = React.useState([]) 
  React.useEffect(function(){
    fetch("https://api.github.com/users/"+githubUser+"/followers").then(function(res){  return  res.json()}).then(function(json) {  setSeguidores(json)})
  } , [])

  console.log('Seguidores Atualizados ', seguidores)
  return(
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
              <p>O que você deseja fazer?</p>
              <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
             <ComunityRender array={comunidades} type={"Comunidades"} />
             <ComunityRender array={pessoasFavoritas} type={"Pessoas da Comunidade"} />
             <ComunityRender array={seguidores} type={"Seguidores"} />
        </div>
      </MainGrid>
    </>
  )
}