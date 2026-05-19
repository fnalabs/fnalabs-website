import { IBrandLink } from '@mf-types/fnalabs_assets/Navbar';
export declare const VERSION_LABEL = "v2.1.3";
export declare const BRAND_LINK: IBrandLink;
export declare const HOME_LINK: {
    href: string;
    label: string;
};
export declare const OVERVIEW_LINK: {
    href: string;
    label: string;
};
export declare const MODEL_LINK: {
    href: string;
    label: string;
};
export declare const DOMAIN_LINK: {
    href: string;
    label: string;
};
export declare const INFRA_LINK: {
    href: string;
    label: string;
};
export declare const TELEMETRY_LINK: {
    href: string;
    label: string;
};
export declare const START_LINK: {
    href: string;
    label: string;
};
export declare const SETUP_LINK: {
    href: string;
    label: string;
};
export declare const BASIC_LINK: {
    href: string;
    label: string;
};
export declare const REST_LINK: {
    href: string;
    label: string;
};
export declare const CQRS_LINK: {
    href: string;
    label: string;
};
export declare const DOCS_LINK: {
    href: string;
    label: string;
};
export declare const ENV_LINK: {
    href: string;
    label: string;
};
export declare const API_LINK: {
    href: string;
    label: string;
};
export declare const BACK_LINK: {
    href: string;
    label: string;
    button: boolean;
};
export declare const NAV_LINK_LIST: ({
    href: string;
    label: string;
    button: boolean;
} | {
    list: ({
        href: string;
        label: string;
    } | {
        divider: boolean;
        href: string;
        label: string;
    })[];
    href: string;
    label: string;
})[];
export declare const DIRECTED_LINK_MAP: {
    [HOME_LINK.href]: {
        next: {
            href: string;
            label: string;
        };
    };
    [OVERVIEW_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [MODEL_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        up: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [DOMAIN_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        up: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [INFRA_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        up: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [TELEMETRY_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        up: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [START_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [SETUP_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        up: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [BASIC_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        up: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [REST_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        up: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [CQRS_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        up: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [DOCS_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
    [ENV_LINK.href]: {
        prev: {
            href: string;
            label: string;
        };
        up: {
            href: string;
            label: string;
        };
        next: {
            href: string;
            label: string;
        };
    };
};
