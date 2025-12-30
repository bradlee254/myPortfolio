<script setup lang="ts">
    interface NavLinks {
        label: string;
        href: string;
    }
    const links: NavLinks[] = [
        {label: 'Home', href: '#home'},
        {label: 'About', href: '#about'},
        {label: 'Projects', href: '#projects'},
        {label: 'Contact', href: '#contact'},
        {label: 'Skills', href: '#skills'},
    ];
</script>

<template>
    <header class=" fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-white/10">
        <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

            <a href="#home" class="text-xl font-bold text-emerald-400">Bashir
                <span class="text-white">.</span></a>

                <!-- desktop links -->
                 <ul class="hidden md:flex gap-8 text-sm">

                    <li v-for="link in links" :key="link.href">
                        <a :href="link.href" class="text-zinc-300 hover:text-white transition">
                            {{ link.label }} </a>
                    </li>
                </ul>
        </nav>
    </header>
</template>