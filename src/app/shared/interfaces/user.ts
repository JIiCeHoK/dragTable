export interface IUser {
    name: string;
    surname: string;
    email: string;
    phone: string;
}

export interface ITableData {
    users: IUser[]
}