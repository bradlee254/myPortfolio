<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import emailjs from "@emailjs/browser";

const isVisible = ref(false);
const sectionRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;
const isSubmitting = ref(false);

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const contactInfo = [
  { icon: "✉", label: "Email", value: "leebrad341@gmail.com", link: "mailto:leebrad341@gmail.com" },
  { icon: "◉", label: "Location", value: "Available for remote work", link: null },
  { icon: "◈", label: "GitHub", value: "View Profile", link: "https://github.com/bradlee254" },
];

// 🔹 EmailJS submit
const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    await emailjs.send(
      "service_w1xn9ar",
      "template_m7ti8pg",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "ZhNPdVIAFBzYHXV4Q"
    );

    alert("Message sent successfully!");
    form.name = "";
    form.email = "";
    form.message = "";
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        isVisible.value = true;
        observer?.disconnect();
      }
    },
    { threshold: 0.25 }
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>



<template>
  <section
    ref="sectionRef"
    id="contact"
    class="relative overflow-hidden
           px-6 md:px-12 lg:px-24
           py-28 md:py-0"
  >
    <!-- Background Accent -->
    <div class="absolute top-1/2 right-0 w-96 h-96 rounded-full border border-zinc-800/50 -translate-y-1/2 translate-x-1/2" />

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-zinc-900 border border-zinc-800 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <span class="w-2 h-2 bg-emerald-400 rounded-full" />
          <span class="text-sm text-zinc-500 uppercase tracking-wider">Get In Touch</span>
        </div>

        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 transition-all duration-700 delay-100"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Let's work together
        </h2>

        <p
          class="text-xl text-zinc-400 max-w-2xl mt-2 transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I usually respond within 24 hours.
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-12">
        <!-- Contact Info Cards -->
        <div class="lg:col-span-2 space-y-6">
          <div
            v-for="(info, index) in contactInfo"
            :key="info.label"
            class="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-emerald-400/30"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${300 + index * 120}ms` }"
          >
            <div class="flex items-start gap-4">
              <!-- Icon -->
              <div class="flex-shrink-0 w-12 h-12 bg-emerald-400/10 rounded-xl flex items-center justify-center text-2xl text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                {{ info.icon }}
              </div>

              <!-- Content -->
              <div class="flex-1 min-w-0">
                <div class="text-sm text-zinc-500 mb-1">{{ info.label }}</div>
                <a
                  v-if="info.link"
                  :href="info.link"
                  target="_blank"
                  class="text-white font-medium hover:text-emerald-400 transition-colors duration-300 break-all"
                >
                  {{ info.value }}
                </a>
                <div v-else class="text-white font-medium">{{ info.value }}</div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div
            class="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-700 delay-600"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            <div class="text-sm text-zinc-500 mb-4">Connect With Me</div>
            <div class="flex gap-3">
              <a href="#" class="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-emerald-400 hover:text-zinc-900 transition-all duration-300 hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-emerald-400 hover:text-zinc-900 transition-all duration-300 hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
                <a href="#" class="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-emerald-400 hover:text-zinc-900 transition-all duration-300 hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          class="lg:col-span-3 transition-all duration-700 delay-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <form @submit.prevent="handleSubmit" class="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6">
            <div>
              <label class="block text-sm font-medium text-zinc-400 mb-2">Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
                class="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-zinc-400 mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="your.email@example.com"
                class="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-zinc-400 mb-2">Message</label>
              <textarea
                v-model="form.message"
                rows="6"
                required
                placeholder="Tell me about your project..."
                class="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none resize-none transition-all duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="group relative w-full px-8 py-4 bg-emerald-400 text-zinc-900 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting" class="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span v-else class="relative z-10 flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
              <div class="absolute inset-0 bg-emerald-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
