import React, { useState } from 'react';
import ClientTable from './ClientTable.js';
import ClientForm from './ClientForm.js';
import '../Style/clients.css';

const Clients = () => {
    const [selectedClient, setSelectedClient] = useState(null);

    const handleSelectClient = (client) => {
        setSelectedClient(client);
    };

    const handleRefresh = () => {
        setSelectedClient(null);
    };

    return (
        <div className="clients-container">
            <h2>Gestion des Clients</h2>
            <ClientTable onSelectClient={handleSelectClient} />
            <ClientForm selectedClient={selectedClient} onRefresh={handleRefresh} />
        </div>
    );
};

export default Clients;
