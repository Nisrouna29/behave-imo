# Classes CSS Responsives pour l'Espace Locataire

Ce fichier contient toutes les classes CSS responsives nécessaires pour créer des pages qui s'adaptent à toutes les tailles d'écran dans l'espace locataire.

## Classes de Base

### Container
- `.locataire-container` - Container de base avec largeur 100% et hauteur minimale 100vh
- `.locataire-full-width` - Force la largeur à 100vw sans marges ni padding

### Grille Responsive
- `.locataire-grid-responsive` - Grille qui s'adapte automatiquement :
  - Mobile (< 640px) : 1 colonne
  - Small (640px+) : 2 colonnes  
  - Medium (768px+) : 3 colonnes
  - Large (1024px+) : 4 colonnes

### Espacement Responsive
- `.locataire-spacing-responsive` - Padding qui s'adapte :
  - Mobile : 1rem
  - Small : 1.5rem
  - Medium+ : 2rem

### Texte Responsive
- `.locataire-text-responsive` - Taille de texte qui s'adapte :
  - Mobile : 1rem
  - Small : 1.125rem
  - Medium+ : 1.25rem

### Cartes Responsives
- `.locataire-card-responsive` - Cartes avec padding et border-radius adaptatifs

## Classes Utilitaires par Taille d'Écran

### Mobile (< 640px)
- `.locataire-mobile-hidden` - Masque l'élément sur mobile
- `.locataire-mobile-full-width` - Force la largeur 100% sur mobile
- `.locataire-mobile-padding` - Padding réduit pour mobile
- `.locataire-mobile-text-sm` - Texte plus petit sur mobile

### Tablette (640px - 1023px)
- `.locataire-tablet-hidden` - Masque l'élément sur tablette
- `.locataire-tablet-grid-2` - Grille 2 colonnes sur tablette

### Desktop (1024px+)
- `.locataire-desktop-hidden` - Masque l'élément sur desktop
- `.locataire-desktop-grid-3` - Grille 3 colonnes sur desktop
- `.locataire-desktop-grid-4` - Grille 4 colonnes sur desktop

## Composants Spécialisés

### Formulaires
- `.locataire-form-responsive` - Formulaires avec champs adaptatifs
- `.locataire-btn-responsive` - Boutons responsives (pleine largeur sur mobile)

### Navigation
- `.locataire-nav-responsive` - Navigation verticale sur mobile, horizontale sur desktop

### Tableaux
- `.locataire-table-responsive` - Tableaux avec scroll horizontal sur mobile

### Modales
- `.locataire-modal-responsive` - Modales qui s'adaptent à la taille d'écran

### Images
- `.locataire-img-responsive` - Images qui s'adaptent à leur conteneur

### Flexbox
- `.locataire-flex-responsive` - Flexbox vertical sur mobile, horizontal sur desktop

## Classes de Visibilité

- `.locataire-show-mobile` - Affiche seulement sur mobile
- `.locataire-show-desktop` - Affiche seulement sur desktop (640px+)

## Gestion du Débordement

- `.locataire-overflow-responsive` - Gestion intelligente du débordement

## Utilisation

Pour utiliser ces classes dans vos composants Angular :

1. Importez le fichier CSS dans votre composant :
```typescript
@Component({
  styleUrls: ['../shared/locataire-responsive.css']
})
```

2. Utilisez les classes dans votre template :
```html
<div class="locataire-container locataire-spacing-responsive">
  <div class="locataire-grid-responsive">
    <div class="locataire-card-responsive">
      <!-- Contenu -->
    </div>
  </div>
</div>
```

## Breakpoints Utilisés

- Mobile : < 640px
- Small : 640px - 767px  
- Medium : 768px - 1023px
- Large : 1024px+

Ces classes garantissent que toutes les pages de l'espace locataire seront responsives et prendront toute la taille d'écran disponible.
