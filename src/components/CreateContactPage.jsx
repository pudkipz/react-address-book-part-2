import { useState } from 'react'

export default function CreateContactPage() {
  const [formValues, setFormValues] = useState(
    {firstName: '',
      lastName: '',
      street: '',
      city: ''
    }
  )

  const handleSubmit = e => {
    e.preventDefault()
    const contact = {...formValues}
    fetch('https://boolean-uk-api-server.fly.dev/pudkipz/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
  }

  return (
    <section className='create-contact'>
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Create contact</h2>
        <ul>
          <li>
            <b>First name:</b>
          </li>
          <li>
            <input
              onChange={e => setFormValues({...formValues, firstName: e.target.value})}
              value={formValues.firstName}
            />
          </li>
        </ul>
        </form>
    </section>
  )
}