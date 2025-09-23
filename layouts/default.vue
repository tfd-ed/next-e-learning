<template>
    <div class="bg-white dark:bg-neutral-900 min-h-screen transition-colors duration-300">
        <main id="content">
            <FlexHeader />
            <slot />
            <FlexFooter />
        </main>
    </div>
</template>