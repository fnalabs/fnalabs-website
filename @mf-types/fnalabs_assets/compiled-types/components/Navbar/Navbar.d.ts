import type { ButtonStyle, Color, FixedPosition, ILink } from '../../types';
import { FC } from 'react';
export interface INavLink extends ILink {
    children?: INavLink[];
    button?: boolean;
    color?: Color;
    divider?: boolean;
    style?: ButtonStyle;
}
export declare const renderLink: (link: INavLink) => import("react/jsx-runtime").JSX.Element;
export declare const mapLinks: (link: INavLink) => import("react/jsx-runtime").JSX.Element;
export interface INavbar {
    brandLink?: ILink;
    startLinks?: INavLink[];
    endLinks?: INavLink[];
    color?: Color;
    fixed?: FixedPosition;
    spaced?: boolean;
    shaded?: boolean;
}
declare const Navbar: FC<INavbar>;
export default Navbar;
