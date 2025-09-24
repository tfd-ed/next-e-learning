<template>
    <div class="bg-white dark:bg-neutral-900 min-h-screen transition-colors duration-300">
        <FlexHeader />
        <main id="content">
            <slot />
        </main>
        <FlexFooter />
    </div>
</template>