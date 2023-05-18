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
        throw new Error("El id tiene que ser valido")
    }
}