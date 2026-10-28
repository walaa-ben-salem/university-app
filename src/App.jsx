
import "./App.css";
import Header from "./assets/components/header.jsx";
import Footer from "./assets/components/footer.jsx";
import Navbar from "./assets/components/navbar.jsx";
import StudentCard from "./assets/components/studentcard.jsx";
import tsts from "./assets/tsts.jpg";

const etudiants = [
  {
    id: "1",
    nom: "ben salem",
    prenom:"walaa",
    email: "walaabensalem11@gmail.com",
    telephone: "20417019",
    filiere: "genie logiciel et systemes d'information",
    groupe: "GLSI2A",
    annee: "2026-2027",
    ville: "mahdia",
    img: tsts,
     },
     {
    id: "2",
    nom: "ben salem",
    prenom:"safwen",
    email: "safwensafwen11@gmail.com",
    telephone: "9999999",
    filiere: "genie logiciel et systemes d'information",
    groupe: "GLSI2A",
    annee: "2026-2027",
    ville: "mahdia",
    img: tsts,
     },
{
   id: "3",
    nom: "ben salem",
    prenom:"rined",
    email: "rined rined11@gmail.com",
    telephone: "9999999",
    filiere: "genie logiciel et systemes d'information",
    groupe: "GLSI2A",
    annee: "2026-2027",
    ville: "mahdia",
    img: tsts,
}
 
];



function App() {
  return (
    <>
      <header className="app-header">
        <Header />
      </header>

      <Navbar />

      <main className="container">
        {etudiants.map((student) => (
          <StudentCard
            key={student.id}
            prenom={student.prenom}
            nom={student.nom}
            id={student.id}
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
