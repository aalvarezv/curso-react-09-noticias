import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async() => {
      const apikey= 'f96ae6347f524ae3a573655e4e397052'
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apikey}`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      guardarNoticias(resultado.articles)
      
    }
    consultarAPI()
  },[categoria])

  

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>
      <ListadoNoticias 
        noticias={noticias}
      />
      
    </Fragment>
   
  );
}

export default App;
