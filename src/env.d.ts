interface ImportMetaEnv {
    readonly PUBLIC_GTM_ID: string;
    readonly PUBLIC_POSTHOG_KEY: string;
    readonly PUBLIC_POSTHOG_HOST: string;
    readonly PUBLIC_POSTHOG_DEFAULTS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
