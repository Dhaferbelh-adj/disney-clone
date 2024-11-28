# Étape 1 : Utiliser une image de base Node.js
FROM node:16

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers de configuration (package.json, package-lock.json)
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier tous les fichiers du projet dans le conteneur
COPY . .

# Étape 6 : Exposer le port utilisé par votre application en mode dev (par défaut, souvent 5173 pour Vite ou 3000 pour CRA)
EXPOSE 5173

# Étape 7 : Commande pour démarrer le serveur de développement
CMD ["npm", "run", "dev"]
