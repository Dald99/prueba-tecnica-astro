// Interfaz que define la estructura de un usuario
export interface User {
    username: string,
    name: string,
    location: string,
    bio: string,
    avatarUrl: string,
    color: string,
    links: Link[],
}

// Interfaz que define la estructura de un enlace
export interface Link {
    name: string,
    url: string,
}