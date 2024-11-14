// src/components/TransporteurTable.js
import React, { useState, useEffect } from 'react';
import { getTransporteurs } from '../services/transporteurService';
import '../Style/transporteurs.css';

const TransporteurTable = ({ onSelectTransporteur }) => {
    const [transporteurs, setTransporteurs] = useState([]);

    useEffect(() => {
        fetchTransporteurs();
    }, []);

    const fetchTransporteurs = async () => {
        const response = await getTransporteurs();
        setTransporteurs(response.data);
    };

    return (
        <div className="transporteurs-container">
            <h2>Liste des Transporteurs</h2>
            <input
                type="text"
                placeholder="Rechercher par nom"
                className="search-input"
                onChange={(e) => {
                    const searchQuery = e.target.value.toLowerCase();
                    setTransporteurs(transporteurs.filter(t => t.nom.toLowerCase().includes(searchQuery)));
                }}
            />
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                    </tr>
                </thead>
                <tbody>
                    {transporteurs.map(transporteur => (
                        <tr key={transporteur.transporteur_id} onClick={() => onSelectTransporteur(transporteur)}>
                            <td>{transporteur.nom}</td>
                            <td>{transporteur.email}</td>
                            <td>{transporteur.telephone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransporteurTable;
