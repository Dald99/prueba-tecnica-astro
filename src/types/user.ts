export interface User {
    username: string,
    name: string,
    bio: string,
    avatarUrl: string,
    color: string,
    links: Link[],
}

export interface Link {
    name: string,
    url: string,
}