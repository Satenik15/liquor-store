export interface SignUpRequestModel {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    isLoggedIn?: boolean;
}

export interface LogInRequestModel {
    id?: number;
    email?: string;
    password?: string;
    isLoggedIn?: boolean;
}