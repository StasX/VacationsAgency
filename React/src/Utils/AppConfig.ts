class AppConfig {
    private protocol: string = window.location.protocol;
    private host: string = window.location.hostname;
    private port: number|string = 8000;//window.location.port;
    public readonly loginUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/auth/login`;
    public readonly logoutUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/auth/logout`
}

export const appConfig = new AppConfig();
