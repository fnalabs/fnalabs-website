import type { FC, ReactNode } from 'react';
import type { FixedSize, RatioSize } from '../../types';
export interface IImage {
    children: ReactNode;
    fixedSize?: FixedSize;
    ratioSize?: RatioSize;
    centered?: boolean;
    hcentered?: boolean;
}
declare const Image: FC<IImage>;
export default Image;
