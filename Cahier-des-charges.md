# Cahier des charges — Application Gestion de Contacts

## 1. Présentation du projet

**Nom du projet :** Gestion de Contacts

**Type :** Application web Full Stack

**Objectif :** Développer une application web permettant de gérer une liste de contacts et de stocker leurs informations dans une base de données.

L’application permettra d’ajouter, de consulter, de modifier et de supprimer des contacts à partir d’une seule page, avec une interface simple et intuitive.

## 2. Objectifs du projet

- Centraliser les informations des contacts.
- Faciliter l’ajout et la consultation des contacts.
- Permettre la modification et la suppression des informations.
- Assurer la sauvegarde des données dans une base de données.
- Mettre en pratique les opérations CRUD dans une application Full Stack.

## 3. Technologies utilisées

| Partie | Technologie |
|---|---|
| Frontend | React.js |
| Langage | TypeScript |
| Backend | Node.js |
| Framework backend | Express.js |
| Base de données | MongoDB |
| ODM | Mongoose |
| Communication | API REST |
| Mise en forme | CSS |

## 4. Fonctionnalités principales

### 4.1. Affichage des contacts

L’application doit afficher la liste des contacts enregistrés dans la base de données. Chaque contact présente son nom complet, son numéro de téléphone et son adresse e-mail.

### 4.2. Ajout d’un contact — Create

L’utilisateur peut ajouter un contact à l’aide d’un formulaire comprenant les champs suivants :

- Nom complet.
- Numéro de téléphone.
- Adresse e-mail.

Les informations doivent être validées avant leur enregistrement dans la base de données.

### 4.3. Consultation des contacts — Read

L’utilisateur peut consulter les informations de tous les contacts enregistrés depuis la page principale de l’application.

### 4.4. Modification d’un contact — Update

L’utilisateur peut modifier les informations d’un contact existant. Le formulaire doit afficher les informations actuelles avant leur modification.

### 4.5. Suppression d’un contact — Delete

L’utilisateur peut supprimer un contact après confirmation. Le contact supprimé doit également disparaître de la liste affichée.

## 5. Interface utilisateur

L’application comporte une seule page principale comprenant :

- Un titre « Gestion de Contacts ».
- Un formulaire d’ajout et de modification.
- Une liste des contacts.
- Un bouton d’ajout.
- Des boutons de modification et de suppression pour chaque contact.
- Des messages de confirmation ou d’erreur.

L’interface doit être claire, simple et adaptée aux différents écrans.

## 6. Architecture technique

### Frontend

Le frontend développé avec React.js assure l’affichage des contacts, la gestion du formulaire et la communication avec le backend.

### Backend

Le backend développé avec Node.js et Express.js gère les requêtes, la validation des données et les opérations CRUD.

### Base de données

MongoDB permet de stocker les contacts. Mongoose assure la communication entre le backend et la base de données.

## 7. Routes de l’API REST

| Méthode HTTP | Route | Fonctionnalité |
|---|---|---|
| GET | `/api/contacts` | Afficher tous les contacts |
| GET | `/api/contacts/:id` | Consulter un contact |
| POST | `/api/contacts` | Ajouter un contact |
| PUT | `/api/contacts/:id` | Modifier un contact |
| DELETE | `/api/contacts/:id` | Supprimer un contact |

## 8. Résultat attendu

À la fin du projet, l’utilisateur pourra gérer ses contacts depuis une seule page, effectuer les opérations CRUD et conserver les informations enregistrées dans MongoDB.

Ce projet permettra de mettre en pratique les connaissances en développement Full Stack, en création d’API REST et en gestion de bases de données.