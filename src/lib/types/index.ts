
export type { default as PaginationResults } from './paginationResults';



export interface Message extends IdentifiableOwnedUpdatableSchema  {
    title: string;
    body: string;
    from: string;
    provider: string;
    tags: string[];
    urls: string[];
}

export interface Note extends IdentifiableOwnedUpdatableSchema  {
    format: string;
    title: string;
    body: string;
    provider: string;
    provider_id: string;
    tags: string[];
    urls: string[];
}


export interface Link extends IdentifiableOwnedUpdatableSchema  {
 
    title: string;
    description: string;
    url: string;
    tags: string[];
}

export interface Intent extends IdentifiableOwnedSchema  {
    name: string;
    description: string;
    tags: string[];
    icon_class: string;
    parent: Intent;

}


export interface User extends IdentifiableSchema {
    username: string;
    email: string;
    name: string;
    last_name: string;
}





export interface Schema  {
    id: null | string;
}
export interface TimeStampable  {
    updated_at: null | string;
    inserted_at: null | string;
}

export interface UpdatableSchema {
    updated_by_id: null | string;
    updated_by: null | User;
}

export interface OwnedSchema {
    created_by_id: null | string;
    created_by: null | User;
}

export interface IdentifiableSchema extends Schema, TimeStampable {}
export interface IdentifiableOwnedSchema extends IdentifiableSchema, OwnedSchema {}

export interface IdentifiableOwnedUpdatableSchema extends IdentifiableSchema, OwnedSchema, UpdatableSchema  {}







