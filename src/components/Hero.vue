
<template>
    <section id="home" class="min-h-screen flex items-center justify-center pt-16">
        <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <p class="text-emerald-400 font-medium mb-3">
                    Hi, I'm
                </p> 
                <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    Bradlee Bashir <br /> <span class="text-emerald-400">Software Developer</span>
                </h1>
                <p class="text-zinc-400 max-w-lg mb-8">
                    I build modern, scalable web applications using React, Vue,
                    Svelte ,TypeScript, Node and modern JavaScript frameworks.
                </p>
                <div class="flex gap-4">
                    <a href="#projects" class="px-6 py-3 rounded-lg bg-emerald-500 text black font-medium hover:bg-emerald-400 transition">
                        View Projects
                    </a>

                    <a href="#contact" 
                    class="px-6 py-3 rounded-lg border border-white/20 hover:border-white transition">
                        Contact Me
                    </a>
                </div>
            </div>

            <!-- my photos -->
             <div class="hidden md:flex justify-center">
                <div class="w-72 h-72 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 flex items-center justify-center">
                    <span class="text-zinc-300">picture</span>
                </div>
             </div>
        </div>
    </section>
</template>