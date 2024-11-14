import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Pour récupérer les paramètres de l'URL
import { getClientById } from '../services/clientService.js'; // Assure-toi d'avoir cette fonction
import '../Style/style.css'; 

const ClientDetails = () => {
    const { id } = useParams(); // Récupère l'ID du client depuis l'URL
    const [client, setClient] = useState(null);

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const response = await getClientById(id);
                setClient(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails du client", error);
            }
        };
        fetchClient();
    }, [id]);

    if (!client) return <p>Chargement des détails du client...</p>;

    return (
        <div>
            <h2>Détails du Client</h2>
            <p><strong>Nom:</strong> {client.nom}</p>
            <p><strong>Email:</strong> {client.email}</p>
            <p><strong>Téléphone:</strong> {client.telephone}</p>
            <p><strong>Adresse:</strong> {client.adresse}</p>
            <p><strong>Code Postal:</strong> {client.code_postal}</p>
            <p><strong>Ville:</strong> {client.ville}</p>
            <p><strong>Pays:</strong> {client.pays}</p>
            <p><strong>Statut:</strong> {client.statut}</p>
        </div>
    );
};

export default ClientDetails;
