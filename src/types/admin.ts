export interface adminListRequestDto {
    username: string;
    email: string;
    pageInfo: object;
}
export interface adminUpdateRequestDto {
    username: string;
    email: string;
    level: number;
    status: number;
    password: string;
}
