export function averageFromPage() {
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
  alert(`Moyenne:${average}`);
}
