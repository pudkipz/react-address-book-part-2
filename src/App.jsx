import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactsListPage from './components/ContactsListPage';
import ViewContactPage from './components/ViewContactPage';
import CreateContactPage from './components/CreateContactPage';
import EditContactPage from './components/EditContactPage';
import { useEffect, useState } from 'react';



function App() {
  const [contacts, setContacts] = useState(null)
  const [currentContact, setCurrentContact] = useState(null)

  // get all contacts on enter
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/pudkipz/contact')
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])

  // {console.log(contacts)}
  return (
    <main className='contacts-layout'>
      <nav className='menu'>
        <h2>Menu</h2>
        <ul>
          <li><Link to='/'>Contacts</Link></li>
          <li><Link to='/create'>New Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route
          path='/'
          element={<ContactsListPage />}
        />
        <Route
          path='/contact/:id'
          element={<ViewContactPage />}
        />
        <Route
          path='/create'
          element={<CreateContactPage />}
        />
        <Route
          path='/edit/:id'
          element={<EditContactPage />}
        />
      </Routes>
    </main>
  );
}

export default App;
