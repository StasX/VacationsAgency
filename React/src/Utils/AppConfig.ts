class AppConfig {
    private protocol: string = window.location.protocol;
    private host: string = window.location.hostname;
    private port: number|string = 8000;//window.location.port;
    public readonly loginUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/auth/login`;
    public readonly logoutUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/auth/logout`;
    public readonly refreshUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/auth/refresh-token`;
    public readonly usersCountUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/users/total`;
    public readonly vacationsStatisticsUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/vacations/statistics`;
    public readonly likesCountUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/likes/total`;
    public readonly likesStatisticsUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/likes/statistics`;
}

export const appConfig = new AppConfig();
