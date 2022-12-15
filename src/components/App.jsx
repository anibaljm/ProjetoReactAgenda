import React, { useEffect, useState } from "react"
import Titulo from "./Titulo"
import Formulario from "./Formulario"
import Table from "./Tabla"
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";


const CrudApp = () => {

  const [editData, setEditData] = useState(null);
  const [geralContact, setGeralContact] = useState(()=> {
    const saveContacts = window.localStorage.getItem("contatosSalvos");
    if (saveContacts) {
      return JSON.parse(saveContacts);
    } 

    else {
      return []
    }
  });

  useEffect(() => {
    window.localStorage.setItem("contatosSalvos", JSON.stringify(geralContact))
  }, [geralContact])
  
  //adicionar contatos//
  const addContato = (contact) => {
      setGeralContact([
        ...geralContact,
        contact
      ])
  } 
   
//editar contatos//
const editContact = (contact) => {
  const nvoContacts = geralContact.map(el => el.id === contact.id ? contact : el)
  setGeralContact(nvoContacts)
  setEditData(null)
}

//remover contato//
const deleteContact = id => {
  const  deletarC = window.confirm(`Confirma remover o contato id: ${id}`)

  if (deletarC) {
    const nvoContacts = geralContact.filter(el => el.id !== id)
    setGeralContact(nvoContacts);
  }
}

  return <div className="main.app">
      <Titulo />
      <Formulario addContato={addContato} editContact={editContact} editData={editData} />
      <Table geralContact={geralContact} setEditData={setEditData} deleteContact={deleteContact}/>
   </div>
}

export default CrudApp;