export type SlideType =
  | 'title'
  | 'goals'
  | 'concept'
  | 'code'
  | 'activity'
  | 'summary'
  | 'tip'
  | 'mistake';

export interface Slide {
  id: number;
  day: number;
  slideInDay: number;
  title: string;
  type: SlideType;
  subtitle?: string;
  bullets?: string[];
  code?: string;
  codeLanguage?: string;
  callout?: { kind: 'tip' | 'mistake'; text: string };
  activity?: { prompt: string; steps: string[] };
  preview?: string;
  analogy?: string;
  badge?: string;
  speakerNotes?: string;
}

export const ALL_SLIDES: Slide[] = [
  // ─── INTRO: HTML Basics and Structure (Beginner Session) ─────────────────
  {
    id: 101, day: 0, slideInDay: 1,
    type: 'title',
    title: 'HTML Basics and Structure',
    subtitle: 'Introduction to Web Development',
    badge: '🌱 Beginner Friendly',
    bullets: ['No coding experience needed', 'Simple and easy to follow', '20–25 minute session'],
    speakerNotes: `Welcome everyone! 😊 I'm so glad you're here today.
Don't worry if you have never coded before — this session is made just for you.
Think of learning HTML like learning to write with special building blocks. By the end of today, you will know what HTML is and how to make your very first webpage.
Let's get started!`,
  },
  {
    id: 102, day: 0, slideInDay: 2,
    type: 'goals',
    title: 'What We Will Learn Today',
    bullets: [
      'What is HTML and what does it stand for',
      'Understand the basic structure of an HTML page',
      'Learn the most common HTML tags',
      'Create a simple webpage — yes, a real one! 🎉',
    ],
    speakerNotes: `Let's go through what we are going to cover today.
By the end of this session, you will be able to answer "What is HTML?" at a dinner party 😄.
You will also understand the building blocks of any webpage you visit.
And best of all — we will actually build something together!
These four goals are simple, fun, and achievable in 20 minutes. Let's dive in.`,
  },
  {
    id: 103, day: 0, slideInDay: 3,
    type: 'concept',
    title: 'What is HTML?',
    analogy: '🏗️ Think of a webpage like a house. HTML is the bricks and walls — the basic structure. Without it, there is nothing to look at!',
    bullets: [
      '**HTML** stands for **HyperText Markup Language**',
      'It is used to **create web pages**',
      'It tells the browser **what to display** — headings, text, images, and more',
      'Every website you visit is built with HTML',
    ],
    speakerNotes: `HTML stands for HyperText Markup Language. Let's break that down.
"HyperText" just means text with links — like when you click a word and go to another page.
"Markup Language" means we use special labels (called tags) to describe what things are.
Real-life example: Imagine writing a letter. You might underline the heading, circle important words. HTML does the same thing — but for web pages.
And yes — every website you've ever visited uses HTML. Instagram, YouTube, Google — they all start with HTML!`,
  },
  {
    id: 104, day: 0, slideInDay: 4,
    type: 'code',
    title: 'Basic Structure of HTML',
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to my webpage!</p>
  </body>
</html>`,
    codeLanguage: 'html',
    bullets: [
      '`<!DOCTYPE html>` — tells the browser this is an HTML page',
      '`<html>` — the starting point of everything',
      '`<head>` — hidden information (like the page title)',
      '`<body>` — everything the user can **see** on the page',
    ],
    speakerNotes: `This is what every HTML page looks like on the inside. Let's go through each part step by step.
DOCTYPE: This is like showing your ID at the door — it tells the browser "Hey, I'm an HTML page!"
<html>: This is the container for the whole page. Everything lives inside it.
<head>: Think of this as the "behind the scenes" area. Visitors don't see it, but it has important info like the page title.
<body>: This is the stage! Everything inside here is what the visitor sees on screen.
You can think of it like a play: the head is the backstage area, and the body is the actual performance.`,
  },
  {
    id: 105, day: 0, slideInDay: 5,
    type: 'concept',
    title: 'Common HTML Tags',
    bullets: [
      '**Headings** — `<h1>` is the biggest, `<h6>` is the smallest',
      '**Paragraph** — `<p>` is for regular text, like sentences',
      '**Line break** — `<br>` adds a new line (like pressing Enter)',
      '**Comment** — `<!-- this is a comment -->` is a note only you can see',
    ],
    callout: { kind: 'tip', text: 'Tags usually come in pairs: <p>Hello</p>. The first one opens, the second one (with /) closes.' },
    speakerNotes: `Now let's look at the most common tags you'll use all the time.
Headings: Just like in a newspaper — the big title at the top is h1. Sub-headings are h2, h3, and so on.
Paragraph: Every time you write a block of text on a webpage, it goes inside <p> tags.
Line break: <br> is like pressing Enter on your keyboard. It starts a new line.
Comment: Comments are invisible to visitors — only you can see them in the code. Great for leaving notes to yourself!
Remember: most tags need an opening AND a closing tag. The closing tag has a / before the name.`,
  },
  {
    id: 106, day: 0, slideInDay: 6,
    type: 'code',
    title: 'Code Example — Your First Webpage',
    code: `<!DOCTYPE html>

<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is my first webpage</p>
</body>
</html>`,
    codeLanguage: 'html',
    bullets: [
      '`<!DOCTYPE html>` — this is an HTML5 page',
      '`<title>` — shows in the browser tab',
      '`<h1>` — big bold heading on the page',
      '`<p>` — a paragraph of text below the heading',
    ],
    speakerNotes: `Let's look at a complete, working example together!
Walk through each line slowly with the students.
DOCTYPE: Tells the browser what kind of file this is.
<html>: Opens the HTML document.
<head> / <title>: The title "My First Page" is what shows up in the browser's tab at the top.
<body>: Everything the visitor sees goes here.
<h1>Hello World</h1>: This shows a big heading that says "Hello World" on the page.
<p>This is my first webpage</p>: This shows a paragraph of text.
Closing tags </html>, </body>, </head>: They close off each section — like putting a lid on a box.
Point out: the indentation makes the code easier to read. It doesn't change how the page looks.`,
  },
  {
    id: 107, day: 0, slideInDay: 7,
    type: 'concept',
    title: 'What the Browser Shows',
    analogy: '👀 The browser reads your HTML like a recipe and cooks up a webpage for the visitor to see.',
    bullets: [
      'The `<h1>` tag shows as a **large, bold heading**: "Hello World"',
      'The `<p>` tag shows as **normal text** below: "This is my first webpage"',
      'The `<title>` text appears in the **browser tab** — not on the page itself',
      'The browser hides all the tags — visitors only see the content inside them',
    ],
    speakerNotes: `This is the exciting part — let's see what our code looks like to a real visitor!
When someone opens our HTML file in a browser:
They see a big heading "Hello World" at the top.
Below that, a smaller line of text: "This is my first webpage."
Up in the browser tab, they see the title "My First Page."
None of the tags (<h1>, <p>, etc.) are visible — the browser uses them as instructions but doesn't show them to visitors.
If you have a browser open, this is a great moment to show them a live demo!`,
  },
  {
    id: 108, day: 0, slideInDay: 8,
    type: 'activity',
    title: 'Your Turn! 🎉',
    activity: {
      prompt: 'You have 5 minutes — try building your first HTML page!',
      steps: [
        'Open a text editor (Notepad, TextEdit, or VS Code)',
        'Type the full HTML structure: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`',
        'Add a `<title>` with your name inside the `<head>`',
        'Add an `<h1>` heading — write anything you like!',
        'Add a `<p>` paragraph — tell us one fun fact about yourself',
        'Save the file as `index.html` and open it in a browser',
      ],
    },
    callout: { kind: 'tip', text: 'Don\'t worry about mistakes! Every error is a learning step. Just try and see what happens 😊' },
    speakerNotes: `Now it's their turn! Walk around and help students as they work.
Encourage everyone — even if the code doesn't look perfect, they're learning!
Common things to watch for:
Missing closing tags (like </h1> or </body>)
Forgetting to save the file as .html (not .txt)
Not opening it in a browser
If someone finishes early: challenge them to add a second heading (<h2>) or a line break (<br>).
After 5 minutes, ask a volunteer to share their screen and show their first webpage.
Celebrate every attempt — this is their very first webpage! 🎉`,
  },

  // ─── DAY 1: Internet Fundamentals & Markup Basics ────────────────────────
  {
    id: 1, day: 1, slideInDay: 1,
    type: 'title',
    title: 'Day 1',
    subtitle: 'Internet Fundamentals & Markup Basics',
    badge: 'The Big Picture',
    bullets: ['How the internet actually works', 'What HTTP is (and why you care)', 'Writing your first HTML document'],
  },
  {
    id: 2, day: 1, slideInDay: 2,
    type: 'goals',
    title: 'What You\'ll Know by End of Day',
    bullets: [
      'Explain what happens when you type a URL in a browser',
      'Describe what HTTP/HTTPS actually does',
      'Identify every part of an HTML document skeleton',
      'Create a valid HTML file with DOCTYPE + meta tags',
    ],
  },
  {
    id: 3, day: 1, slideInDay: 3,
    type: 'concept',
    title: 'How the Internet Works',
    analogy: '📮 Think of the internet like a postal system — your browser is you sending a letter, the server is the address you\'re sending to, and HTTP is the envelope format both sides agree to use.',
    bullets: [
      'Your browser is the **client** — it makes requests',
      'The website lives on a **server** somewhere in the world',
      'A **URL** is just a human-friendly address (e.g. google.com)',
      '**DNS** = the phone book — turns "google.com" into an IP like 142.250.80.46',
      'The server sends back HTML, CSS, JS — your browser renders it',
    ],
  },
  {
    id: 4, day: 1, slideInDay: 4,
    type: 'concept',
    title: 'HTTP & HTTPS',
    bullets: [
      '**HTTP** = HyperText Transfer Protocol — the language browsers and servers speak',
      'Every request has a **method**: GET (fetch), POST (send data), etc.',
      'Every response has a **status code**: 200 OK, 404 Not Found, 500 Server Error',
      '**HTTPS** = HTTP + encryption (SSL/TLS) — the "S" = secure',
      'Always use HTTPS in production — browsers warn users on plain HTTP',
    ],
    callout: { kind: 'tip', text: 'You can see all HTTP requests in DevTools → Network tab. Open it on any site and watch the magic happen.' },
  },
  {
    id: 5, day: 1, slideInDay: 5,
    type: 'concept',
    title: 'What Is HTML?',
    analogy: '🏗️ HTML is the skeleton of a webpage. CSS is the skin and clothes. JavaScript is the muscles. You need the skeleton first.',
    bullets: [
      'HTML = **HyperText Markup Language**',
      'It\'s NOT a programming language — it\'s a **markup language** (describes structure, not logic)',
      'You wrap content in **tags**: `<p>`, `<h1>`, `<div>`',
      'Tags usually come in pairs: `<p>Hello</p>` — opening and closing',
      'The browser reads HTML top-to-bottom and renders what it finds',
    ],
    callout: { kind: 'mistake', text: 'HTML is not the same as a programming language. It has no loops, variables, or logic. If you hear "I code in HTML" — politely correct them 😄' },
  },
  {
    id: 6, day: 1, slideInDay: 6,
    type: 'concept',
    title: 'The HTML Document Structure',
    bullets: [
      '`<!DOCTYPE html>` — tells the browser this is HTML5 (not optional!)',
      '`<html lang="en">` — root element, wraps everything',
      '`<head>` — metadata: title, styles, scripts (not shown on page)',
      '`<body>` — everything the user actually sees',
      '`<meta charset="UTF-8">` and `<meta name="viewport">` go in `<head>`',
    ],
  },
  {
    id: 7, day: 1, slideInDay: 7,
    type: 'code',
    title: 'Your First HTML File',
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page. Not bad, right?</p>
  </body>
</html>`,
    codeLanguage: 'html',
    bullets: [
      '`charset="UTF-8"` — handles emoji, accents, every language',
      '`viewport` meta — makes your page mobile-friendly',
      '`<title>` — shows in the browser tab',
      'Indentation = good habits, not required by browser',
    ],
    callout: { kind: 'tip', text: 'Save this as a .html file and open it in any browser — no server needed!' },
  },
  {
    id: 8, day: 1, slideInDay: 8,
    type: 'activity',
    title: 'Try It Yourself 🛠️',
    activity: {
      prompt: 'Build your HTML skeleton from scratch — no copy-paste!',
      steps: [
        'Open VS Code (or any text editor)',
        'Create a new file called `index.html`',
        'Type (don\'t paste!) the full HTML boilerplate',
        'Add your name in an `<h1>` and a fun fact in a `<p>`',
        'Open the file in Chrome and see your page live',
        'BONUS: Change the `<title>` and watch the tab update',
      ],
    },
    callout: { kind: 'tip', text: 'In VS Code, type ! and press Tab for instant boilerplate. You\'re welcome 😎' },
    preview: 'Tomorrow: Semantic HTML — giving meaning to your markup',
  },

  // ─── DAY 2: Semantic HTML & Text Elements ─────────────────────────────────
  {
    id: 9, day: 2, slideInDay: 1,
    type: 'title',
    title: 'Day 2',
    subtitle: 'Semantic HTML & Text Elements',
    badge: 'Give It Meaning',
    bullets: ['What makes HTML "semantic"', 'Headings, paragraphs, and text formatting', 'Blockquotes, citations, and code elements'],
  },
  {
    id: 10, day: 2, slideInDay: 2,
    type: 'goals',
    title: 'What You\'ll Know by End of Day',
    bullets: [
      'Explain semantic HTML and why it\'s not just aesthetic',
      'Use `<h1>`–`<h6>` correctly (hint: only one `<h1>` per page)',
      'Format text with `<strong>`, `<em>`, `<b>`, `<i>` — and know the difference',
      'Build a multi-section page using structural semantic tags',
    ],
  },
  {
    id: 11, day: 2, slideInDay: 3,
    type: 'concept',
    title: 'Semantic vs Non-Semantic HTML',
    analogy: '📦 Using `<div>` for everything is like labeling every box "Stuff". Semantic tags are like writing "Kitchen → Fragile Dishes". Way more useful.',
    bullets: [
      '**Semantic tags** have meaning: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`',
      '**Non-semantic tags** are just containers: `<div>`, `<span>`',
      'Semantic HTML helps **screen readers** (accessibility)',
      'Search engines rank semantic HTML better (**SEO**)',
      'Your teammates (and future you) can read the code faster',
    ],
    callout: { kind: 'mistake', text: 'Don\'t use `<div>` for everything. If there\'s a semantic tag that fits — use it.' },
  },
  {
    id: 12, day: 2, slideInDay: 4,
    type: 'concept',
    title: 'Semantic Layout Tags',
    bullets: [
      '`<header>` — top of page or section (logo, nav, intro)',
      '`<nav>` — navigation links (menus, breadcrumbs)',
      '`<main>` — the main content (one per page only!)',
      '`<article>` — self-contained content (blog post, news story)',
      '`<aside>` — related but secondary content (sidebar, callout)',
      '`<footer>` — bottom info (copyright, links, contact)',
    ],
  },
  {
    id: 13, day: 2, slideInDay: 5,
    type: 'concept',
    title: 'Headings — h1 Through h6',
    bullets: [
      'Use headings for **document structure**, not just font size',
      '`<h1>` = page title — **one per page**, full stop',
      '`<h2>` = major section headers',
      '`<h3>`–`<h6>` = sub-sections, nested progressively',
      'Screen readers use heading hierarchy to navigate — don\'t skip levels',
    ],
    callout: { kind: 'mistake', text: 'Using `<h3>` because "it looks the right size" — that\'s what CSS is for. Headings are about structure, not style.' },
  },
  {
    id: 14, day: 2, slideInDay: 6,
    type: 'concept',
    title: 'Text Formatting Tags',
    bullets: [
      '`<strong>` — **important** text (bold + semantic meaning)',
      '`<em>` — *emphasized* text (italic + semantic meaning)',
      '`<b>` — visually bold, no semantic weight',
      '`<i>` — visually italic (foreign words, technical terms)',
      '`<br>` — line break (use sparingly — don\'t use for spacing!)',
      '`<hr>` — thematic break / horizontal rule',
    ],
    callout: { kind: 'tip', text: 'Prefer `<strong>` over `<b>` and `<em>` over `<i>`. They carry meaning, not just style.' },
  },
  {
    id: 15, day: 2, slideInDay: 7,
    type: 'code',
    title: 'Blockquotes, Code & Citations',
    code: `<!-- Blockquote with citation -->
<blockquote cite="https://mdn.mozilla.org">
  <p>HTML is the standard markup language for Web pages.</p>
  <footer>— <cite>MDN Web Docs</cite></footer>
</blockquote>

<!-- Inline code -->
<p>Use the <code>&lt;p&gt;</code> tag for paragraphs.</p>

<!-- Preformatted / multi-line code block -->
<pre>
  <code>
    function greet() {
      return "Hello, HTML!";
    }
  </code>
</pre>`,
    codeLanguage: 'html',
    bullets: [
      '`<blockquote>` for long quotes from external sources',
      '`<q>` for short inline quotes (adds quotation marks automatically)',
      '`<code>` for inline code snippets',
      '`<pre>` preserves whitespace and line breaks',
    ],
  },
  {
    id: 16, day: 2, slideInDay: 8,
    type: 'activity',
    title: 'Try It Yourself 🛠️',
    activity: {
      prompt: 'Build a multi-section bio page using semantic structure',
      steps: [
        'Create `bio.html` with full DOCTYPE boilerplate',
        'Add `<header>` with your name in `<h1>`',
        'Add `<main>` with two `<section>` blocks',
        'Section 1: "About Me" — use `<h2>`, `<p>`, and `<strong>`/`<em>`',
        'Section 2: "Favorite Quote" — use `<blockquote>` and `<cite>`',
        'Add `<footer>` with a copyright notice',
        'BONUS: Add a `<nav>` with placeholder links',
      ],
    },
    preview: 'Tomorrow: Links & Navigation — connecting pages together',
  },

  // ─── DAY 3: Links & Navigation ────────────────────────────────────────────
  {
    id: 17, day: 3, slideInDay: 1,
    type: 'title',
    title: 'Day 3',
    subtitle: 'Links & Navigation',
    badge: 'Connect the Web',
    bullets: ['The anchor tag and how it works', 'Absolute vs relative URLs', 'Building a nav bar'],
  },
  {
    id: 18, day: 3, slideInDay: 2,
    type: 'goals',
    title: 'What You\'ll Know by End of Day',
    bullets: [
      'Write links to external sites and internal pages',
      'Explain the difference between absolute and relative URLs',
      'Use `target="_blank"` safely (with `rel="noopener"` — yes, it matters)',
      'Create anchor links that jump to sections on the same page',
      'Build a simple navigation bar',
    ],
  },
  {
    id: 19, day: 3, slideInDay: 3,
    type: 'concept',
    title: 'The Anchor Tag',
    bullets: [
      '`<a>` = anchor — the fundamental link element of the web',
      '`href` attribute = **H**ypertext **Ref**erence = where you\'re going',
      'Link text (between the tags) should be **descriptive**, not "click here"',
      'Can link to: URLs, pages, sections, emails (`mailto:`), phone (`tel:`)',
      'Without `href`, it\'s just styled text — not a real link',
    ],
    callout: { kind: 'mistake', text: 'Writing "click here" as link text is bad for accessibility and SEO. Write what the link IS: "View the HTML spec" not "click here for more info".' },
  },
  {
    id: 20, day: 3, slideInDay: 4,
    type: 'concept',
    title: 'Absolute vs Relative URLs',
    analogy: '🗺️ Absolute URL = full GPS address. Relative URL = "turn left at the corner" — directions from where you already are.',
    bullets: [
      '**Absolute**: `https://example.com/about.html` — full address, works anywhere',
      '**Relative**: `about.html` — relative to current file location',
      '`./` = current folder | `../` = one level up | `/` = site root',
      'Use relative URLs for internal links (easier to move projects)',
      'Use absolute URLs for external links',
    ],
    callout: { kind: 'tip', text: 'Starting a URL with `/` means from the site root — not your computer root. So `/images/logo.png` = site root + images folder.' },
  },
  {
    id: 21, day: 3, slideInDay: 5,
    type: 'concept',
    title: 'Opening Links in New Tabs',
    bullets: [
      '`target="_blank"` opens the link in a new browser tab',
      'Use for **external links** — keeps users on your site',
      '**ALWAYS add** `rel="noopener noreferrer"` when using `target="_blank"`',
      'Without it: the new tab can access your page via `window.opener` — security risk',
      '`noreferrer` also hides referrer info from the destination site',
    ],
    callout: { kind: 'mistake', text: 'Using `target="_blank"` without `rel="noopener noreferrer"` is a real security vulnerability. Browsers now auto-apply this, but it\'s still good practice to write it.' },
  },
  {
    id: 22, day: 3, slideInDay: 6,
    type: 'concept',
    title: 'Anchor Links (Jump to Section)',
    bullets: [
      'Add an `id` to any element: `<section id="contact">`',
      'Link to it with `#`: `<a href="#contact">Go to Contact</a>`',
      'Works within the same page or across pages: `page.html#contact`',
      'Great for long pages, FAQs, and table of contents',
      'Can also link back to top with `href="#"` (or better: `href="#top"`)',
    ],
  },
  {
    id: 23, day: 3, slideInDay: 7,
    type: 'code',
    title: 'Links in Action',
    code: `<!-- External link -->
<a href="https://mdn.mozilla.org"
   target="_blank"
   rel="noopener noreferrer">
  Visit MDN Web Docs
</a>

<!-- Internal page link -->
<a href="./about.html">About Us</a>

<!-- Anchor link (same page) -->
<a href="#projects">Jump to Projects</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Email Me</a>

<!-- Simple nav bar -->
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="#contact">Contact</a>
</nav>`,
    codeLanguage: 'html',
    bullets: [
      'Always use descriptive link text',
      'Relative paths keep projects portable',
      '`<nav>` wraps navigation links semantically',
    ],
  },
  {
    id: 24, day: 3, slideInDay: 8,
    type: 'activity',
    title: 'Try It Yourself 🛠️',
    activity: {
      prompt: 'Build a 2-page mini site with working navigation',
      steps: [
        'Create `index.html` and `about.html` in the same folder',
        'In `index.html`: add a `<nav>` linking to `about.html` and `#skills` section',
        'Add a `<section id="skills">` with some bullet points',
        'In `about.html`: add a link back to `index.html`',
        'Add one external link to your favourite website (with `target="_blank"` + `rel`)',
        'BONUS: Add a `mailto:` link and test it opens your email client',
      ],
    },
    callout: { kind: 'tip', text: 'Test all your links! A broken internal link is one of the most embarrassing web bugs.' },
    preview: 'Tomorrow: Images & Media — pictures, video, audio, and responsive images',
  },

  // ─── DAY 4: Images & Embedding Media ──────────────────────────────────────
  {
    id: 25, day: 4, slideInDay: 1,
    type: 'title',
    title: 'Day 4',
    subtitle: 'Images & Embedding Media',
    badge: 'Show, Don\'t Just Tell',
    bullets: ['The `<img>` tag and its attributes', 'Image formats and when to use each', 'Audio, video, and responsive images'],
  },
  {
    id: 26, day: 4, slideInDay: 2,
    type: 'goals',
    title: 'What You\'ll Know by End of Day',
    bullets: [
      'Insert images with correct `src` and `alt` attributes',
      'Write meaningful alt text (not just filename dumps)',
      'Choose between JPG, PNG, WebP, SVG, GIF',
      'Embed audio with `<audio>` and video with `<video>`',
      'Use `srcset` for responsive images (different sizes on different screens)',
    ],
  },
  {
    id: 27, day: 4, slideInDay: 3,
    type: 'concept',
    title: 'The img Tag',
    bullets: [
      '`<img>` is a **self-closing** void element — no closing tag needed',
      '`src` = source: path or URL to the image file',
      '`alt` = alternative text: shown if image fails, read by screen readers',
      '`width` and `height` attributes prevent layout shift during load',
      '`loading="lazy"` = browser only loads image when it\'s near the viewport',
    ],
    callout: { kind: 'mistake', text: 'Missing or empty `alt` text fails accessibility. And `alt="image.jpg"` is just as bad — describe what\'s actually in the image.' },
  },
  {
    id: 28, day: 4, slideInDay: 4,
    type: 'concept',
    title: 'Choosing Image Formats',
    bullets: [
      '**JPG/JPEG** — photos, complex images, lossy compression (smaller file size)',
      '**PNG** — logos, screenshots, images needing transparency',
      '**WebP** — modern format, smaller than JPG/PNG, wide browser support',
      '**SVG** — icons, logos, illustrations; scales infinitely (no pixelation)',
      '**GIF** — simple animations (but WebP/video is usually better now)',
    ],
    callout: { kind: 'tip', text: 'Default to WebP for photos on the web. Smaller files = faster loads = better UX and SEO. Fallback to JPG for older browsers if needed.' },
  },
  {
    id: 29, day: 4, slideInDay: 5,
    type: 'concept',
    title: 'Audio & Video Embedding',
    bullets: [
      '`<audio>` embeds sound with browser controls',
      '`<video>` embeds video — add `controls` attribute for play/pause',
      'Always add `<source>` elements for multiple formats (browser compatibility)',
      '`autoplay` and `muted` work together; `autoplay` alone is blocked by most browsers',
      'Add a text fallback between tags for browsers that don\'t support the element',
    ],
    callout: { kind: 'mistake', text: 'Using `autoplay` without `muted` will be blocked by every modern browser. And honestly, autoplaying audio is just rude anyway 😅' },
  },
  {
    id: 30, day: 4, slideInDay: 6,
    type: 'concept',
    title: 'Responsive Images with srcset',
    analogy: '📱 `srcset` is like a buffet — you offer multiple image sizes and let the browser pick the right one for the screen.',
    bullets: [
      '`srcset` provides multiple image options at different sizes',
      'Browser picks the best one based on screen resolution and viewport',
      '`sizes` attribute tells browser how wide the image will display',
      '`<picture>` element = more control: swap images based on breakpoints',
      'Prevents loading a 2000px image on a 375px phone screen',
    ],
  },
  {
    id: 31, day: 4, slideInDay: 7,
    type: 'code',
    title: 'Media Code Examples',
    code: `<!-- Image with all best practices -->
<img src="hero.webp"
     alt="A developer typing code at a desk"
     width="800" height="400"
     loading="lazy" />

<!-- Responsive image with srcset -->
<img src="photo-800.jpg"
     srcset="photo-400.jpg 400w,
             photo-800.jpg 800w,
             photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Mountain landscape at sunset" />

<!-- Video embed -->
<video controls width="640" muted>
  <source src="demo.webm" type="video/webm" />
  <source src="demo.mp4" type="video/mp4" />
  Your browser doesn't support video.
</video>`,
    codeLanguage: 'html',
    bullets: [
      'Always specify `width` and `height` to avoid layout shift',
      'Multiple `<source>` tags = browser picks first one it supports',
    ],
  },
  {
    id: 32, day: 4, slideInDay: 8,
    type: 'activity',
    title: 'Try It Yourself 🛠️',
    activity: {
      prompt: 'Build a media-rich profile card page',
      steps: [
        'Find a free photo from unsplash.com and save it',
        'Create `media.html` and add the image with proper `alt` text',
        'Set `width`, `height`, and `loading="lazy"` on the image',
        'Add a `<figure>` and `<figcaption>` wrapping your image',
        'BONUS: Find a free audio sample and embed it with `<audio controls>`',
        'BONUS: Try srcset with 2 different sizes of the same image',
      ],
    },
    callout: { kind: 'tip', text: '`<figure>` + `<figcaption>` is the semantic way to pair an image with its caption. Way better than a `<div>` + `<p>` below it.' },
    preview: 'Tomorrow: Lists & Tables — organizing information clearly',
  },

  // ─── DAY 5: Lists & Tables ────────────────────────────────────────────────
  {
    id: 33, day: 5, slideInDay: 1,
    type: 'title',
    title: 'Day 5',
    subtitle: 'Lists & Tables',
    badge: 'Organize Everything',
    bullets: ['Unordered, ordered, and definition lists', 'Nested lists (lists within lists)', 'Proper table structure with colspan/rowspan'],
  },
  {
    id: 34, day: 5, slideInDay: 2,
    type: 'goals',
    title: 'What You\'ll Know by End of Day',
    bullets: [
      'Build unordered and ordered lists with `<ul>` and `<ol>`',
      'Create definition lists with `<dl>`, `<dt>`, `<dd>`',
      'Nest lists inside lists without losing your mind',
      'Build a table with `<thead>`, `<tbody>`, `<tfoot>`',
      'Use `colspan` and `rowspan` to merge cells',
    ],
  },
  {
    id: 35, day: 5, slideInDay: 3,
    type: 'concept',
    title: 'Unordered & Ordered Lists',
    bullets: [
      '`<ul>` = **unordered list** — bullet points (order doesn\'t matter)',
      '`<ol>` = **ordered list** — numbered (sequence matters)',
      '`<li>` = **list item** — goes inside both `<ul>` and `<ol>`',
      '`<ol>` `type` attribute: `"1"` (default), `"A"`, `"a"`, `"I"`, `"i"`',
      '`<ol>` `start` attribute: start counting from a specific number',
    ],
    callout: { kind: 'tip', text: 'Use `<ul>` for navigation menus too! `<nav><ul><li><a>` is the semantic pattern most devs use.' },
  },
  {
    id: 36, day: 5, slideInDay: 4,
    type: 'concept',
    title: 'Definition Lists',
    analogy: '📖 `<dl>` is like a glossary — perfect for term/definition pairs like a FAQ, glossary, or metadata.',
    bullets: [
      '`<dl>` = **definition list** — wraps the whole list',
      '`<dt>` = **definition term** — the word/concept being defined',
      '`<dd>` = **definition description** — the explanation',
      'One `<dt>` can have multiple `<dd>` elements',
      'Great for FAQs, glossaries, metadata, and key-value pairs',
    ],
  },
  {
    id: 37, day: 5, slideInDay: 5,
    type: 'concept',
    title: 'Table Structure',
    bullets: [
      '`<table>` — the outer wrapper',
      '`<thead>` — header rows (column labels)',
      '`<tbody>` — main data rows',
      '`<tfoot>` — footer rows (totals, summaries)',
      '`<tr>` — table row | `<th>` — header cell | `<td>` — data cell',
      '`<caption>` — accessible title for the table (above or below)',
    ],
    callout: { kind: 'mistake', text: 'Using tables for page layout is a 2005 move. Tables are for tabular DATA only. Use CSS Grid or Flexbox for layout.' },
  },
  {
    id: 38, day: 5, slideInDay: 6,
    type: 'concept',
    title: 'colspan & rowspan',
    bullets: [
      '`colspan="N"` — cell spans across N columns horizontally',
      '`rowspan="N"` — cell spans across N rows vertically',
      'Useful for merged headers, grouped data, calendar grids',
      'When you use `colspan`/`rowspan`, remove the cells it replaces',
      'Mismatched span counts = broken table layout — count carefully!',
    ],
    callout: { kind: 'tip', text: 'Sketch your table on paper first before coding colspan/rowspan. Trust me on this one 😂' },
  },
  {
    id: 39, day: 5, slideInDay: 7,
    type: 'code',
    title: 'Tables & Lists in Action',
    code: `<!-- Definition list (FAQ style) -->
<dl>
  <dt>What is HTML?</dt>
  <dd>A markup language for structuring web content.</dd>
  <dt>Is HTML a programming language?</dt>
  <dd>No. It has no logic or variables.</dd>
</dl>

<!-- Table with thead, tbody, colspan -->
<table>
  <caption>Monthly Sales</caption>
  <thead>
    <tr>
      <th colspan="2">Q1 Results</th>
    </tr>
    <tr><th>Month</th><th>Revenue</th></tr>
  </thead>
  <tbody>
    <tr><td>January</td><td>$4,200</td></tr>
    <tr><td>February</td><td>$3,800</td></tr>
  </tbody>
</table>`,
    codeLanguage: 'html',
    bullets: [
      '`<caption>` improves accessibility — screen readers announce it first',
      '`<th scope="col">` helps screen readers navigate tables',
    ],
  },
  {
    id: 40, day: 5, slideInDay: 8,
    type: 'activity',
    title: 'Try It Yourself 🛠️',
    activity: {
      prompt: 'Build a data page with lists and a full table',
      steps: [
        'Create `data.html` — your data showcase page',
        'Add a `<ul>` for your top 5 favourite websites (with links!)',
        'Add an `<ol>` for your morning routine in order',
        'Add a `<dl>` with 3 HTML terms and their definitions',
        'Build a schedule table with days as columns, time as rows',
        'Use `colspan` to merge the weekend columns into "Relax 🎉"',
      ],
    },
    preview: 'Tomorrow: Forms & User Input — the interactive web',
  },

  // ─── DAY 6: Forms & User Input ────────────────────────────────────────────
  {
    id: 41, day: 6, slideInDay: 1,
    type: 'title',
    title: 'Day 6',
    subtitle: 'Forms & User Input',
    badge: 'The Interactive Web',
    bullets: ['Form structure and how data flows', 'Every input type you\'ll actually use', 'Validation, fieldsets, and good UX'],
  },
  {
    id: 42, day: 6, slideInDay: 2,
    type: 'goals',
    title: 'What You\'ll Know by End of Day',
    bullets: [
      'Build a complete form with `action` and `method` attributes',
      'Use input types: text, email, password, number, date, file, checkbox, radio',
      'Connect every `<input>` to a `<label>` (non-negotiable for accessibility)',
      'Group fields with `<fieldset>` and `<legend>`',
      'Apply HTML5 validation: `required`, `pattern`, `min`, `max`',
    ],
  },
  {
    id: 43, day: 6, slideInDay: 3,
    type: 'concept',
    title: 'Form Basics',
    analogy: '📬 A form is like a paper questionnaire. `action` is the mailbox address (where it goes), `method` is how you send it (GET = postcard anyone can read, POST = sealed envelope).',
    bullets: [
      '`<form>` wraps all form elements',
      '`action` — URL where form data is sent on submit',
      '`method="get"` — data in URL (visible, bookmarkable)',
      '`method="post"` — data in request body (secure, for passwords/sensitive data)',
      '`<button type="submit">` or `<input type="submit">` triggers submission',
    ],
    callout: { kind: 'mistake', text: 'Using GET for a login form means the password appears in the URL. Use POST for any sensitive data.' },
  },
  {
    id: 44, day: 6, slideInDay: 4,
    type: 'concept',
    title: 'Input Types',
    bullets: [
      '`type="text"` — basic single-line text',
      '`type="email"` — validates email format automatically',
      '`type="password"` — hides characters as you type',
      '`type="number"` — numeric with spin buttons and min/max',
      '`type="date"` — native date picker',
      '`type="file"` — file upload button',
      '`type="checkbox"` — on/off toggle | `type="radio"` — pick one from group',
    ],
    callout: { kind: 'tip', text: 'On mobile, `type="email"` shows the @ keyboard, `type="number"` shows the number pad. These input types are free UX improvements!' },
  },
  {
    id: 45, day: 6, slideInDay: 5,
    type: 'concept',
    title: 'Labels & Accessibility',
    bullets: [
      'Every `<input>` MUST have an associated `<label>`',
      'Link them with matching `for` (on label) and `id` (on input)',
      'Clicking the label focuses the input — huge UX win',
      'Screen readers announce the label text when the input is focused',
      'Alternative: wrap `<input>` inside `<label>` (no `for`/`id` needed)',
    ],
    callout: { kind: 'mistake', text: 'Using placeholder text instead of a label is the most common form mistake. Placeholders disappear when you type — users forget what the field is for.' },
  },
  {
    id: 46, day: 6, slideInDay: 6,
    type: 'concept',
    title: 'Fieldset, Legend & Validation',
    bullets: [
      '`<fieldset>` groups related form fields visually and semantically',
      '`<legend>` labels the group (like a mini-heading for the fieldset)',
      '`required` — field must not be empty on submit',
      '`minlength` / `maxlength` — character count limits for text',
      '`pattern="[regex]"` — validate against a custom pattern',
      '`min` / `max` — numeric/date range constraints',
    ],
  },
  {
    id: 47, day: 6, slideInDay: 7,
    type: 'code',
    title: 'A Real Form',
    code: `<form action="/signup" method="post">
  <fieldset>
    <legend>Your Details</legend>

    <label for="name">Full Name</label>
    <input id="name" name="name"
           type="text" required
           minlength="2" />

    <label for="email">Email</label>
    <input id="email" name="email"
           type="email" required />

    <label for="age">Age</label>
    <input id="age" name="age"
           type="number" min="18" max="99" />
  </fieldset>

  <fieldset>
    <legend>Preferences</legend>
    <label>
      <input type="checkbox" name="newsletter" />
      Subscribe to newsletter
    </label>
  </fieldset>

  <button type="submit">Sign Up</button>
</form>`,
    codeLanguage: 'html',
    bullets: [
      'All inputs have matching labels',
      'HTML5 validation happens before submit',
      'Nested label wrapping = no `for`/`id` needed',
    ],
  },
  {
    id: 48, day: 6, slideInDay: 8,
    type: 'activity',
    title: 'Try It Yourself 🛠️',
    activity: {
      prompt: 'Build a complete event registration form',
      steps: [
        'Create `register.html` — registration form for a fake tech meetup',
        'Add fieldset for "Personal Info": name, email, phone (`tel` type)',
        'Add fieldset for "Event Prefs": date picker, session topic (radio buttons)',
        'Add a checkbox for newsletter opt-in',
        'Add a `<textarea>` for "Any questions?"',
        'Add `required` to the essential fields',
        'BONUS: Add a `<select>` dropdown for "How did you hear about us?"',
      ],
    },
    callout: { kind: 'tip', text: 'Open the form in Chrome, try to submit empty — browser validation fires! Now try submitting with a bad email format. Pretty cool for zero JavaScript.' },
    preview: 'Tomorrow: ARIA, SEO & Best Practices — leveling up to production-ready HTML',
  },

  // ─── DAY 7: Advanced HTML & Best Practices ────────────────────────────────
  {
    id: 49, day: 7, slideInDay: 1,
    type: 'title',
    title: 'Day 7',
    subtitle: 'ARIA, SEO & Best Practices',
    badge: 'Production-Ready HTML',
    bullets: ['ARIA attributes and WCAG accessibility basics', 'SEO meta tags and Open Graph', 'Code validation and professional standards'],
  },
  {
    id: 50, day: 7, slideInDay: 2,
    type: 'goals',
    title: 'What You\'ll Know by End of Day',
    bullets: [
      'Use ARIA roles and attributes to improve accessibility',
      'Understand WCAG levels (A, AA, AAA) at a practical level',
      'Write effective `<meta>` tags for SEO and social sharing',
      'Add Open Graph tags so links look great on social media',
      'Validate your HTML with W3C validator and fix common errors',
    ],
  },
  {
    id: 51, day: 7, slideInDay: 3,
    type: 'concept',
    title: 'ARIA — Accessible Rich Internet Applications',
    analogy: '🔊 ARIA is like closed captions for your code. If a screen reader can\'t "see" what something does, ARIA labels tell it what to announce.',
    bullets: [
      'ARIA adds **semantic meaning** that HTML alone can\'t express',
      '`role="button"` — tells screen readers: this `<div>` behaves like a button',
      '`aria-label="Close dialog"` — names an element for screen readers',
      '`aria-hidden="true"` — hides decorative elements from screen readers',
      '`aria-expanded="false"` — announces state of expandable elements',
    ],
    callout: { kind: 'tip', text: 'Rule 1 of ARIA: Don\'t use ARIA if you can use a semantic HTML element instead. `<button>` is always better than `<div role="button">`.' },
  },
  {
    id: 52, day: 7, slideInDay: 4,
    type: 'concept',
    title: 'WCAG Basics — What Actually Matters',
    bullets: [
      'WCAG = **Web Content Accessibility Guidelines** (W3C standard)',
      '**Level A** — must fix (bare minimum): alt text, keyboard access, no blinking',
      '**Level AA** — should fix (industry standard): 4.5:1 color contrast, captions',
      '**Level AAA** — nice to have (very strict): sign language videos, etc.',
      'Most legal requirements are Level AA — aim for that as your baseline',
    ],
    callout: { kind: 'mistake', text: 'Light gray text on white background fails WCAG AA contrast. It looks "clean" but is unreadable for many people. Always check contrast ratios.' },
  },
  {
    id: 53, day: 7, slideInDay: 5,
    type: 'concept',
    title: 'SEO Meta Tags',
    bullets: [
      '`<meta name="description">` — shown in search results (aim: 150-160 chars)',
      '`<meta name="robots">` — tells crawlers to index or not (`noindex`)',
      '`<title>` — the most impactful SEO element on the page',
      '`<meta name="keywords">` — mostly ignored by Google now, skip it',
      'Canonical `<link rel="canonical">` — prevents duplicate content issues',
    ],
    callout: { kind: 'tip', text: 'Your `<title>` should be unique on every page. Format: "Page Name – Site Name". Google truncates at ~60 chars.' },
  },
  {
    id: 54, day: 7, slideInDay: 6,
    type: 'concept',
    title: 'Open Graph Tags — Social Media Previews',
    analogy: '📸 Open Graph tags are like a business card for your page. When someone shares your link on Slack or Twitter, these tags control the preview image and text.',
    bullets: [
      '`og:title` — title shown in the social card',
      '`og:description` — description in the card',
      '`og:image` — the preview image (recommended: 1200×630px)',
      '`og:url` — canonical URL of the page',
      '`og:type` — usually `"website"` or `"article"`',
    ],
  },
  {
    id: 55, day: 7, slideInDay: 7,
    type: 'code',
    title: 'Full Head Section — Production Ready',
    code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
  <title>HTML Bootcamp – Day 7</title>

  <!-- SEO -->
  <meta name="description"
        content="Learn HTML in 7 days with practical examples." />
  <link rel="canonical"
        href="https://example.com/bootcamp" />

  <!-- Open Graph -->
  <meta property="og:title" content="HTML Bootcamp" />
  <meta property="og:description"
        content="Learn HTML in 7 days." />
  <meta property="og:image"
        content="https://example.com/og-image.jpg" />
  <meta property="og:url"
        content="https://example.com/bootcamp" />
  <meta property="og:type" content="website" />

  <!-- ARIA landmark helper -->
  <meta name="theme-color" content="#1a1a2e" />
</head>`,
    codeLanguage: 'html',
    bullets: [
      'This is a real production `<head>` section',
      'Open Graph needs `property=` not `name=`',
      '`theme-color` tints the browser UI on mobile',
    ],
    callout: { kind: 'tip', text: 'Test your Open Graph tags with opengraph.xyz before publishing — see exactly how your link will look on social.' },
  },
  {
    id: 56, day: 7, slideInDay: 8,
    type: 'activity',
    title: 'Final Challenge 🏆',
    activity: {
      prompt: 'Audit and upgrade your Day 1 HTML file into a production-ready page',
      steps: [
        'Open your original `index.html` from Day 1',
        'Add a full meta tag set: charset, viewport, description, og:* tags',
        'Add ARIA labels to your nav and any buttons',
        'Check color contrast with the Chrome DevTools accessibility panel',
        'Run your file through validator.w3.org — fix every error',
        'BONUS: Add `<link rel="icon" href="favicon.ico">` for the tab icon',
        'Share your validated, accessible page — you\'ve built something real! 🎉',
      ],
    },
    callout: { kind: 'tip', text: 'Paste your HTML into validator.w3.org. A green "No errors" banner is satisfying every single time 💚' },
    preview: '🎓 Course complete! You now know enough HTML to build real websites.',
  },
];

export const DAYS = [0, 1, 2, 3, 4, 5, 6, 7];

export const DAY_TITLES: Record<number, string> = {
  0: 'HTML Basics & Structure',
  1: 'Internet & Markup Basics',
  2: 'Semantic HTML & Text',
  3: 'Links & Navigation',
  4: 'Images & Media',
  5: 'Lists & Tables',
  6: 'Forms & User Input',
  7: 'ARIA, SEO & Best Practices',
};

export const DAY_ICONS: Record<number, string> = {
  0: '🌱',
  1: '🌐',
  2: '📝',
  3: '🔗',
  4: '🖼️',
  5: '📋',
  6: '📬',
  7: '🏆',
};

export function getSlidesForDay(day: number): Slide[] {
  return ALL_SLIDES.filter(s => s.day === day);
}
