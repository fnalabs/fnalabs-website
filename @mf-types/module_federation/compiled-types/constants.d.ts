import type { IBrandLink, INavLink } from '../@mf-types/fnalabs_assets/Navbar';
export declare const BRAND_LINK: IBrandLink;
export declare const SUB_BRAND_LINK: IBrandLink;
export declare const BACK_LINK: INavLink;
export declare const HOME_LINK: INavLink;
export declare const BRAND_LINK_LIST: IBrandLink[];
export declare const NAV_LINK_LIST: INavLink[];
export declare const DIRECTED_LINK_MAP: {
    [HOME_LINK.href]: {
        up: INavLink;
    };
};
