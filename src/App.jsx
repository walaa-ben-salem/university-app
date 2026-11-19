
import "./App.css";
import Header from "./assets/components/header.jsx";
import Footer from "./assets/components/footer.jsx";
import Navbar from "./assets/components/navbar.jsx";
import StudentCard from "./assets/components/studentcard.jsx";
import StudentForm from  "./assets/components/studentform.jsx";
import tsts from "./assets/tsts.jpg";
import { useState } from "react";

function App() {

  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "slim",
      nom: "boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "33333333",
      filiere: "GLSI",
      annee: "2026-2027",
      groupe: "GLSI2A",
      ville: "Tunis",
      img: tsts,
    },
    {
      id: 2,
      prenom: "walaa",
      nom: "ben salem",
      email: "walaabslm11@gmail.com",
      telephone: "88888888",
      filiere: "genie logiciel et systemes d'information",
      groupe: "GLSI2A",
      annee: "2026-2027",
      ville: "mahdia",
      img: tsts,
    },
  ]);
  const [recherche, setRecherche] = useState("");
   const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  );
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      nom: "ben salem",
      prenom: "rined",
      email: "rinedrined1@gmail.com",
      telephone: "+21699999999",
      filiere: "genie logiciel et systeme information",
      annee: "2eme annee",
      groupe: "glsi2",
      ville: "sfax",
      img: tsts,
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
  }
  function SupprimerEtudiant(id){
    setEtudiants(etudiants.filter((etudiant)=>
      etudiant.id!==id))
  }
  function modifierEtudiant(id){
    const nouveauPrenom=prompt("saisir le nouveau prenom:");
    if(
      nouveauPrenom !==null &&
      nouveauPrenom.trim() !=="")
      {
      setEtudiants((anciensEtudiants)=>
        anciensEtudiants.map(
          (etudiant)=>
            etudiant.id===id
          ?{
            ...etudiant,
            prenom:nouveauPrenom.trim(),
          }
          :etudiant,
        ),
      );
    }
  };
  return (
    <>
      <header className="app-header">
        <Header />
      </header>

      <Navbar />
      <input
        type="text"
        placeholder="Rechercher par filière..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />
      <StudentForm/>

      <div className="actions">
        <button onClick={ajouterEtudiant}>
          + Ajouter un étudiant
        </button>
      </div>

      <main className="container">
        {etudiants.map((student) => (
          <StudentCard
            id={student.id}
            prenom={student.prenom}
            nom={student.nom}
            email={student.email}
            telephone={student.telephone}
            filiere={student.filiere}
            groupe={student.groupe}
            ville={student.ville}
            annee={student.annee}
            img={student.img}
            onsupprime={SupprimerEtudiant}
            onmodifier={modifierEtudiant}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
export default App;