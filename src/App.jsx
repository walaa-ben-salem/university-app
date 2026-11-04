
import "./App.css";
import Header from "./assets/components/header.jsx";
import Footer from "./assets/components/footer.jsx";
import Navbar from "./assets/components/navbar.jsx";
import StudentCard from "./assets/components/studentcard.jsx";
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
      email: "walaabensalem11@gmail.com",
      telephone: "20417019",
      filiere: "genie logiciel et systemes d'information",
      groupe: "GLSI2A",
      annee: "2026-2027",
      ville: "mahdia",
      img: tsts,
    },
  ]);

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

  return (
    <>
      <header className="app-header">
        <Header />
      </header>

      <Navbar />

      <div className="actions">
        <button onClick={ajouterEtudiant}>
          + Ajouter un étudiant
        </button>
      </div>

      <main className="container">
        {etudiants.map((student) => (
          <StudentCard
            key={student.id}
            prenom={student.prenom}
            nom={student.nom}
            email={student.email}
            telephone={student.telephone}
            filiere={student.filiere}
            groupe={student.groupe}
            ville={student.ville}
            annee={student.annee}
            img={student.img}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}
export default App;