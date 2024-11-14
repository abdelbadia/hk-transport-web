// src/components/TransporteurForm.js
import React, { useState, useEffect } from 'react';
import { addTransporteur, updateTransporteur, deleteTransporteur } from '../services/transporteurService';
import '../Style/transporteurs.css';

const TransporteurForm = ({ selectedTransporteur, onRefresh }) => {
    const [transporteur, setTransporteur] = useState({
        nom: '',
        email: '',
        telephone: '',
        adresse: '',
        ville: '',
        codePostal: '',
        pays: '',
    });

    useEffect(() => {
        if (selectedTransporteur) {
            setTransporteur(selectedTransporteur);
        } else {
            setTransporteur({
                nom: '',
                email: '',
                telephone: '',
                adresse: '',
                ville: '',
                codePostal: '',
                pays: '',
            });
        }
    }, [selectedTransporteur]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransporteur(prev => ({ ...prev, [name]: value }));
    };

    const handleAddTransporteur = async () => {
        await addTransporteur(transporteur);
        onRefresh();
        setTransporteur({
            nom: '',
            email: '',
            telephone: '',
            adresse: '',
            ville: '',
            codePostal: '',
            pays: '',
        });
    };

    const handleUpdateTransporteur = async () => {
        if (selectedTransporteur) {
            await updateTransporteur(transporteur);
            onRefresh();
        }
    };

    const handleDeleteTransporteur = async () => {
        if (selectedTransporteur) {
            await deleteTransporteur(selectedTransporteur.transporteur_id);
            onRefresh();
        }
    };

    return (
        <div className="transporteur-form">
            <label>Nom</label>
            <input
                type="text"
                name="nom"
                value={transporteur.nom}
                onChange={handleInputChange}
            />
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={transporteur.email}
                onChange={handleInputChange}
            />
            <label>Téléphone</label>
            <input
                type="text"
                name="telephone"
                value={transporteur.telephone}
                onChange={handleInputChange}
            />
            <label>Adresse</label>
            <input
                type="text"
                name="adresse"
                value={transporteur.adresse}
                onChange={handleInputChange}
            />
            <label>Ville</label>
            <input
                type="text"
                name="ville"
                value={transporteur.ville}
                onChange={handleInputChange}
            />
            <label>Code Postal</label>
            <input
                type="text"
                name="codePostal"
                value={transporteur.codePostal}
                onChange={handleInputChange}
            />
            <label>Pays</label>
            <input
                type="text"
                name="pays"
                value={transporteur.pays}
                onChange={handleInputChange}
            />
            {selectedTransporteur ? (
                <>
                    <button onClick={handleUpdateTransporteur}>Enregistrer</button>
                    <button onClick={handleDeleteTransporteur}>Supprimer</button>
                </>
            ) : (
                <button onClick={handleAddTransporteur}>Ajouter Transporteur</button>
            )}
        </div>
    );
};

export default TransporteurForm;
