import type { ILink } from '../../types';
import { FC } from 'react';
export interface IFooter {
    projectLinks: ILink[];
    policyLinks: ILink[];
}
declare const Footer: FC<IFooter>;
export default Footer;
