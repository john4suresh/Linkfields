# Linkfields Assignment

1.) API endpoint: https://pokeapi.co/api/v2/pokemon?limit=100
2.) Display the data from the above API using pagination with 10 items per page (Preferably use AntDesign). Use the “name” key from the API data to display.
3.) Clicking on each name, another API call should be made using the “url” key from the existing API data to display the details of single pokemon.
4.) Details of a single pokemon should be displayed in a separate route and the view should be in this format:
Left: Image of the pokemon (Construct the image URL using “https://pokeres.bastionbot.org/images/pokemon/${pokemonID}.png”)
Right: “name”, below display the names of all the “types”
