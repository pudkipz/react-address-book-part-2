import { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'

export default function ViewContactPage() {
  const context = useContext(AppContext)
  const id = useParams()
  const navigate = useNavigate()

  const contact = context.contacts.find((c) => {
    return c.id == id.id
    })

  if (!contact) {
    return (<h2>Loading...</h2>)
  }

  return (
    <section className='view-contact'>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.street}, {contact.city}</p>
      <button
        onClick={() => navigate(`/contact/${id.id}/edit`)}>Edit</button>
    </section>
  )
}