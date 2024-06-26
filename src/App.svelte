<script>
  import Header from './lib/Header.svelte';
  import Section from './lib/Section.svelte';
  import Article from './lib/Article.svelte';
  import Badge from './lib/Badge.svelte';
  import {
    about,
    books,
    education,
    email,
    experience,
    fullName,
    languages,
    links,
    nav,
    position,
    skills
  } from './lib/data';
</script>

<Header avatar="/avatar.jpg">
    <p slot="name">{fullName}</p>
    <p slot="position">{position}</p>
    <div class="flex justify-center">
        <a class="text-blue-500" href="mailto:{email}" title="email">{email}</a>
    </div>
    <nav class="flex flex-wrap gap-4 md:gap-8 justify-center items-center">
        {#each nav as { href, component, title }}
            <a class="block text-blue-500 w-10 h-10" {href} {title}>
                <svelte:component this={component}/>
            </a>
        {/each}
    </nav>
</Header>

<main class="space-y-2 sm:space-y-24 sm:text-xl md:text-2xl">
    <Section title="Обо мне">
        {#each about as paragraph}
            <p>{paragraph}</p>
        {/each}
    </Section>

    {#if skills.main?.length}
        <Section title="Основной стек">
            <section class="flex flex-wrap gap-8 justify-center">
                {#each skills.main as { title, component }}
                    {#if title}
                        <div class="w-24 h-24 flex" {title}>
                            <svelte:component this={component}/>
                        </div>
                    {/if}
                {/each}
            </section>
        </Section>
    {/if}

    {#if skills.hard || skills.soft || skills.tools || skills.other}
        <Section title="Ключевые навыки">
            {#if skills.hard?.languages.length}
                <Article title="Языки программирования">
                    <section class="flex flex-wrap gap-8 justify-center">
                        {#each skills.hard.languages as { title, component }}
                            {#if title}
                                <div class="w-24 h-24 flex" {title}>
                                    <svelte:component this={component}/>
                                </div>
                            {/if}
                        {/each}
                    </section>
                </Article>
            {/if}

            {#if skills.hard?.technologies.length}
                <Article title="Технологии">
                    <section class="flex flex-wrap gap-8 justify-center">
                        {#each skills.hard.technologies as { title, component }}
                            {#if title}
                                <div class="w-24 h-24 flex" {title}>
                                    <svelte:component this={component}/>
                                </div>
                            {/if}
                        {/each}
                    </section>
                </Article>
            {/if}

            {#if skills.hard?.patterns.length}
                <Article title="Паттерны">
                    <section class="flex flex-wrap gap-8 justify-center">
                        {#each skills.hard.patterns as name}
                            {#if name}
                                <Badge {name}/>
                            {/if}
                        {/each}
                    </section>
                </Article>
            {/if}

            {#if skills.tools?.length}
                <Article title="Инструменты">
                    <section class="flex flex-wrap gap-8 justify-center">
                        {#each skills.tools as { name }}
                            {#if name}
                                <Badge {name}/>
                            {/if}
                        {/each}
                    </section>
                </Article>
            {/if}

            {#if skills.soft?.length}
                <Article title="Гибкие навыки">
                    <section class="flex flex-wrap gap-8 justify-center">
                        {#each skills.soft as name}
                            {#if name}
                                <Badge {name}/>
                            {/if}
                        {/each}
                    </section>
                </Article>
            {/if}

            {#if skills.other?.length}
                <Article title="Другое">
                    <section class="flex flex-wrap gap-8 justify-center">
                        {#each skills.other as { name }}
                            {#if name}
                                <Badge {name}/>
                            {/if}
                        {/each}
                    </section>
                </Article>
            {/if}
        </Section>
    {/if}

    {#if experience?.length}
        <Section title="Опыт работы">
            {#each experience as { company, position, begin, end, description, skills }}
                {#if company}
                    <Article title={company}>
                        {#if position}
                            <p><strong>{position}</strong></p>
                        {/if}
                        {#if description}
                            <p class="space-y-1">
                                {#each description.split('\n') as row}
                                    <p>{row}</p>
                                {/each}
                            </p>
                        {/if}
                        {#if begin}
                            <p class="text-sm italic">{begin} — {end ?? 'по настоящее время'}</p>
                        {/if}
                        {#if skills}
                            <section class="flex flex-wrap gap-8 justify-center">
                                {#each skills as { title, component }}
                                    {#if title}
                                        <div class="w-24 h-24 flex" {title}>
                                            <svelte:component this={component}/>
                                        </div>
                                    {/if}
                                {/each}
                            </section>
                        {/if}
                    </Article>
                {/if}
            {/each}
        </Section>
    {/if}

    {#if education.main?.length}
        <Section title="Образование">
            {#each education.main as { institution, faculty, specialty, graduation }}
                {#if institution && faculty && specialty}
                    <Article title={institution}>
                        <p>{faculty}, <strong>{specialty}</strong></p>
                        {#if graduation}
                            <time class="block text-sm italic">{graduation}</time>
                        {/if}
                    </Article>
                {/if}
            {/each}
        </Section>
    {/if}

    {#if education.additional?.length}
        <Section title="Повышение квалификации">
            {#each education.additional as { organization, name, graduation }}
                {#if organization && name}
                    <Article title={organization}>
                        <p>{name}</p>
                        {#if graduation}
                            <time class="block text-sm italic">{graduation}</time>
                        {/if}
                    </Article>
                {/if}
            {/each}
        </Section>
    {/if}

    {#if languages?.length}
        <Section title="Знание языков">
            {#each languages as { title, level: name }}
                {#if title}
                    <Article {title}>
                        <Badge {name}></Badge>
                    </Article>
                {/if}
            {/each}
        </Section>
    {/if}

    {#if books?.length}
        <Section title="Прочитано">
            {#each books as { name, author }}
                {#if name && author}
                    <Article title={name}>
                        <address class="text-sm">{author}</address>
                    </Article>
                {/if}
            {/each}
        </Section>
    {/if}

    <Section title="Доп. ссылки">
        <nav class="flex flex-wrap gap-4 items-center">
            {#each links as { href, component }}
                <a class="block" {href}>
                    <svelte:component this={component}/>
                </a>
            {/each}
        </nav>
    </Section>
</main>