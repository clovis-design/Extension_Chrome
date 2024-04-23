// la fonction averageFromPage
function averageFromPage() {
  const matieres = document.querySelectorAll(".liste_celluleGrid .Gras.Espace");
  const allMatiere = [];
  matieres.forEach((matiere) => {
    const moyenne = Number(
      matiere
        .querySelector("div:first-child")
        .textContent.trim()
        .replace(",", ".")
    );
    allMatiere.push(moyenne);
    console.log(moyenne);
  });

  const totalMatiere = allMatiere.reduce(
    (currentValue, nextValue) => currentValue + nextValue,
    0
  );
  const average = totalMatiere / matieres.length;
  alert(`:${average}`);
}

// Récupere la valuer de l'input et execute la fonction averageFromPage
let objective = document.getElementById("subObject");
objective.addEventListener("submit", async function (event) {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  event.preventDefault();
  let valueObjective = document.getElementById("valueObjective");
  console.log(valueObjective.value);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: averageFromPage,
  });
});

// Fonction qui récupere la valeur des notes et qui garde les pires matières
function averagesubjectFromPage() {
  const matieres = document.querySelectorAll(".liste_celluleGrid .Gras.Espace");
  matieres.forEach((matiere) => {
    const moyenne = Number(
      matiere
        .querySelector("div:first-child")
        .textContent.trim()
        .replace(",", ".")
    );
    console.log(moyenne);
    if (moyenne < 10) {
      const matieresNotes = document.querySelectorAll(".AlignementDroit");
      console.log(matieresNotes);
      matieresNotes.forEach((note) => {
        const NoteOfMoyenne = Number(
          note.querySelector("div").textContent.trim().replace(",", ".")
        );
        console.log(NoteOfMoyenne);
      });
    } else {
      console.log("toto");
    }
  });
}
const matieres = document.querySelectorAll(".liste_celluleGrid .Gras.Espace");
matieres.forEach((matiere) => {
  const moyenne = Number(
    matiere
      .querySelector("div:first-child")
      .textContent.trim()
      .replace(",", ".")
  );
  if (moyenne < 10) {
    console.log(moyenne);
    const element = document
      .querySelector(".AlignementDroit")
      .textContent.trim()
      .replace(",", ".");
    const note = element.textContent;
    console.log(note);
  }
});
