import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';
import { getContacts, createContact, updateContact, deleteContact } from '../../api/contactService';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalContacts, setTotalContacts] = useState(0);
  const [sortBy, setSortBy] = useState('firstName');
  const [sortOrder, setSortOrder] = useState('asc');

  const fetchContacts = async () => {
    try {
      const response = await getContacts(page + 1, rowsPerPage, sortBy, sortOrder);
      setContacts(response.contacts);
      setTotalContacts(response.total);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page, rowsPerPage, sortBy, sortOrder]);

  const handleCreateContact = async (contactData) => {
    try {
      await createContact(contactData);
      fetchContacts();
      return true;
    } catch (error) {
      console.error('Error creating contact:', error);
      return false;
    }
  };

  const handleUpdateContact = async (id, contactData) => {
    try {
      await updateContact(id, contactData);
      fetchContacts();
      setEditContact(null);
      return true;
    } catch (error) {
      console.error('Error updating contact:', error);
      return false;
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      fetchContacts();
      return true;
    } catch (error) {
      console.error('Error deleting contact:', error);
      return false;
    }
  };

  const handleSort = (property) => {
    const isAsc = sortBy === property && sortOrder === 'asc';
    setSortOrder(isAsc ? 'desc' : 'asc');
    setSortBy(property);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Contact Management System
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <ContactForm
          onSubmit={editContact ? (data) => handleUpdateContact(editContact._id, data) : handleCreateContact}
          initialData={editContact}
          onCancel={() => setEditContact(null)}
        />
      </Paper>
      <Paper sx={{ p: 2 }}>
        <ContactTable
          contacts={contacts}
          onEdit={setEditContact}
          onDelete={handleDeleteContact}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
          totalContacts={totalContacts}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={handleSort}
        />
      </Paper>
    </Box>
  );
};

export default ContactManager;