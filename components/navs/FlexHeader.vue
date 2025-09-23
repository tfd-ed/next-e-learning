<template>
    <header class="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav class="relative max-w-[66rem] w-full bg-white/90 backdrop-blur-md dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 rounded-[8px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto shadow-lg transition-colors duration-300"
            aria-label="Global">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <NuxtLink class="flex-none  text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                    to="/">
                    <img class="h-10 rounded-sm" src="~/assets/img/tfd_logo.jpeg" alt="TFD Logo" />
                </NuxtLink>
                <!-- End Logo -->

                <div class="md:hidden">
                    <button type="button"
                        class="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300"
                        data-hs-collapse="#navbar-collapse" aria-controls="navbar-collapse"
                        aria-label="Toggle navigation">
                        <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                        <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Collapse -->
            <div id="navbar-collapse"
                class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                <div
                    class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                    <NuxtLink
                        class="text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 md:py-4 focus:outline-none transition-colors duration-300"
                        to="/" aria-current="page">Home</NuxtLink>
                    <NuxtLink
                        class="text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 md:py-4 focus:outline-none transition-colors duration-300"
                        to="/courses">Courses</NuxtLink>
                    <a class="text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 md:py-4 focus:outline-none transition-colors duration-300"
                        href="#">Reviews</a>
                    <a class="text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 md:py-4 focus:outline-none transition-colors duration-300"
                        href="#">Approach</a>

                    <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:py-4">
                        <button type="button"
                            class="flex items-center w-full text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300">
                            About
                            <svg class="flex-shrink-0 ms-1 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        <div
                            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white dark:bg-neutral-800 md:shadow-md rounded-lg p-2 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5 border border-gray-200 dark:border-gray-700">
                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-neutral-300 font-medium focus:outline-none focus:text-gray-600 dark:focus:text-neutral-300"
                                href="#">
                                About
                            </a>
                            <div
                                class="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                                <button type="button"
                                    class="w-full flex justify-between items-center py-2 px-3 text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-neutral-300 font-medium focus:outline-none focus:text-gray-600 dark:focus:text-neutral-300">
                                    Sub Menu
                                    <svg class="sm:-rotate-90 flex-shrink-0 ms-2 size-4"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div
                                    class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white dark:bg-neutral-800 md:shadow-md rounded-lg p-2 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px] border border-gray-200 dark:border-gray-700">
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-neutral-300 font-medium focus:outline-none focus:text-gray-600 dark:focus:text-neutral-300"
                                        href="#">
                                        About
                                    </a>
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-neutral-300 font-medium focus:outline-none focus:text-gray-600 dark:focus:text-neutral-300"
                                        href="#">
                                        Downloads
                                    </a>
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-neutral-300 font-medium focus:outline-none focus:text-gray-600 dark:focus:text-neutral-300"
                                        href="#">
                                        Team Account
                                    </a>
                                </div>
                            </div>

                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-neutral-300 font-medium focus:outline-none focus:text-gray-600 dark:focus:text-neutral-300"
                                href="#">
                                Downloads
                            </a>
                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-neutral-300 font-medium focus:outline-none focus:text-gray-600 dark:focus:text-neutral-300"
                                href="#">
                                Team Account
                            </a>
                        </div>
                    </div>

                    <div class="flex items-center gap-x-3">
                        <!-- <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-tfd font-medium text-sm text-white rounded-full focus:outline-none"
                            href="../../templates/agency/index.html#contact">
                            Sign In
                        </a> -->
                        <ShadowButton text="login" color="bg-tfd" />
                        <!-- Dark Mode Toggle -->
                        <DarkModeToggle />
                        <div class="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                            <button @click="setLocale('en')" :class="[
                                'flex items-center space-x-1 px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors',
                                locale === 'en'
                                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600'
                            ]">
                                <NuxtImg src="/images/flags/uk.png" alt="English" width="20" height="14"
                                    :provider="config.app.buildId === 'dev' ? 'ipx' : 'cloudflare'" />
                                <span class="hidden sm:inline">{{ $t('english') }}</span>
                            </button>
                            <button @click="setLocale('km')" :class="[
                                'flex items-center space-x-1 px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors',
                                locale === 'km'
                                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600'
                            ]">
                                <NuxtImg src="/images/flags/kh.png" alt="Khmer" width="20" height="14"
                                    :provider="config.app.buildId === 'dev' ? 'ipx' : 'cloudflare'" />
                                <span class="hidden sm:inline">{{ $t('khmer') }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Collapse -->
        </nav>
    </header>
</template>
<script setup lang="ts">
const { locale, setLocale } = useI18n()
const config = useRuntimeConfig()

const changeLanguage = () => {
    if (locale.value == 'en') {
        setLocale('km')
    } else {
        setLocale('en')
    }
}

const navList = readonly(
    [
        { name: "home", path: '/' },
        { name: "courses", path: '/courses' }
    ]
)

</script>