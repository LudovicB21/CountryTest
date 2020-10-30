# Test technique React.js

## Sujet

L'application doit afficher une liste de pays avec son drapeau.

Elle doit appeler une API qui retournera la liste des pays. Pour chaque pays retourné, il faudra afficher son drapeau associé.

## Fixtures/Assets

* La liste des pays est accessible ici : https://restcountries.eu/rest/v2/all
* Les images des drapeaux de pays sont dans le dossier `assets`

## Commencer avec le projet

* Démarrer Docker avec `docker-compose up -d`
* Tester votre projet sur `http://localhost:3000`

## Bonus

* En cliquant sur un pays de la liste, on arrive sur la page du pays avec des informations supplémentaires sur celui-ci : la population, le numéro, la région, la sous-région et les devises.
* Ajouter un champ pour rechercher un pays de la liste.

## A rajouter

* Changements CSS pour le listing des pays.
* Mise en place d'un context pour l'appel API