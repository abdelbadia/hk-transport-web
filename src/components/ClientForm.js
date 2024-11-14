import React, { useState, useEffect } from 'react';
import { addClient, updateClient, deleteClient } from '../services/clientService';
import '../Style/clients.css';

const ClientForm = ({ selectedClient, onRefresh }) => {
    const [client, setClient] = useState({
        nom: '',
        numero_TVA: '',
        adresse: '',
        code_postal: '',
        ville: '',
        pays: '',
        telephone: '',
        email: '',
        statut: 'Actif' // Valeur par défaut
    });

    useEffect(() => {
        if (selectedClient) {
            setClient(selectedClient);
        } else {
            setClient({
                nom: '',
                numero_TVA: '',
                adresse: '',
                code_postal: '',
                ville: '',
                pays: '',
                telephone: '',
                email: '',
                statut: 'Actif' // Valeur par défaut
            });
        }
    }, [selectedClient]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClient((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddClient = async () => {
        await addClient(client);
        onRefresh();
        setClient({
            nom: '',
            numero_TVA: '',
            adresse: '',
            code_postal: '',
            ville: '',
            pays: '',
            telephone: '',
            email: '',
            statut: 'Actif' // Valeur par défaut
        });
    };

    const handleUpdateClient = async () => {
        if (selectedClient) {
            await updateClient(selectedClient.client_id,client);
            onRefresh();
        }
    };

    const handleDeleteClient = async () => {
        if (selectedClient) {
            await deleteClient(selectedClient.client_id);
            onRefresh();
        }
    };

    return (
        <div className="client-form">
            <label>Nom</label>
            <input
                type="text"
                name="nom"
                value={client.nom}
                onChange={handleInputChange}
            />
            
            <label>Numéro TVA</label>
            <input
                type="text"
                name="numero_TVA"
                value={client.numero_TVA}
                onChange={handleInputChange}
            />
            
            <label>Adresse</label>
            <input
                type="text"
                name="adresse"
                value={client.adresse}
                onChange={handleInputChange}
            />
            
            <label>Code Postal</label>
            <input
                type="text"
                name="code_postal"
                value={client.code_postal}
                onChange={handleInputChange}
            />
            
            <label>Ville</label>
            <input
                type="text"
                name="ville"
                value={client.ville}
                onChange={handleInputChange}
            />
            
            <label>Pays</label>
            <input
                type="text"
                name="pays"
                value={client.pays}
                onChange={handleInputChange}
            />
            
            <label>Téléphone</label>
            <input
                type="text"
                name="telephone"
                value={client.telephone}
                onChange={handleInputChange}
            />
            
            <label>Email</label>
            <input
                type="text"
                name="email"
                value={client.email}
                onChange={handleInputChange}
            />
            
            <label>Statut</label>
            <select
                name="statut"
                value={client.statut}
                onChange={handleInputChange}
            >
                <option value="Actif">Actif</option>
                <option value="Non Actif">Non Actif</option>
            </select>
            
            <div className="client-form-buttons">
                {selectedClient ? (
                    <>
                        <button onClick={handleUpdateClient}>Enregistrer</button>
                        <button onClick={handleDeleteClient}>Supprimer</button>
                    </>
                ) : (
                    <button onClick={handleAddClient}>Ajouter Client</button>
                )}
            </div>
        </div>
    );
};

export default ClientForm;