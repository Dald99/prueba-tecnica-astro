export interface User {
    username: string,
    name: string,
    location: string,
    bio: string,
    avatarUrl: string,
    color: string,
    links: Link[],
}

export interface Link {
    name: string,
    url: string,
}