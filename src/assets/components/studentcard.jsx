import "./studentcard.css";
import { useState } from "react";
function StudentCard(props) {
   const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);
    function basculerInformations() {
      setCoordonneesVisibles(!coordonneesVisibles);
  }
  return (
    <div className="studentcard">
      <img src={props.img} alt="student" />

      <h1>Fiche étudiant</h1>

      <p>Nom & Prénom: {props.prenom} {props.nom}</p>

      {coordonneesVisibles && (
        <>
          <p>Email: {props.email}</p>
          <p>Téléphone: {props.telephone}</p>
        </>
      )}

      <p>Filière: {props.filiere}</p>
      <p>Année: {props.annee}</p>
      <p>Groupe: {props.groupe}</p>
      <p>Ville: {props.ville}</p>

      <button>Contacter</button>

      <button onClick={basculerInformations}>
        {coordonneesVisibles
          ? "Masquer les coordonnées"
          : "Afficher les coordonnées"}
      </button>
      <button onClick={()=>props.onsupprime(props.id)}>Supprimer
      </button>
      <button onClick={()=>props.onmodifier(props.id)}>modifierEtudiant
      </button>

    </div>
  );
}

export default StudentCard;
