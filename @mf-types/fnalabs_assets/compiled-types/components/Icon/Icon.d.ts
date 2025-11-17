import type { GenericSize } from '../../types';
import { FC } from 'react';
export interface IIcon {
    name: string;
    style: string;
    size?: Exclude<GenericSize, 'fullheight'>;
    children?: string;
}
declare const Icon: FC<IIcon>;
export default Icon;
