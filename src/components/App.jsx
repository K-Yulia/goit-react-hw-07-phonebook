// import { useState } from "react";
// import { nanoid } from 'nanoid';
import { Layout } from './App.styled'
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter'

export const App = () => {
   
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <GlobalStyle />
      </Layout>
    );
  }
;
