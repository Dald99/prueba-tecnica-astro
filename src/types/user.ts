// src/types/user.ts
export interface User {
    username: string,
    name: string,
    bio: string,
    avatarUrl: string, // Update to match JSON data
    links: Link[],
}

export interface Link {
    name: string,
    url: string,
}