
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppBeforeAfter': typeof import("../components/AppBeforeAfter.vue")['default']
    'AppContact': typeof import("../components/AppContact.vue")['default']
    'AppFooter': typeof import("../components/AppFooter.vue")['default']
    'AppGallery': typeof import("../components/AppGallery.vue")['default']
    'AppHeader': typeof import("../components/AppHeader.vue")['default']
    'AppHero': typeof import("../components/AppHero.vue")['default']
    'AppLightbox': typeof import("../components/AppLightbox.vue")['default']
    'AppProcess': typeof import("../components/AppProcess.vue")['default']
    'AppServices': typeof import("../components/AppServices.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'NuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
    'NoScript': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAppBeforeAfter': LazyComponent<typeof import("../components/AppBeforeAfter.vue")['default']>
    'LazyAppContact': LazyComponent<typeof import("../components/AppContact.vue")['default']>
    'LazyAppFooter': LazyComponent<typeof import("../components/AppFooter.vue")['default']>
    'LazyAppGallery': LazyComponent<typeof import("../components/AppGallery.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../components/AppHeader.vue")['default']>
    'LazyAppHero': LazyComponent<typeof import("../components/AppHero.vue")['default']>
    'LazyAppLightbox': LazyComponent<typeof import("../components/AppLightbox.vue")['default']>
    'LazyAppProcess': LazyComponent<typeof import("../components/AppProcess.vue")['default']>
    'LazyAppServices': LazyComponent<typeof import("../components/AppServices.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppBeforeAfter: typeof import("../components/AppBeforeAfter.vue")['default']
export const AppContact: typeof import("../components/AppContact.vue")['default']
export const AppFooter: typeof import("../components/AppFooter.vue")['default']
export const AppGallery: typeof import("../components/AppGallery.vue")['default']
export const AppHeader: typeof import("../components/AppHeader.vue")['default']
export const AppHero: typeof import("../components/AppHero.vue")['default']
export const AppLightbox: typeof import("../components/AppLightbox.vue")['default']
export const AppProcess: typeof import("../components/AppProcess.vue")['default']
export const AppServices: typeof import("../components/AppServices.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAppBeforeAfter: LazyComponent<typeof import("../components/AppBeforeAfter.vue")['default']>
export const LazyAppContact: LazyComponent<typeof import("../components/AppContact.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../components/AppFooter.vue")['default']>
export const LazyAppGallery: LazyComponent<typeof import("../components/AppGallery.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/AppHeader.vue")['default']>
export const LazyAppHero: LazyComponent<typeof import("../components/AppHero.vue")['default']>
export const LazyAppLightbox: LazyComponent<typeof import("../components/AppLightbox.vue")['default']>
export const LazyAppProcess: LazyComponent<typeof import("../components/AppProcess.vue")['default']>
export const LazyAppServices: LazyComponent<typeof import("../components/AppServices.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.6_@parcel+watcher@2.5.1_@types+node@24.0.12_@vue+compiler-sfc@3.5.17_db0@0.3._aad04dba23bb5a9f086d9023c3fae3c8/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
