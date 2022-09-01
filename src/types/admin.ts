export interface adminListRequestDto {
    username: string;
    email: string;
    pageInfo: object;
}
export interface adminUpdateRequestDto {
    username: string;
    email: string;
    role: number;
    status: number;
    password: string;
}
