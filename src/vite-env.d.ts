/// <reference types="vite/client" />

declare const __MOCK_IP__: string;

interface ImportMetaEnv {
    readonly VITE_MOCK_IP: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}