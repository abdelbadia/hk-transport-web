import React, { useState, useEffect } from 'react';
import { getClients } from '../services/clientService';
import '../Style/clients.css';

const ClientTable = ({ onSelectClient }) => {
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        const response = await getClients();
        setClients(response.data);
    };

    const filteredClients = clients.filter(client =>
        client.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Rechercher par nom"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Numéro TVA</th>
                        <th>Adresse</th>
                        <th>Code postal</th>
                        <th>Ville</th>
                        <th>Pays</th>
                        <th>Téléphone</th>
                        <th>Email</th>
                        <th>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredClients.map(client => (
                        <tr key={client.client_id} onClick={() => onSelectClient(client)}>
                            <td>{client.nom}</td>
                            <td>{client.numero_TVA}</td>
                            <td>{client.adresse}</td>
                            <td>{client.code_postal}</td>
                            <td>{client.ville}</td>
                            <td>{client.pays}</td>
                            <td>{client.telephone}</td>
                            <td>{client.email}</td>
                            <td>{client.statut}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClientTable;
