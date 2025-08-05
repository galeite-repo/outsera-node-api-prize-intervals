import { sequelize } from '../../src/config/db';
import { Movie } from '../../src/models/movie';

export async function resetDatabase() {
  await sequelize.sync({ force: true });
}

export async function seedMovies() {
  const movies = [
	{
		"id": 1,
		"year": 1980,
		"title": "Can't Stop the Music",
		"studios": "Associated Film Distribution",
		"producers": "Allan Carr",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 2,
		"year": 1980,
		"title": "Cruising",
		"studios": "Lorimar Productions, United Artists",
		"producers": "Jerry Weintraub",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 3,
		"year": 1980,
		"title": "The Formula",
		"studios": "MGM, United Artists",
		"producers": "Steve Shagan",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 4,
		"year": 1980,
		"title": "Friday the 13th",
		"studios": "Paramount Pictures",
		"producers": "Sean S. Cunningham",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 5,
		"year": 1980,
		"title": "The Nude Bomb",
		"studios": "Universal Studios",
		"producers": "Jennings Lang",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 6,
		"year": 1980,
		"title": "The Jazz Singer",
		"studios": "Associated Film Distribution",
		"producers": "Jerry Leider",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 7,
		"year": 1980,
		"title": "Raise the Titanic",
		"studios": "Associated Film Distribution",
		"producers": "William Frye",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 8,
		"year": 1980,
		"title": "Saturn 3",
		"studios": "Associated Film Distribution",
		"producers": "Stanley Donen",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 9,
		"year": 1980,
		"title": "Windows",
		"studios": "United Artists",
		"producers": "Mike Lobell",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 10,
		"year": 1980,
		"title": "Xanadu",
		"studios": "Universal Studios",
		"producers": "Lawrence Gordon",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 11,
		"year": 1981,
		"title": "Mommie Dearest",
		"studios": "Paramount Pictures",
		"producers": "Frank Yablans",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 12,
		"year": 1981,
		"title": "Endless Love",
		"studios": "Universal Studios, PolyGram",
		"producers": "Dyson Lovell",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 13,
		"year": 1981,
		"title": "Heaven's Gate",
		"studios": "United Artists",
		"producers": "Joann Carelli",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 14,
		"year": 1981,
		"title": "The Legend of the Lone Ranger",
		"studios": "Universal Studios, Associated Film Distribution",
		"producers": "Walter Coblenz",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 15,
		"year": 1981,
		"title": "Tarzan, the Ape Man",
		"studios": "MGM, United Artists",
		"producers": "John Derek",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 16,
		"year": 1982,
		"title": "Inchon",
		"studios": "MGM",
		"producers": "Mitsuharu Ishii",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 17,
		"year": 1982,
		"title": "Annie",
		"studios": "Columbia Pictures",
		"producers": "Ray Stark",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 18,
		"year": 1982,
		"title": "Butterfly",
		"studios": "Analysis Film Releasing",
		"producers": "Matt Cimber",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 19,
		"year": 1982,
		"title": "Megaforce",
		"studios": "20th Century Fox",
		"producers": "Albert S. Ruddy",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 20,
		"year": 1982,
		"title": "The Pirate Movie",
		"studios": "20th Century Fox",
		"producers": "David Joseph",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 21,
		"year": 1983,
		"title": "The Lonely Lady",
		"studios": "Universal Studios",
		"producers": "Robert R. Weston",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 22,
		"year": 1983,
		"title": "Hercules",
		"studios": "MGM, United Artists, Cannon Films",
		"producers": "Yoram Globus and Menahem Golan",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 23,
		"year": 1983,
		"title": "Jaws 3-D",
		"studios": "Universal Studios",
		"producers": "Rupert Hitzig",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 24,
		"year": 1983,
		"title": "Stroker Ace",
		"studios": "Warner Bros., Universal Studios",
		"producers": "Hank Moonjean",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 25,
		"year": 1983,
		"title": "Two of a Kind",
		"studios": "20th Century Fox",
		"producers": "Roger M. Rothstein and Joe Wizan",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 26,
		"year": 1984,
		"title": "Bolero",
		"studios": "Cannon Films",
		"producers": "Bo Derek",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 27,
		"year": 1984,
		"title": "Cannonball Run II",
		"studios": "Warner Bros.",
		"producers": "Albert S. Ruddy",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 28,
		"year": 1984,
		"title": "Rhinestone",
		"studios": "20th Century Fox",
		"producers": "Marvin Worth and Howard Smith",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 29,
		"year": 1984,
		"title": "Sheena",
		"studios": "Columbia Pictures",
		"producers": "Paul Aratow",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 30,
		"year": 1984,
		"title": "Where the Boys Are '84",
		"studios": "TriStar Pictures",
		"producers": "Allan Carr",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 31,
		"year": 1985,
		"title": "Rambo: First Blood Part II",
		"studios": "Columbia Pictures",
		"producers": "Buzz Feitshans",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 32,
		"year": 1985,
		"title": "Fever Pitch",
		"studios": "MGM, United Artists",
		"producers": "Freddie Fields",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 33,
		"year": 1985,
		"title": "Revolution",
		"studios": "Warner Bros.",
		"producers": "Irwin Winkler",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 34,
		"year": 1985,
		"title": "Rocky IV",
		"studios": "MGM, United Artists",
		"producers": "Irwin Winkler and Robert Chartoff",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 35,
		"year": 1985,
		"title": "Year of the Dragon",
		"studios": "MGM, United Artists",
		"producers": "Dino De Laurentiis",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 36,
		"year": 1986,
		"title": "Howard the Duck",
		"studios": "Universal Studios",
		"producers": "Gloria Katz",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 37,
		"year": 1986,
		"title": "Under the Cherry Moon",
		"studios": "Warner Bros.",
		"producers": "Bob Cavallo, Joe Ruffalo and Steve Fargnoli",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 38,
		"year": 1986,
		"title": "Blue City",
		"studios": "Paramount Pictures",
		"producers": "William L. Hayward and Walter Hill",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 39,
		"year": 1986,
		"title": "Cobra",
		"studios": "Warner Bros., Cannon Films",
		"producers": "Yoram Globus and Menahem Golan",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 40,
		"year": 1986,
		"title": "Shanghai Surprise",
		"studios": "MGM",
		"producers": "John Kohn",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 41,
		"year": 1987,
		"title": "Leonard Part 6",
		"studios": "Columbia Pictures",
		"producers": "Bill Cosby",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 42,
		"year": 1987,
		"title": "Ishtar",
		"studios": "Columbia Pictures",
		"producers": "Warren Beatty",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 43,
		"year": 1987,
		"title": "Jaws: The Revenge",
		"studios": "Universal Studios",
		"producers": "Joseph Sargent",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 44,
		"year": 1987,
		"title": "Tough Guys Don't Dance",
		"studios": "Cannon Films",
		"producers": "Yoram Globus and Menahem Golan",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 45,
		"year": 1987,
		"title": "Who's That Girl",
		"studios": "Warner Bros.",
		"producers": "Rosilyn Heller and Bernard Williams",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 46,
		"year": 1988,
		"title": "Cocktail",
		"studios": "Touchstone Pictures",
		"producers": "Ted Field and Robert W. Cort",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 47,
		"year": 1988,
		"title": "Caddyshack II",
		"studios": "Warner Bros.",
		"producers": "Neil Canton, Jon Peters and Peter Guber",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 48,
		"year": 1988,
		"title": "Hot to Trot",
		"studios": "Warner Bros.",
		"producers": "Steve Tisch",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 49,
		"year": 1988,
		"title": "Mac and Me",
		"studios": "Orion Pictures",
		"producers": "R. J. Louis",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 50,
		"year": 1988,
		"title": "Rambo III",
		"studios": "TriStar Pictures, Carolco Pictures",
		"producers": "Buzz Feitshans",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 51,
		"year": 1989,
		"title": "Star Trek V: The Final Frontier",
		"studios": "Paramount Pictures",
		"producers": "Harve Bennett",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 52,
		"year": 1989,
		"title": "The Karate Kid Part III",
		"studios": "Columbia Pictures",
		"producers": "Jerry Weintraub",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 53,
		"year": 1989,
		"title": "Lock Up",
		"studios": "TriStar Pictures, Carolco Pictures",
		"producers": "Charles Gordon and Lawrence Gordon",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 54,
		"year": 1989,
		"title": "Road House",
		"studios": "United Artists",
		"producers": "Joel Silver",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 55,
		"year": 1989,
		"title": "Speed Zone",
		"studios": "Orion Pictures",
		"producers": "Murray Shostack",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 56,
		"year": 1990,
		"title": "The Adventures of Ford Fairlane",
		"studios": "20th Century Fox",
		"producers": "Steven Perry and Joel Silver",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 57,
		"year": 1990,
		"title": "Ghosts Can't Do It",
		"studios": "Triumph Releasing",
		"producers": "Bo Derek",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 58,
		"year": 1990,
		"title": "The Bonfire of the Vanities",
		"studios": "Warner Bros.",
		"producers": "Brian De Palma",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 59,
		"year": 1990,
		"title": "Graffiti Bridge",
		"studios": "Warner Bros.",
		"producers": "Randy Phillips and Craig Rice",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 60,
		"year": 1990,
		"title": "Rocky V",
		"studios": "United Artists",
		"producers": "Robert Chartoff and Irwin Winkler",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 61,
		"year": 1991,
		"title": "Hudson Hawk",
		"studios": "TriStar Pictures",
		"producers": "Joel Silver",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 62,
		"year": 1991,
		"title": "Cool as Ice",
		"studios": "Universal Studios",
		"producers": "Carolyn Pfeiffer and Lionel Wingram",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 63,
		"year": 1991,
		"title": "Dice Rules",
		"studios": "Seven Arts Productions",
		"producers": "Loucas George",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 64,
		"year": 1991,
		"title": "Nothing but Trouble",
		"studios": "Warner Bros.",
		"producers": "Lester Berman and Robert K. Weiss",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 65,
		"year": 1991,
		"title": "Return to the Blue Lagoon",
		"studios": "Columbia Pictures",
		"producers": "William A. Graham",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 66,
		"year": 1992,
		"title": "Shining Through",
		"studios": "20th Century Fox",
		"producers": "Carol Baum and Howard Rosenman",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 67,
		"year": 1992,
		"title": "The Bodyguard",
		"studios": "Warner Bros.",
		"producers": "Kevin Costner, Lawrence Kasdan and Jim Wilson",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 68,
		"year": 1992,
		"title": "Christopher Columbus: The Discovery",
		"studios": "Warner Bros.",
		"producers": "Alexander Salkind and Ilya Salkind",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 69,
		"year": 1992,
		"title": "Final Analysis",
		"studios": "20th Century Fox",
		"producers": "Paul Junger Witt, Charles Roven and Tony Thomas",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 70,
		"year": 1992,
		"title": "Newsies",
		"studios": "Walt Disney Pictures",
		"producers": "Michael Finnell",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 71,
		"year": 1993,
		"title": "Indecent Proposal",
		"studios": "Paramount Pictures",
		"producers": "Sherry Lansing",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 72,
		"year": 1993,
		"title": "Body of Evidence",
		"studios": "MGM, United Artists",
		"producers": "Dino De Laurentiis",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 73,
		"year": 1993,
		"title": "Cliffhanger",
		"studios": "TriStar Pictures, Carolco Pictures",
		"producers": "Renny Harlin and Alan Marshall",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 74,
		"year": 1993,
		"title": "Last Action Hero",
		"studios": "Columbia Pictures",
		"producers": "John McTiernan and Stephen J. Roth",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 75,
		"year": 1993,
		"title": "Sliver",
		"studios": "Paramount Pictures",
		"producers": "Robert Evans",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 76,
		"year": 1994,
		"title": "Color of Night",
		"studios": "Hollywood Pictures",
		"producers": "Buzz Feitshans and David Matalon",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 77,
		"year": 1994,
		"title": "North",
		"studios": "Columbia Pictures, Castle Rock Entertainment",
		"producers": "Rob Reiner and Alan Zweibel",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 78,
		"year": 1994,
		"title": "On Deadly Ground",
		"studios": "Warner Bros.",
		"producers": "A. Kitman Ho, Julius R. Nasso and Steven Seagal",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 79,
		"year": 1994,
		"title": "The Specialist",
		"studios": "Warner Bros.",
		"producers": "Jerry Weintraub",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 80,
		"year": 1994,
		"title": "Wyatt Earp",
		"studios": "Warner Bros.",
		"producers": "Kevin Costner, Lawrence Kasdan and Jim Wilson",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 81,
		"year": 1995,
		"title": "Showgirls",
		"studios": "MGM, United Artists",
		"producers": "Charles Evans and Alan Marshall",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 82,
		"year": 1995,
		"title": "Congo",
		"studios": "Paramount Pictures",
		"producers": "Kathleen Kennedy and Sam Mercer",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 83,
		"year": 1995,
		"title": "It's Pat",
		"studios": "Touchstone Pictures",
		"producers": "Charles B. Wessler",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 84,
		"year": 1995,
		"title": "The Scarlet Letter",
		"studios": "Hollywood Pictures",
		"producers": "Roland Joffé and Andrew G. Vajna",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 85,
		"year": 1995,
		"title": "Waterworld",
		"studios": "Universal Studios",
		"producers": "Kevin Costner, John Davis, Charles Gordon and Lawrence Gordon",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 86,
		"year": 1996,
		"title": "Striptease",
		"studios": "Columbia Pictures, Castle Rock Entertainment",
		"producers": "Andrew Bergman and Mike Lobell",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 87,
		"year": 1996,
		"title": "Barb Wire",
		"studios": "PolyGram Filmed Entertainment, Gramercy Pictures",
		"producers": "Todd Moyer, Mike Richardson and Brad Wyman",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 88,
		"year": 1996,
		"title": "Ed",
		"studios": "Universal Studios",
		"producers": "Rosalie Swedlin",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 89,
		"year": 1996,
		"title": "The Island of Dr. Moreau",
		"studios": "New Line Cinema",
		"producers": "Edward R. Pressman",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 90,
		"year": 1996,
		"title": "The Stupids",
		"studios": "New Line Cinema, Savoy Pictures",
		"producers": "Leslie Belzberg",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 91,
		"year": 1997,
		"title": "The Postman",
		"studios": "Warner Bros.",
		"producers": "Kevin Costner, Steve Tisch and Jim Wilson",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 92,
		"year": 1997,
		"title": "Anaconda",
		"studios": "Columbia Pictures",
		"producers": "Verna Harrah, Carole Little and Leonard Rabinowitz",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 93,
		"year": 1997,
		"title": "Batman & Robin",
		"studios": "Warner Bros.",
		"producers": "Peter MacGregor-Scott",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 94,
		"year": 1997,
		"title": "Fire Down Below",
		"studios": "Warner Bros.",
		"producers": "Julius R. Nasso and Steven Seagal",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 95,
		"year": 1997,
		"title": "Speed 2: Cruise Control",
		"studios": "20th Century Fox",
		"producers": "Jan de Bont, Steve Perry and Michael Peyser",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 96,
		"year": 1998,
		"title": "An Alan Smithee Film: Burn Hollywood Burn",
		"studios": "Hollywood Pictures",
		"producers": "Ben Myron and Joe Eszterhas",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 97,
		"year": 1998,
		"title": "Armageddon",
		"studios": "Touchstone Pictures",
		"producers": "Michael Bay and Jerry Bruckheimer",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 98,
		"year": 1998,
		"title": "The Avengers",
		"studios": "Warner Bros.",
		"producers": "Jerry Weintraub",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 99,
		"year": 1998,
		"title": "Godzilla",
		"studios": "TriStar Pictures",
		"producers": "Roland Emmerich and Dean Devlin",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 100,
		"year": 1998,
		"title": "Spice World",
		"studios": "Columbia Pictures",
		"producers": "Uri Fruchtan, Mark L. Rosen and Barnaby Thompson",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 101,
		"year": 1999,
		"title": "Wild Wild West",
		"studios": "Warner Bros.",
		"producers": "Jon Peters and Barry Sonnenfeld",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 102,
		"year": 1999,
		"title": "Big Daddy",
		"studios": "Columbia Pictures",
		"producers": "Sidney Ganis and Jack Giarraputo",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 103,
		"year": 1999,
		"title": "The Blair Witch Project",
		"studios": "Artisan Entertainment",
		"producers": "Robin Cowie and Gregg Hale",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 104,
		"year": 1999,
		"title": "The Haunting",
		"studios": "DreamWorks",
		"producers": "Susan Arthur, Donna Roth and Colin Wilson",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 105,
		"year": 1999,
		"title": "Star Wars: Episode I – The Phantom Menace",
		"studios": "20th Century Fox",
		"producers": "Rick McCallum and George Lucas",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 106,
		"year": 2000,
		"title": "Battlefield Earth",
		"studios": "Warner Bros., Franchise Pictures",
		"producers": "Jonathan D. Krane, Elie Samaha and John Travolta",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 107,
		"year": 2000,
		"title": "Book of Shadows: Blair Witch 2",
		"studios": "Artisan Entertainment",
		"producers": "Bill Carraro",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 108,
		"year": 2000,
		"title": "The Flintstones in Viva Rock Vegas",
		"studios": "Universal Studios",
		"producers": "Bruce Cohen",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 109,
		"year": 2000,
		"title": "Little Nicky",
		"studios": "New Line Cinema",
		"producers": "Jack Giarraputo and Robert Simonds",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 110,
		"year": 2000,
		"title": "The Next Best Thing",
		"studios": "Paramount Pictures",
		"producers": "Leslie Dixon, Linne Radmin and Tom Rosenberg",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 111,
		"year": 2001,
		"title": "Freddy Got Fingered",
		"studios": "20th Century Fox",
		"producers": "Larry Brezner, Howard Lapides and Lauren Lloyd",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 112,
		"year": 2001,
		"title": "Driven",
		"studios": "Warner Bros., Franchise Pictures",
		"producers": "Renny Harlin, Elie Samaha and Sylvester Stallone",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 113,
		"year": 2001,
		"title": "Glitter",
		"studios": "20th Century Fox, Columbia Pictures",
		"producers": "Laurence Mark and E. Bennett Walsh",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 114,
		"year": 2001,
		"title": "Pearl Harbor",
		"studios": "Touchstone Pictures",
		"producers": "Michael Bay and Jerry Bruckheimer",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 115,
		"year": 2001,
		"title": "3000 Miles to Graceland",
		"studios": "Warner Bros., Franchise Pictures",
		"producers": "Demian Lichtenstein, Eric Manes, Elie Samaha, Richard Spero and Andrew Stevens",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 116,
		"year": 2002,
		"title": "Swept Away",
		"studios": "Screen Gems",
		"producers": "Matthew Vaughn",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 117,
		"year": 2002,
		"title": "The Adventures of Pluto Nash",
		"studios": "Warner Bros.",
		"producers": "Martin Bregman, Michael Scott Bregman and Louis A. Stroller",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 118,
		"year": 2002,
		"title": "Crossroads",
		"studios": "Paramount Pictures",
		"producers": "Ann Carli",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 119,
		"year": 2002,
		"title": "Pinocchio",
		"studios": "Miramax Films",
		"producers": "Gianluigi Braschi, Nicoletta Braschi and Elda Ferri",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 120,
		"year": 2002,
		"title": "Star Wars: Episode II – Attack of the Clones",
		"studios": "20th Century Fox",
		"producers": "Rick McCallum and George Lucas",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 121,
		"year": 2003,
		"title": "Gigli",
		"studios": "Columbia Pictures, Revolution Studios",
		"producers": "Martin Brest and Casey Silver",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 122,
		"year": 2003,
		"title": "The Cat in the Hat",
		"studios": "Universal Studios, DreamWorks",
		"producers": "Brian Grazer",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 123,
		"year": 2003,
		"title": "Charlie's Angels: Full Throttle",
		"studios": "Columbia Pictures",
		"producers": "Drew Barrymore, Leonard Goldberg and Nancy Juvonen",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 124,
		"year": 2003,
		"title": "From Justin to Kelly",
		"studios": "20th Century Fox",
		"producers": "John Steven Agoglia",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 125,
		"year": 2003,
		"title": "The Real Cancun",
		"studios": "New Line Cinema",
		"producers": "Mary-Ellis Bunim, Jonathan Murray, Jamie Schutz and Rick de Oliveira",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 126,
		"year": 2004,
		"title": "Catwoman",
		"studios": "Warner Bros.",
		"producers": "Denise Di Novi and Edward McDonnell",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 127,
		"year": 2004,
		"title": "Alexander",
		"studios": "Warner Bros.",
		"producers": "Moritz Borman, Jon Kilik, Thomas Schuhly and Iain Smith",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 128,
		"year": 2004,
		"title": "Superbabies: Baby Geniuses 2",
		"studios": "Triumph Films",
		"producers": "Steven Paul",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 129,
		"year": 2004,
		"title": "Surviving Christmas",
		"studios": "DreamWorks",
		"producers": "Betty Thomas and Jenno Topping",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 130,
		"year": 2004,
		"title": "White Chicks",
		"studios": "Columbia Pictures, Revolution Studios",
		"producers": "Rick Alvarez, Lee R. Mayes, Keenen Ivory Wayans, Marlon Wayans and Shawn Wayans",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 131,
		"year": 2005,
		"title": "Dirty Love",
		"studios": "First Look Pictures",
		"producers": "John Mallory Asher, BJ Davis, Rod Hamilton, Kimberley Kates, Michael Manasseri, Jenny McCarthy and Trent Walford",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 132,
		"year": 2005,
		"title": "Deuce Bigalow: European Gigolo",
		"studios": "Columbia Pictures",
		"producers": "Adam Sandler and Rob Schneider",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 133,
		"year": 2005,
		"title": "The Dukes of Hazzard",
		"studios": "Warner Bros., Village Roadshow",
		"producers": "Bill Gerber",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 134,
		"year": 2005,
		"title": "House of Wax",
		"studios": "Warner Bros., Village Roadshow",
		"producers": "Susan Levin, Joel Silver and Robert Zemeckis",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 135,
		"year": 2005,
		"title": "Son of the Mask",
		"studios": "New Line Cinema",
		"producers": "Erica Huggins and Scott Kroopf",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 136,
		"year": 2006,
		"title": "Basic Instinct 2",
		"studios": "MGM, C2 Pictures",
		"producers": "Mario Kassar, Joel B. Michaels and Andrew G. Vajna",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 137,
		"year": 2006,
		"title": "BloodRayne",
		"studios": "Romar Entertainment",
		"producers": "Uwe Boll, Dan Clarke and Wolfgang Herrold",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 138,
		"year": 2006,
		"title": "Lady in the Water",
		"studios": "Warner Bros.",
		"producers": "Sam Mercer, Jose L. Rodriguez and M. Night Shyamalan",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 139,
		"year": 2006,
		"title": "Little Man",
		"studios": "Columbia Pictures, Revolution Studios",
		"producers": "Rick Alvares, Lee Mays, Marlon Wayans and Shawn Wayans",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 140,
		"year": 2006,
		"title": "The Wicker Man",
		"studios": "Warner Bros.",
		"producers": "Nicolas Cage, Randall Emmett, Norm Golightly, Avi Lerner and Joanne Sellar",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 141,
		"year": 2007,
		"title": "I Know Who Killed Me",
		"studios": "TriStar Pictures",
		"producers": "David Grace and Frank Mancuso Jr.",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 142,
		"year": 2007,
		"title": "Bratz",
		"studios": "Lionsgate",
		"producers": "Avi Arad, Isaac Larian and Steven Paul",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 143,
		"year": 2007,
		"title": "Daddy Day Camp",
		"studios": "TriStar Pictures, Revolution Studios",
		"producers": "Matt Berenson, John Davis and Wyck Godfrey",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 144,
		"year": 2007,
		"title": "I Now Pronounce You Chuck & Larry",
		"studios": "Universal Studios",
		"producers": "Adam Sandler and Tom Shadyac",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 145,
		"year": 2007,
		"title": "Norbit",
		"studios": "DreamWorks",
		"producers": "John Davis, Eddie Murphy and Michael Tollin",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 146,
		"year": 2008,
		"title": "The Love Guru",
		"studios": "Paramount Pictures",
		"producers": "Gary Barber, Michael DeLuca and Mike Myers",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 147,
		"year": 2008,
		"title": "Disaster Movie and Meet the Spartans",
		"studios": "Lionsgate, 20th Century Fox",
		"producers": "Jason Friedberg, Peter Safran and Aaron Seltzer",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 148,
		"year": 2008,
		"title": "The Happening",
		"studios": "20th Century Fox",
		"producers": "Barry Mendel, Sam Mercer and M. Night Shyamalan",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 149,
		"year": 2008,
		"title": "The Hottie & the Nottie",
		"studios": "Regent Releasing",
		"producers": "Hadeel Reda",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 150,
		"year": 2008,
		"title": "In the Name of the King",
		"studios": "Boll KG, Brightlight Pictures",
		"producers": "Uwe Boll, Dan Clarke, Wolfgang Herrold and Shawn Williamson",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 151,
		"year": 2009,
		"title": "Transformers: Revenge of the Fallen",
		"studios": "Paramount Pictures, DreamWorks, Hasbro",
		"producers": "Lorenzo di Bonaventura, Ian Bryce, Tom DeSanto and Don Murphy",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 152,
		"year": 2009,
		"title": "All About Steve",
		"studios": "20th Century Fox",
		"producers": "Sandra Bullock and Mary McLaglen",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 153,
		"year": 2009,
		"title": "G.I. Joe: The Rise of Cobra",
		"studios": "Paramount Pictures, Hasbro",
		"producers": "Lorenzo di Bonaventura, Bob Ducsay and Brian Goldner",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 154,
		"year": 2009,
		"title": "Land of the Lost",
		"studios": "Universal Studios",
		"producers": "Sid and Marty Krofft and Jimmy Miller",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 155,
		"year": 2009,
		"title": "Old Dogs",
		"studios": "Walt Disney Pictures",
		"producers": "Peter Abrams, Robert Levy and Andrew Panay",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 156,
		"year": 2010,
		"title": "The Last Airbender",
		"studios": "Paramount Pictures, Nickelodeon Movies",
		"producers": "Frank Marshall, Kathleen Kennedy, Sam Mercer and M. Night Shyamalan",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 157,
		"year": 2010,
		"title": "The Bounty Hunter",
		"studios": "Columbia Pictures",
		"producers": "Neal H. Moritz",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 158,
		"year": 2010,
		"title": "Sex and the City 2",
		"studios": "New Line Cinema, HBO Films, Village Roadshow Pictures",
		"producers": "Michael Patrick King, John Melfi, Sarah Jessica Parker and Darren Star",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 159,
		"year": 2010,
		"title": "The Twilight Saga: Eclipse",
		"studios": "Summit Entertainment",
		"producers": "Wyck Godfrey and Karen Rosenfelt",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 160,
		"year": 2010,
		"title": "Vampires Suck",
		"studios": "20th Century Fox",
		"producers": "Jason Friedberg, Peter Safran and Aaron Seltzer",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 161,
		"year": 2011,
		"title": "Jack and Jill",
		"studios": "Columbia Pictures",
		"producers": "Todd Garner, Jack Giarraputo and Adam Sandler",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 162,
		"year": 2011,
		"title": "Bucky Larson: Born to Be a Star",
		"studios": "Columbia Pictures",
		"producers": "Barry Bernardi, Allen Covert, David Dorfman and Jack Giarraputo",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 163,
		"year": 2011,
		"title": "New Year's Eve",
		"studios": "Warner Bros., New Line Cinema",
		"producers": "Mike Karz, Garry Marshall and Wayne Allan Rice",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 164,
		"year": 2011,
		"title": "Transformers: Dark of the Moon",
		"studios": "Paramount Pictures",
		"producers": "Lorenzo di Bonaventura, Ian Bryce, Tom DeSanto and Don Murphy",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 165,
		"year": 2011,
		"title": "The Twilight Saga: Breaking Dawn – Part 1",
		"studios": "Summit Entertainment",
		"producers": "Wyck Godfrey, Stephenie Meyer and Karen Rosenfelt",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 166,
		"year": 2012,
		"title": "The Twilight Saga: Breaking Dawn – Part 2",
		"studios": "Summit Entertainment",
		"producers": "Wyck Godfrey, Stephenie Meyer and Karen Rosenfelt",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 167,
		"year": 2012,
		"title": "Battleship",
		"studios": "Universal Studios",
		"producers": "Sarah Aubrey, Peter Berg, Brian Goldner, Duncan Henderson, Bennett Schneir and Scott Stuber",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 168,
		"year": 2012,
		"title": "The Oogieloves in the Big Balloon Adventure",
		"studios": "Lionsgate Films, Romar Entertainment, Kenn Viselman Presents",
		"producers": "Gayle Dickie, Kenn Viselman",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 169,
		"year": 2012,
		"title": "That's My Boy",
		"studios": "Columbia Pictures",
		"producers": "Allen Covert, Jack Giarraputo, Heather Parry and Adam Sandler",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 170,
		"year": 2012,
		"title": "A Thousand Words",
		"studios": "Paramount Pictures, DreamWorks",
		"producers": "Nicolas Cage, Alain Chabat, Stephanie Danan, Norman Golightly, Brian Robbinsand Sharla Sumpter Bridgett",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 171,
		"year": 2013,
		"title": "Movie 43",
		"studios": "Relativity Media",
		"producers": "Peter Farrelly, Ryan Kavanaugh, John Penotti and Charles B. Wessler",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 172,
		"year": 2013,
		"title": "After Earth",
		"studios": "Columbia Pictures",
		"producers": "James Lassiter, Caleeb Pinkett, Jada Pinkett Smith, M. Night Shyamalan, Will Smith and Jaden Smith",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 173,
		"year": 2013,
		"title": "Grown Ups 2",
		"studios": "Columbia Pictures",
		"producers": "Jack Giarraputo and Adam Sandler",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 174,
		"year": 2013,
		"title": "The Lone Ranger",
		"studios": "Walt Disney Pictures",
		"producers": "Jerry Bruckheimer and Gore Verbinski",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 175,
		"year": 2013,
		"title": "A Madea Christmas",
		"studios": "Lionsgate",
		"producers": "Ozzie Areu, Matt Moore and Tyler Perry",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 176,
		"year": 2014,
		"title": "Saving Christmas",
		"studios": "Samuel Goldwyn Films",
		"producers": "Darren Doane, Raphi Henley, Amanda Rosser and David Shannon",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 177,
		"year": 2014,
		"title": "Left Behind",
		"studios": "Freestyle Releasing, Entertainment One",
		"producers": "Michael Walker and Paul LaLonde",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 178,
		"year": 2014,
		"title": "The Legend of Hercules",
		"studios": "Summit Entertainment",
		"producers": "Boaz Davidson, Renny Harlin, Danny Lerner and Les Weldon",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 179,
		"year": 2014,
		"title": "Teenage Mutant Ninja Turtles",
		"studios": "Paramount Pictures, Nickelodeon Movies, Platinum Dunes",
		"producers": "Michael Bay, Ian Bryce, Andrew Form, Bradley Fuller, Scott Mednick and Galen Walker",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 180,
		"year": 2014,
		"title": "Transformers: Age of Extinction",
		"studios": "Paramount Pictures",
		"producers": "Ian Bryce, Tom DeSanto, Lorenzo di Bonaventura and Don Murphy",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 181,
		"year": 2015,
		"title": "Fantastic Four",
		"studios": "20th Century Fox",
		"producers": "Simon Kinberg, Matthew Vaughn, Hutch Parker, Robert Kulzer and Gregory Goodman",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 182,
		"year": 2015,
		"title": "Fifty Shades of Grey",
		"studios": "Universal Pictures, Focus Features",
		"producers": "Michael De Luca, Dana Brunetti and E. L. James",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 183,
		"year": 2015,
		"title": "Jupiter Ascending",
		"studios": "Warner Bros.",
		"producers": "Grant Hill and The Wachowskis",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 184,
		"year": 2015,
		"title": "Paul Blart: Mall Cop 2",
		"studios": "Columbia Pictures",
		"producers": "Todd Garner, Kevin James and Adam Sandler",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 185,
		"year": 2015,
		"title": "Pixels",
		"studios": "Columbia Pictures",
		"producers": "Adam Sandler, Chris Columbus, Mark Radcliffe and Allen Covert",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 186,
		"year": 2016,
		"title": "Hillary's America: The Secret History of the Democratic Party",
		"studios": "Quality Flix",
		"producers": "Gerald R. Molen",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 187,
		"year": 2016,
		"title": "Batman v Superman: Dawn of Justice",
		"studios": "Warner Bros.",
		"producers": "Charles Roven and Deborah Snyder",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 188,
		"year": 2016,
		"title": "Dirty Grandpa",
		"studios": "Lionsgate",
		"producers": "Bill Block, Michael Simkin, Jason Barrett and Barry Josephson",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 189,
		"year": 2016,
		"title": "Gods of Egypt",
		"studios": "Summit Entertainment",
		"producers": "Basil Iwanyk and Alex Proyas",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 190,
		"year": 2016,
		"title": "Independence Day: Resurgence",
		"studios": "20th Century Fox",
		"producers": "Dean Devlin, Harald Kloser and Roland Emmerich",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 191,
		"year": 2016,
		"title": "Zoolander 2",
		"studios": "Paramount Pictures",
		"producers": "Stuart Cornfeld, Scott Rudin, Ben Stiller and Clayton Townsend",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 192,
		"year": 2017,
		"title": "The Emoji Movie",
		"studios": "Columbia Pictures",
		"producers": "Michelle Raimo Kouyate",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 193,
		"year": 2017,
		"title": "Baywatch",
		"studios": "Paramount Pictures",
		"producers": "Ivan Reitman, Michael Berk, Douglas Schwartz, Gregory J. Bonann and Beau Flynn",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 194,
		"year": 2017,
		"title": "Fifty Shades Darker",
		"studios": "Universal Pictures",
		"producers": "Michael De Luca, E. L. James, Dana Brunetti and Marcus Viscidi",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 195,
		"year": 2017,
		"title": "The Mummy",
		"studios": "Universal Pictures",
		"producers": "Alex Kurtzman, Chris Morgan, Sean Daniel and Sarah Bradshaw",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 196,
		"year": 2017,
		"title": "Transformers: The Last Knight",
		"studios": "Paramount Pictures",
		"producers": "Don Murphy, Tom DeSanto, Lorenzo di Bonaventura and Ian Bryce",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 197,
		"year": 2018,
		"title": "Holmes & Watson",
		"studios": "Columbia Pictures",
		"producers": "Will Ferrell, Adam McKay, Jimmy Miller and Clayton Townsend",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 198,
		"year": 2018,
		"title": "Gotti",
		"studios": "Vertical Entertainment",
		"producers": "Randall Emmett, Marc Fiore, Michael Froch and George Furla",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 199,
		"year": 2018,
		"title": "The Happytime Murders",
		"studios": "STX",
		"producers": "Ben Falcone, Jeffrey Hayes, Brian Henson and Melissa McCarthy",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 200,
		"year": 2018,
		"title": "Robin Hood",
		"studios": "Summit Entertainment",
		"producers": "Jennifer Davisson and Leonardo DiCaprio",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 201,
		"year": 2018,
		"title": "Winchester",
		"studios": "Lionsgate",
		"producers": "Tim McGahan and Brett Tomberlin",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 202,
		"year": 2019,
		"title": "Cats",
		"studios": "Universal Pictures",
		"producers": "Debra Hayward, Tim Bevan, Eric Fellner, and Tom Hooper",
		"winner": "yes",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 203,
		"year": 2019,
		"title": "The Fanatic",
		"studios": "Quiver Distribution",
		"producers": "Daniel Grodnik, Oscar Generale, and Bill Kenwright",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 204,
		"year": 2019,
		"title": "The Haunting of Sharon Tate",
		"studios": "Saban Films",
		"producers": "Lucas Jarach, Daniel Farrands, and Eric Brenner",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 205,
		"year": 2019,
		"title": "A Madea Family Funeral",
		"studios": "Lionsgate",
		"producers": "Ozzie Areu, Will Areu, and Mark E. Swinton",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	},
	{
		"id": 206,
		"year": 2019,
		"title": "Rambo: Last Blood",
		"studios": "Lionsgate",
		"producers": "Avi Lerner, Kevin King Templeton, Yariv Lerner, and Les Weldon",
		"winner": "",
		"createdAt": "2025-08-05T15:16:55.694Z",
		"updatedAt": "2025-08-05T15:16:55.694Z"
	}
]

  await Movie.bulkCreate(movies);
}
