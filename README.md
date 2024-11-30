# Pokémon Project

## Description

This project is a web application that allows users to explore various Pokémon, displaying detailed information about them, including their types and abilities. The application is built using React and utilizes the PokeAPI to fetch data in real time.

## Main Components

- **App**: The main component that manages the application's routes.
- **Main**: A component that displays the list of Pokémon and allows searching by type.
- **PokemonInfo**: A component that shows detailed information about a specific Pokémon.
- **NotFound**: A component that is displayed when the route is invalid.
- **Footer**: A footer component that includes credits.

## Hooks Used

- **usePokemon**: A custom hook to manage the logic related to fetching information about a specific Pokémon.
- **usePokemons**: A custom hook to handle the logic for fetching and searching multiple Pokémon.

## Routes

- `/`: Displays the main list of Pokémon.
- `/pokemon/type/:type`: Displays Pokémon filtered by type.
- `/pokemon/:order`: Displays detailed information about a specific Pokémon.
- `*`: Displays a "Not Found" component for invalid routes.

## Inspiration

This project is based on the **Portal Pokémon**, where you can find resources and examples on how to structure Pokémon-related applications. You can visit the [Portal Pokémon](https://sg.portal-pokemon.com/play/pokedex) page for more information.

## Installation

Clone the repository:

```bash
git clone <git@github.com:CarlosE-23/Pokedex.git>
```
