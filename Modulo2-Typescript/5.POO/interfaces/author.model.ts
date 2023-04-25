interface IAuthor{
    idAuthor: number,
    firstNAme: string,
    dateFrom: Date,
    dateTo: Date | undefined,
    city: string,
    bio: string
}
let author1 : IAuthor ={
    idAuthor: 1,
    firstNAme: "Neruda",
    dateFrom: new Date(2000, 1, 1),
    dateTo: undefined,
    city: "Madrid",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
let author2 : IAuthor ={
    idAuthor: 2,
    firstNAme: "Eckhart",
    dateFrom: new Date(2000, 1, 1),
    dateTo: new Date(2019, 1, 1),
    city: "Barcelona",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
