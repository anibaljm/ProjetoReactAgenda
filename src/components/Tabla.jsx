import React from "react"

const Table = ({ geralContact, setEditData, deleteContact }) => {


  return <>
      <h3 className="tcontato">Contatos</h3>
    <table className='table'>
        <thead>
          <tr>
            <td><b>Nome</b></td>
            <td><b>Telefone</b></td>
            <td><b>Email</b></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        {
          geralContact.length === 0 ? <tr><td>Não tem Contatos</td></tr>
            : geralContact.map((contact, index) => {
                return <tr key={index}>
                         <td>{contact.nome}</td>
                         <td>{contact.telefone}</td>
                         <td>{contact.email}</td>
                         <td>
                            <button className="btn btn-outline-warning mx-1" 
                            onClick={() => setEditData(contact)} >Editar</button>
                            <button className="btn btn-outline-danger mx-1" 
                            onClick={() => deleteContact(contact.id)}> Eliminar</button>
                         </td>
                        </tr>
            })
        }
        </tbody>
      </table>
    </>
}

export default Table;