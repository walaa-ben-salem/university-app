
import "./studentcard.css"

 
function StudentCard(props){
  return(
  <div className="studentcard">
<img src={props.img} alt="student"/>
<h1>Fiche étudiant</h1>
<p>Nom & Prénom: {props.prenom} {props.nom}</p>
<p>Email: {props.email}</p>
<p>Téléphone: {props.telephone}</p>
<p>Filière {props.filiere}</p>
<p>Année: {props.annee}</p>
<p>Groupe:{props.groupe}</p>
<p>Ville:{props.ville}</p>
<button>contacter</button>
</div>
  );
}
export default StudentCard;
