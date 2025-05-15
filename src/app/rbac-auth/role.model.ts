// src/app/models/role.model.ts
export enum RoleType {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    SUPPORT = 'SUPPORT',
    VIEWER = 'VIEWER'
}

export interface User {
    id: number;
    username: string;
    email: string;
    roles: RoleType[];
}