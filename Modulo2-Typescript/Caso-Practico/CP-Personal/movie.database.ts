import { IMovie } from "./movie";



export class MovieDatabase{
    private movies: Array<IMovie>=[];

    //METODOS
    //Consultar
    public findAll(): Array<IMovie>{

        return new Array(...this.movies);

    }
    public findById( id: number): IMovie | undefined{
        return this.movies.find(film => film.id === id);
    }
    findByTitle(title: string): Array<IMovie>{
        return this.movies.filter(film => film.title === title)
//REVISAR ESTE METODO
    }
    public save(movie: IMovie): IMovie{
        if(movie.id !== -1)
        throw new Error("La pelicula seleccionada no es correcta")
        if(! this.isValid(movie))
        throw new Error("Datos incorrectos")
        movie.id = this.generateNextId()
        this.movies.push(movie);
        return movie;

    }
    public update(movie: IMovie): IMovie {
        if(!movie.id)
        throw new Error("El id tiene que ser valido");

        let position = this.movies.findIndex(
            currentEvent => currentEvent.id === movie.id
        );
        if (position === -1)
            throw new Error("404 not found");

        if (this.isValid(movie))
            this.movies[position].title = movie.title;

        
        this.movies[position].year = movie.year;
        this.movies[position].director = movie.director;
        this.movies[position].duration = movie.duration;
        this.movies[position].genres = movie.genres;
        this.movies[position].rate = movie.rate;
        return movie;
        }
    public deleteById(id: number): boolean{
        let position = this.movies.findIndex(
            currentMovie => currentMovie.id === id
        );
        if (position === -1)
        throw new Error ("404 not found");


        return this.movies.splice(position, 1).length === 1;
    }
    private isValid(movie: IMovie): boolean{
        // validación 1: title tenga longitud entre 10 y 50
        // if (event.title.length >= 10 && event.title.length <= 50)
        //     return true;
        if (movie.title.length < 10 || movie.title.length > 50)
            return false;

        // validación 2: title no esté ocupado ya
        for (const currentEvent of this.movies)
            if(currentEvent.title === movie.title) // si es true significa que el titulo ya existe
                return false;
        

    
        
        return true; // todo OK
    }

    private generateNextId(): number {
        let maxId = 0;
        for (const event of this.movies) {
            if (event.id > maxId)
                maxId = event.id;
        }
        return ++maxId;
    }
}
