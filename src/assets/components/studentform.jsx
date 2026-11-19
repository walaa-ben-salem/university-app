import'./studentform.css'
function StudentForm(){
    const[nom,setNom]=useState("");
    const[prenom,setPrenom]=useState("");
    const[email,setEmail]=useState("");
    const[telephone,setTelephone]=useState("");
    const[filiere,setFiliere]=useState("");
    const[anneeEtude,setAnneeEtude]=useState("");
    const [groupe, setGroupe] = useState("");
    const [ville, setVille] = useState("");
    const [image, setImage] = useState("");
return(
 <>
 <form>
 <h1>ajouter un etudiant</h1>
 <label htmlForor = "nom"> Nom: </label>
 <input 
 type= "text"
 id= "nom"
 placeholder= "saisir votre nom"
 required
/>
 <label htmlFor="prenom">Prenom:</label>
 <input
 type="text"
 id="prenom"
 placeholder="saisir votre prenom"
 required
 />
<label htmlFor="email">Email:</label>
<input 
type="email"
id="email"
placeholder="saisir votre email"
required
/>
<label htmlFor="telephone">numero de telephone:</label>
<input
type="number"
id="telephone"
placeholder="saisir votre numero "
required
/>
<label htmlFor="annee">annee d'etude:</label>
<input
type="text"
id="annee"
placeholder="saisir votre annee d'etude "
required
/>
<label htmlFor="groupe">goupe:</label>
<input
type="number"
id="groupe"
placeholder="saisir votre groupe "
required
/>
<label htmlFor="filiere">Filiere:</label>
<select id="filiere"name="filiere" required>
    <option value="">choisir une filiere</option>
    <option value="GLSI">GLSI</option>
    <option value="LCS">LCS</option>
    <option value="LBC">LBC</option>
    </select>
<label htmlFor="description">Description</label>
<textarea
id="description"
name="description"
rows="4"
cols="30"
placeholder="saisir une desciption..."
></textarea>
<label htmlFor="image">Image</label>
<input type="file" id="image" accept="image/*"
/>
<button type="submit">Ajouter</button>
<button type="reset">Reinitialiser</button>
</form>
</>
);
}
export default StudentForm;