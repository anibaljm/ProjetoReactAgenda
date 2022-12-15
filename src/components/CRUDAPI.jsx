import "../App.css"
import React, { useEffect, useState } from "react"
import Formulario from "./Formulario"
import Table from "./Tabla"
import "bootstrap/dist/css/bootstrap.min.css";
import { helpFetch } from '../helpers/helpFetch'

const CrudAPI = () => {

  const API = helpFetch()
  const [editData, setEditData] = useState(null);
  const [geralContact, setGeralContact] = useState([]);



  useEffect(() => {
    API.get("contatos").then((response) => {
      
      if (!response.error) setGeralContact(response)
    })
  },[])
  
  //adicionar contatos//
const addContato = (contact) => {
  const options = {
    body: contact
  }

  API.post("contatos", options).then(response => {
    if (!response.error) setGeralContact([...geralContact, contact])
  })
}  


//editar contatos//
const editContact = (contact) => {
  const options = {
    body: contact
  }

  API.put("contatos", options, contact.id).then(response => {
      if (!response.error) {
        const nvoContacts = geralContact.map(el => el.id ===
          contact.id ? contact : el)
          setGeralContact(nvoContacts)
          setEditData(null)
        }
     })
}

//remover contato//
const deleteContact = id => {
  const  deletarC = window.confirm(`Confirma remover o contato id: ${id}`)

  if (deletarC) {
   API.del("contatos", id).then( response => {
     if (!response.error) {
     const nvoContacts = geralContact.filter(el => el.id !== id)
    setGeralContact(nvoContacts);
   }
  }) 
}
}
  return <div className="main.API">
      <h1>AGENDA</h1>
      <Formulario addContato={addContato} editContact={editContact} editData=
      {editData}/>
      <Table geralContact={geralContact} setEditData={setEditData} deleteContact={deleteContact}/>
   </div>
}

export default CrudAPI;