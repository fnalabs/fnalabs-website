export declare const HOST: string;
export declare const ROUTE: string;
export declare const NODE_ENV: string;
export declare const IS_DEV: boolean;
export declare const SW_ROUTE: string;
export declare const ASSETS = "fnalabs_assets";
export declare const FEDERATION_HOSTS: {
    fnalabs_assets: string;
};
export interface IConfig {
    name: string;
    remotes: {
        [key: string]: {
            name: string;
            entry: string;
        };
    };
}
declare const CONFIG: {
    name: string;
    remotes: {
        fnalabs_assets: {
            name: string;
            entry: string;
        };
    };
};
export default CONFIG;
