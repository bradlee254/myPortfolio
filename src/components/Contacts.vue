<template>
  <section
    id="contact"
    class="py-24 border-t border-white/10"
  >
    <div class="max-w-6xl mx-auto px-6">
      <!-- Heading -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Contact
        </h2>
        <p class="text-zinc-400 max-w-xl">
          Have a project in mind or want to work together?
          Feel free to reach out.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Info -->
        <div>
          <p class="text-zinc-400 mb-6">
            You can contact me directly via email or by filling out the form.
            I usually respond within 24 hours.
          </p>

          <ul class="space-y-4 text-sm">
            <li class="flex items-center gap-3">
              <span class="text-emerald-400">📧</span>
              <span class="text-zinc-300">bashir@email.com</span>
            </li>

            <li class="flex items-center gap-3">
              <span class="text-emerald-400">🌍</span>
              <span class="text-zinc-300">Available for remote work</span>
            </li>

            <li class="flex items-center gap-3">
              <span class="text-emerald-400">💼</span>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                class="hover:underline text-zinc-300"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>

        <!-- Form -->
        <form
          @submit.prevent="handleSubmit"
          class="space-y-6"
        >
          <div>
            <label class="block text-sm mb-2">Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 focus:border-emerald-500 outline-none"
            />
          </div>

          <div>
            <label class="block text-sm mb-2">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 focus:border-emerald-500 outline-none"
            />
          </div>

          <div>
            <label class="block text-sm mb-2">Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              class="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/10 focus:border-emerald-500 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="px-6 py-3 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form);
  alert("Message sent! (connect EmailJS or Formspree next)");
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>
