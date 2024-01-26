import AxiosApi from "./AxiosApi";

export async function getRoles() {
    try {
        const response = await AxiosApi.get('/get-roles');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getRole(id) {
    try {
        const response = await AxiosApi.get('/get-role/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getClasses(id) {
    try {
        const response = await AxiosApi.get('/get-classes-school/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function infoClasse(id) {
    try {
        const response = await AxiosApi.get('/get-info-classe/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function typesClasse() {
    try {
        const response = await AxiosApi.get('/get-types-classe');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function typesEtablissements() {
    try {
        const response = await AxiosApi.get('/get-types-etablissement');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function addClasse(classe) {
    try {
        const response = await AxiosApi.post('/add-classe', classe);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function addPersonne(personne) {
    try {
        const response = await AxiosApi.post('/add-personne', personne);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function deleteClasse(id) {
    try {
        const response = await AxiosApi.delete(`/delete-classe/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function addMatiere(matiere) {
    try {
        const response = await AxiosApi.post('/add-matiere', matiere);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getAllMatieres(id) {
    try {
        const response = await AxiosApi.get('/get-matieres/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getAllEmployes(id) {
    try {
        const response = await AxiosApi.get('/get-personnel/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function addEcole(ecole) {
    try {
        const response = await AxiosApi.post('/add-ecole', ecole);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function addTarif(tarif) {
    try {
        const response = await AxiosApi.post('/add-tarif', tarif);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getAllTarifs(id) {
    try {
        const response = await AxiosApi.get('/get-tarifs/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function addPaiement(paiement) {
    try {
        const response = await AxiosApi.post('/add-paiement', paiement);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getPaiementSchool(id) {
    try {
        const response = await AxiosApi.get('/get-paiements/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getAllParentsSchool(id) {
    try {
        const response = await AxiosApi.get('/get-parents/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getSingleParent(matricule) {
    try {
        const response = await AxiosApi.get('/get-parent/' + matricule);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getAllFeesStudent(id) {
    try {
        const response = await AxiosApi.get('/get-fees-student/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}