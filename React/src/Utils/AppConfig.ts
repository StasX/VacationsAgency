class AppConfig {
    private protocol: string = window.location.protocol;
    private host: string = window.location.hostname;
    private port: string = window.location.port;
    public readonly loginUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/api/login/`;
    public readonly logoutUrl = `${this.protocol}//${this.host}${(!this.port) ? "" : (":" + this.port)}/logout/`
}

export const appConfig = new AppConfig();
