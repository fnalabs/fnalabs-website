
    export type RemoteKeys = 'module_federation/Routes';
    type PackageType<T> = T extends 'module_federation/Routes' ? typeof import('module_federation/Routes') :any;