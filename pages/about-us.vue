<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t("about_us") }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t("founder_intro") }}
        </p>
      </div>

      <!-- Founder Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="flex-shrink-0">
            <img
              src="https://tfdevs.com/founder.jpeg"
              alt="ចៅ ដារ៉ា - Founder"
              class="w-48 h-48 object-cover rounded-full shadow-lg"
            />
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ចៅ ដារ៉ា (Chau Dara)
            </h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <p>{{ $t("founder_description") }}</p>
              <p class="font-medium text-gray-800 dark:text-gray-200">
                {{ $t("founder_real_name") }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Why This Website Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {{ $t("why_website_title") }}
        </h2>
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <div class="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>{{ $t("why_website_para1") }}</p>
            <p>{{ $t("why_website_para2") }}</p>
            
            <blockquote class="border-l-4 border-blue-500 pl-6 italic text-lg font-medium text-gray-800 dark:text-gray-200 bg-blue-50 dark:bg-blue-900/20 py-4 rounded-r-lg">
              {{ $t("tfd_founding_story") }}
            </blockquote>
            
            <p>{{ $t("why_website_para3") }}</p>
            <p>{{ $t("why_website_para4") }}</p>
            <p>{{ $t("website_hope") }}</p>
          </div>
        </div>
      </div>

      <!-- Education Background Section -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Education -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {{ $t("education_history") }}
          </h3>
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t("birth_info") }}</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ $t("birth_place") }}</div>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t("high_school_date") }}</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ $t("high_school") }}</div>
            </div>
            <div class="border-l-4 border-purple-500 pl-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t("bachelor_date") }}</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ $t("bachelor_degree") }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ $t("bachelor_thesis") }}</div>
            </div>
            <div class="border-l-4 border-red-500 pl-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t("master_date") }}</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ $t("master_degree") }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ $t("master_thesis") }}</div>
            </div>
          </div>
        </div>

        <!-- Work Experience -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {{ $t("work_history") }}
          </h3>
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t("teacher_date") }}</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ $t("teacher_position") }}</div>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t("hennge_date") }}</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ $t("hennge_position") }}</div>
            </div>
            <div class="border-l-4 border-purple-500 pl-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t("cdc_date") }}</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ $t("cdc_position") }}</div>
            </div>
            <div class="border-l-4 border-yellow-500 pl-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t("inklusivity_date") }}</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ $t("inklusivity_position") }}</div>
            </div>
            <div class="border-l-4 border-gray-500 pl-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t("freelance_date") }}</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ $t("freelance_position") }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Research Publications Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t("research_publications") }}
        </h3>
        <div class="space-y-6">
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t("research_1_title") }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ $t("research_1_venue") }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t("research_1_authors") }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">{{ $t("research_1_date") }}</p>
          </div>
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t("research_2_title") }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ $t("research_2_venue") }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t("research_2_authors") }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">{{ $t("research_2_date") }}</p>
          </div>
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t("research_3_title") }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ $t("research_3_venue") }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t("research_3_authors") }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">{{ $t("research_3_date") }}</p>
          </div>
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t("research_4_title") }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ $t("research_4_venue") }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t("research_4_authors") }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">{{ $t("research_4_date") }}</p>
          </div>
        </div>
      </div>

      <!-- Social Networks Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {{ $t("join_our_social_networks") }}
        </h3>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.facebook.com/ChauDaraScienceEngineer/"
            target="_blank"
            class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Icon name="mdi:facebook" class="w-5 h-5" />
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/qiang-cun-zhi/"
            target="_blank"
            class="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Icon name="mdi:linkedin" class="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/darachaukh/"
            target="_blank"
            class="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Icon name="mdi:instagram" class="w-5 h-5" />
            Instagram
          </a>
          <a
            href="https://t.me/tfdTech"
            target="_blank"
            class="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Icon name="mdi:telegram" class="w-5 h-5" />
            Telegram
          </a>
          <a
            href="https://www.youtube.com/c/TeachingForDevelopment"
            target="_blank"
            class="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Icon name="mdi:youtube" class="w-5 h-5" />
            YouTube
          </a>
          <a
            href="https://github.com/tfd-ed"
            target="_blank"
            class="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Icon name="mdi:github" class="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Set page title and meta
useSeoMeta({
  title: 'About Us - TF Devs',
  description: 'Learn about TF Devs founder Chau Dara and our mission to spread technology education for all.',
  ogTitle: 'About Us - TF Devs',
  ogDescription: 'Learn about TF Devs founder Chau Dara and our mission to spread technology education for all.',
})

// Set page head
useHead({
  title: 'About Us - TF Devs'
})
</script>