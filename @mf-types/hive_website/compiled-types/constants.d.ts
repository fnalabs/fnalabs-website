import type { IBrandLink, INavLink } from '../@mf-types/fnalabs_assets/Navbar';
export declare const VERSION_LABEL = "v2.1.3";
export declare const BRAND_LINK: IBrandLink;
export declare const SUB_BRAND_LINK: IBrandLink;
export declare const HOME_LINK: INavLink;
export declare const OVERVIEW_LINK: INavLink;
export declare const MODEL_LINK: INavLink;
export declare const DOMAIN_LINK: INavLink;
export declare const INFRA_LINK: INavLink;
export declare const TELEMETRY_LINK: INavLink;
export declare const START_LINK: INavLink;
export declare const SETUP_LINK: INavLink;
export declare const BASIC_LINK: INavLink;
export declare const REST_LINK: INavLink;
export declare const CQRS_LINK: INavLink;
export declare const DOCS_LINK: INavLink;
export declare const ENV_LINK: INavLink;
export declare const API_LINK: INavLink;
export declare const BACK_LINK: INavLink;
export declare const BRAND_LINK_LIST: IBrandLink[];
export declare const NAV_LINK_LIST: INavLink[];
export declare const DIRECTED_LINK_MAP: {
    [HOME_LINK.href]: {
        next: INavLink;
    };
    [OVERVIEW_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [MODEL_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [DOMAIN_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [INFRA_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [TELEMETRY_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [START_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [SETUP_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [BASIC_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [REST_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [CQRS_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [DOCS_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
    [ENV_LINK.href]: {
        prev: INavLink;
        up: INavLink;
        next: INavLink;
    };
};
