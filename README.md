# React S3 Deployment Boilerplate

Ce projet est une application React TypeScript moderne, optimisée pour le déploiement sur AWS S3 avec CloudFront. Il inclut une configuration complète pour le développement et la production, avec un design responsive construit avec Tailwind CSS et des animations fluides avec Framer Motion.

## 🚀 Fonctionnalités

- **Page d'accueil** avec section héro, fonctionnalités et appel à l'action
- **Page Services** présentant les offres avec des cartes interactives
- **Design responsive** qui s'adapte à tous les appareils
- **Animations fluides** avec Framer Motion
- **Navigation** avec React Router v6
- **Optimisé pour le SEO** et les performances
- **Configuration TypeScript** stricte
- **Gestion des dépendances** avec pnpm

## 🛠️ Technologies utilisées

- ⚛️ React 19 avec TypeScript
- 🎨 Tailwind CSS avec plugins officiels
- 🚀 Vite comme bundler ultra-rapide
- 🎭 Framer Motion pour les animations
- 🔄 React Router v6 pour la navigation
- 📦 pnpm pour une gestion efficace des paquets
- ☁️ AWS S3 + CloudFront pour le déploiement

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- pnpm 8+
- Un compte AWS (pour le déploiement)

### Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/devandcloud/react-s3.git
   cd react-s3
   ```

2. Installer les dépendances avec pnpm :
   ```bash
   pnpm install
   ```

3. Démarrer l'environnement de développement :
   ```bash
   pnpm dev
   ```

4. L'application sera disponible sur [http://localhost:5173](http://localhost:5173)

## 🛠️ Commandes disponibles

- `pnpm dev` - Démarrer le serveur de développement
- `pnpm build` - Construire pour la production
- `pnpm preview` - Prévisualiser la version de production localement
- `pnpm test` - Lancer les tests
- `pnpm lint` - Vérifier le code avec ESLint
- `pnpm format` - Formater le code avec Prettier

## 🏗️ Construction pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## ☁️ Déploiement sur AWS S3

1. **Configurer AWS CLI** :
   ```bash
   aws configure
   ```
   Entrez vos clés d'accès AWS (créées depuis la console IAM).

2. **Créer un bucket S3** :
   ```bash
   aws s3 mb s3://votre-nom-de-bucket --region votre-region
   ```

3. **Activer l'hébergement de site web statique** :
   ```bash
   aws s3 website s3://votre-nom-de-bucket/ --index-document index.html --error-document index.html
   ```

4. **Configurer les permissions du bucket** :
   Créez un fichier `bucket-policy.json` :
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::votre-nom-de-bucket/*"
       }
     ]
   }
   ```
   Puis appliquez la politique :
   ```bash
   aws s3api put-bucket-policy --bucket votre-nom-de-bucket --policy file://bucket-policy.json
   ```

5. **Déployer l'application** :
   ```bash
   npm run build
   aws s3 sync dist/ s3://votre-nom-de-bucket --delete
   ```

6. **Configurer CloudFront (optionnel mais recommandé)** :
   - Créez une distribution CloudFront pointant vers votre bucket S3
   - Configurez le nom de domaine personnalisé et le certificat SSL

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

## ✨ Auteur

- **Votre Nom** - [@votre-username](https://github.com/votre-username)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.
