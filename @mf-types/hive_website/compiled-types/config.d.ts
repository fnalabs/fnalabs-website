export declare const ASSETS = "fnalabs_assets";
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
