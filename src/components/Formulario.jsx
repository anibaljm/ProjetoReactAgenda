import React, { useEffect, useState } from "react"


const Formulario = ({addContato, editContact, editData}) => {

  const [formData, setFormData] = useState({
    nome:'',
    telefone:'',
    email:'',
    id: null
  })

useEffect(() => {
    console.log(editData);
    if (editData !== null){
      setFormData(editData)
    } else {
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        id: null
      })
    }
  }, [editData])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.nome !== '' && formData.telefone !== '' && formData.email !== '') {
      if (editData !== null) {
        editContact(formData)
      } else {
      formData.id = Date.now()
      addContato(formData)
      setFormData({
        nome: '',
        telefone: '',
        email:'',
        id: null
      })
    }
  } 
    else {
      alert("por favor adicionar nome, telefone ou email.")
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return <>
    <form className='m-2' onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" onChange={handleChange} value={formData.nome}/>
      <label htmlFor="telefone">Telefone:</label>
      <input type="tel" name="telefone" onChange={handleChange} value={formData.telefone}/>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" onChange={handleChange} value={formData.email}/>
      <input className="btn btn-success mx-1"  type="submit" value="Adicionar"/>
      <input className="btn btn-danger mx-1" type="reset" value="Cancelar"/>
    </form>
  </>
}

export default Formulario;
