import { defineConfig, defineConfigWithTheme } from 'vitepress';
import { Config } from './theme';
import implicitFigures from 'markdown-it-implicit-figures';
import makdownItKatex from 'markdown-it-katex';

const MathJaxSetting = {
    tex: {
        packages: ['base'],
        inlineMath: [['$', '$']],
        displayMath: [
            ['$$', '$$'],
            ['\\[', '\\]'],
        ],
    },
};

export default defineConfigWithTheme<Config>({
    // site-level options
    title: 'HQVUET',
    description: `
    Dreams are for the dreamers.
    Goals are for achievers.`,

    sitemap: {
        hostname: 'https://hoangquocvietuet.github.io',
    },
    srcExclude: ['legacy-jekyll-component/**/*'],

    markdown: {
        config(md) {
            md.use(implicitFigures, {
                dataType: false, // <figure data-type="image">, default: false
                figcaption: 'title', // <figcaption>alternative text</figcaption>, default: false
                keepAlt: true, // <img alt="alt text" .../><figcaption>alt text</figcaption>, default: false
                lazyLoading: false, // <img loading="lazy" ...>, default: false
                link: true, // <a href="img.png"><img src="img.png"></a>, default: false
                tabindex: true,
            });
            md.use(makdownItKatex);
        },
    },

    head: [
        // [
        //     'script',
        //     {
        //         src: 'https://polyfill.io/v3/polyfill.min.js?features=es6',
        //     },
        // ],
        // [
        //     'script',
        //     {
        //         id: 'MathJax-script',
        //         async: 'true',
        //         src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js',
        //     },
        // ],
        // ['script', {}, `MathJax = ${JSON.stringify(MathJaxSetting)}`],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/katex.min.css',
            },
        ],
    ],

    themeConfig: {
        aside: 'left',
        outline: {
            level: [2, 3],
        },
        nav: [{ text: 'About', link: '/about' }],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/hoangquocvietuet' },
            { icon: 'discord', link: 'https://discordapp.com/users/718831435896717413' },
            { icon: 'facebook', link: 'https://www.facebook.com/hqvuet' },
        ],
        redirects: [
        ],
    },
});
