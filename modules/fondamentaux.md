# Module 1: Fondamentaux Python 🐍

## Objectifs du Module
- Comprendre les bases de Python
- Maîtriser les variables et types de données
- Apprendre les structures de contrôle
- Écrire les premières fonctions

## Leçon 1: Introduction à Python

### Qu'est-ce que Python?

Python est un langage de programmation:
- **Facile à apprendre** - Syntaxe simple et lisible
- **Polyvalent** - Web, data science, IA, automation
- **Populaire** - Utilisé par Google, Netflix, Spotify
- **Open source** - Gratuit et communauté active

### Installation et Configuration

```bash
# Vérifier l'installation
python --version

# Créer un environnement virtuel
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\\Scripts\\activate  # Windows
```

### Premier Programme

```python
# Hello World
print("Hello, Python World! 🚀")

# Afficher plusieurs lignes
print("Bienvenue sur Formation Python")
print("Niveau: Débutant")
```

---

## Leçon 2: Variables et Types de Données

### Variables

Une variable est un conteneur pour stocker des valeurs.

```python
# Définir des variables
nom = "Alice"
age = 25
taille = 1.75

# Afficher les variables
print(nom)
print(age)
print(taille)
```

### Types de Données

```python
# Nombres entiers (int)
nombre_entier = 42
negation = -10

# Nombres décimaux (float)
nombre_decimal = 3.14
pi = 3.14159

# Chaînes de caractères (str)
message = "Python est super!"
texte = 'On peut aussi utiliser des guillemets simples'

# Booléens (bool)
est_vrai = True
est_faux = False

# Vérifier le type
print(type(nombre_entier))  # <class 'int'>
print(type(nombre_decimal))  # <class 'float'>
print(type(message))  # <class 'str'>
```

### Conversion de Types

```python
# Convertir en entier
entier = int("25")
print(entier)  # 25

# Convertir en float
decimal = float("3.14")
print(decimal)  # 3.14

# Convertir en chaîne
texte = str(42)
print(texte)  # "42"
```

---

## Leçon 3: Opérations et Opérateurs

### Opérateurs Arithmétiques

```python
# Addition
resultat = 10 + 5  # 15

# Soustraction
resultat = 10 - 5  # 5

# Multiplication
resultat = 10 * 5  # 50

# Division
resultat = 10 / 5  # 2.0

# Division entière
resultat = 10 // 3  # 3

# Modulo (reste)
resultat = 10 % 3  # 1

# Puissance
resultat = 2 ** 3  # 8
```

### Opérateurs de Comparaison

```python
# Égal
5 == 5  # True

# Pas égal
5 != 3  # True

# Supérieur
5 > 3  # True

# Inférieur
5 < 10  # True

# Supérieur ou égal
5 >= 5  # True

# Inférieur ou égal
5 <= 10  # True
```

### Opérateurs Logiques

```python
# ET (and)
True and True  # True
True and False  # False

# OU (or)
True or False  # True
False or False  # False

# NON (not)
not True  # False
not False  # True
```

---

## Leçon 4: Structures de Contrôle - Conditions

### Condition if

```python
age = 18

if age >= 18:
    print("Vous êtes majeur")
```

### Condition if-else

```python
age = 15

if age >= 18:
    print("Vous êtes majeur")
else:
    print("Vous êtes mineur")
```

### Condition if-elif-else

```python
score = 75

if score >= 90:
    print("Excellent")
elif score >= 70:
    print("Bon")
elif score >= 50:
    print("Passable")
else:
    print("Échoué")
```

---

## Leçon 5: Structures de Contrôle - Boucles

### Boucle while

```python
# Compteur simple
compteur = 0
while compteur < 5:
    print(f"Compteur: {compteur}")
    compteur += 1

# Sortir avec break
while True:
    entree = input("Entrez 'quitter' pour arrêter: ")
    if entree == "quitter":
        break
    print(f"Vous avez dit: {entree}")
```

### Boucle for

```python
# Boucle sur une range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Avec un pas
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# Boucle sur une liste
fruits = ["pomme", "banane", "orange"]
for fruit in fruits:
    print(fruit)
```

---

## Leçon 6: Fonctions

### Définir une Fonction

```python
def saluer():
    print("Bonjour!")

# Appeler la fonction
saluer()
```

### Fonction avec Paramètres

```python
def saluer_personne(nom):
    print(f"Bonjour {nom}!")

saluer_personne("Alice")
saluer_personne("Bob")
```

### Fonction avec Retour

```python
def additionner(a, b):
    return a + b

resultat = additionner(5, 3)
print(resultat)  # 8
```

### Fonction avec Plusieurs Paramètres

```python
def calculer_moyenne(notes):
    total = sum(notes)
    moyenne = total / len(notes)
    return moyenne

notes = [15, 18, 16]
print(calculer_moyenne(notes))  # 16.33
```

---

## Exercices Pratiques

### Exercice 1: Calculatrice Simple
Créez une fonction qui prend deux nombres et une opération, puis retourne le résultat.

```python
def calculatrice(a, b, operation):
    if operation == "+":
        return a + b
    elif operation == "-":
        return a - b
    elif operation == "*":
        return a * b
    elif operation == "/":
        return a / b
    else:
        return "Opération inconnue"

print(calculatrice(10, 5, "+"))  # 15
```

### Exercice 2: Nombre Pair ou Impair
Écrivez un programme qui détermine si un nombre est pair ou impair.

```python
def est_pair(n):
    if n % 2 == 0:
        return True
    else:
        return False

nombre = int(input("Entrez un nombre: "))
if est_pair(nombre):
    print(f"{nombre} est pair")
else:
    print(f"{nombre} est impair")
```

### Exercice 3: Boucle FizzBuzz
Affichage de 1 à 100 avec les règles suivantes:
- Si divisible par 3: "Fizz"
- Si divisible par 5: "Buzz"
- Si divisible par 15: "FizzBuzz"

```python
for i in range(1, 101):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
```

---

## Résumé

✅ Variables et types de données  
✅ Opérateurs arithmétiques et logiques  
✅ Conditions (if, elif, else)  
✅ Boucles (while, for)  
✅ Fonctions  

## Prochaines Étapes

Félicitations! 🎉 Vous avez terminé le Module 1!

Passez au **Module 2: Programmation Orientée Objet**