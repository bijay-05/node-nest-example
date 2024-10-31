export interface IAuthToken {
    accessToken: string;
    //refreshToken: string;
}

export interface IAuthLogin extends IAuthToken {
    userId: string;
    sessionId: string;
}