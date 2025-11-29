
    export type RemoteKeys = 'hive_website/Routes';
    type PackageType<T> = T extends 'hive_website/Routes' ? typeof import('hive_website/Routes') :any;