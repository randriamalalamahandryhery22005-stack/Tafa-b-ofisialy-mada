/**
 * TAFA - SUPPRESSION DES DOUBLONS & GÉNÉRATION DU SOUS-MENU
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Fonction de dédoublonnage des éléments du menu
  const removeDuplicates = (selector) => {
    const elements = document.querySelectorAll(selector);
    const seen = new Set();
    elements.forEach((el) => {
      const key = el.getAttribute("data-nav") || el.textContent.trim().toLowerCase();
      if (seen.has(key)) {
        el.remove(); // Supprime la copie
      } else if (key) {
        seen.add(key);
      }
    });
  };

  // Nettoyage de la navigation
  removeDuplicates(".nav-item");
  removeDuplicates(".top-menu-item");
  removeDuplicates(".bottom-nav-item");

  // 2. Configuration des Sous-options (Format 2 lignes : Titre + Mention en dessous)
  const settingsList = [
    { id: "registered", title: "Enregistré", mention: "Vos éléments sauvegardés" },
    { id: "events", title: "Événements", mention: "Calendrier et rendez-vous" },
    { id: "settings", title: "Paramètres", mention: "Réglages généraux" },
    { id: "privacy", title: "Confidentialité", mention: "Gestion de vos données" },
    { id: "security", title: "Sécurité", mention: "Mots de passe et accès" },
    { id: "accounts", title: "Comptes", mention: "Gestion de votre compte" },
    { id: "language", title: "Langue", mention: "Choisir la langue d'affichage" },
    { id: "accessibility", title: "Accessibilité", mention: "Taille de texte et affichage" },
    { id: "devices", title: "Appareils", mention: "Appareils actuellement connectés" },
    { id: "payments", title: "Paiements", mention: "Historique et modes de paiement" },
    { id: "ads", title: "Publicités", mention: "Préférences publicitaires" },
    { id: "activity", title: "Activité", mention: "Historique des actions" },
    { id: "help", title: "Aide", mention: "Centre d'assistance" },
    { id: "blue_badge", title: "Badge Bleu", mention: "Demande de vérification" },
    { id: "terms", title: "Conditions", mention: "Conditions d'utilisation" },
    { id: "about", title: "À propos de Tafaß", mention: "Informations sur l'application" }
  ];

  const subMenuContainer = document.getElementById("sub-menu-container");
  if (subMenuContainer) {
    subMenuContainer.className = "settings-grid-container";
    subMenuContainer.innerHTML = ""; // Vider avant de reconstruire

    settingsList.forEach((item) => {
      const card = document.createElement("div");
      card.className = "sub-option-card";
      card.innerHTML = `
        <div class="card-title">${item.title}</div>
        <div class="card-mention">${item.mention}</div>
      `;
      subMenuContainer.appendChild(card);
    });
  }
});