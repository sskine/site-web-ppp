// Ajoute un écouteur d'événements pour exécuter le code une fois que le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne tous les éléments avec la classe 'modal'
  const modals = document.querySelectorAll('.modal');
  
  // Sélectionne tous les boutons de fermeture avec la classe 'close-btn'
  const closeButtons = document.querySelectorAll('.close-btn');

  // Ouvre la fenêtre modale lorsqu'un bouton avec la classe 'open-btn' est cliqué
  document.querySelectorAll('.open-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      // Récupère l'ID de la modale à ouvrir à partir de l'attribut 'data-modal' du bouton
      const modalId = e.target.getAttribute('data-modal');
      
      // Sélectionne la modale correspondante par son ID
      const modal = document.getElementById(modalId);
      
      // Vérifie si la modale existe
      if (modal) {
        modal.style.display = 'block'; // Affiche la modale
      }
    });
  });

  // Ferme la fenêtre modale lorsque le bouton de fermeture est cliqué
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Trouve la modale parente du bouton de fermeture
      const modal = btn.closest('.modal');
      
      // Vérifie si la modale existe
      if (modal) {
        modal.style.display = 'none'; // Masque la modale
      }
    });
  });

  // Ferme la fenêtre modale en cliquant à l'extérieur de celle-ci
  window.addEventListener('click', (event) => {
    modals.forEach(modal => {
      // Vérifie si le clic a eu lieu sur la modale elle-même
      if (event.target === modal) {
        modal.style.display = 'none'; // Masque la modale
      }
    });
  });
});