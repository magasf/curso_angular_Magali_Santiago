export class EventService {
  url: string = "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<any> {
   return this.httpClient.get(this.url);

  } 
  findById(id: number): Observable<any>{
    return this.httpClient.get(`${this.url}/${id}`);
    
  }
  findAllByCompletedTrue(){}