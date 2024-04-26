import { AppDataSource } from "./data-source"
import { Movie } from "./entity/Movie"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new movie into the database...")
    const movie = new Movie()
    movie.name = "Timber"
    movie.description = "Saw"
    movie.categories = "25"
    await AppDataSource.manager.save(movie)
    console.log("Saved a new movie with id: " + movie.id)

    console.log("Loading movies from the database...")
    const movies = await AppDataSource.manager.find(Movie)
    console.log("Loaded movies: ", movies)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log("erro na conexão", error))
