const AI_BRANDS = [
    { name: "ChatGPT",    file: "chatgpt.svg" },
    { name: "Claude",     file: "claude.svg" },
    { name: "DeepSeek",   file: "deepseek.svg" },
    { name: "Gemini",     file: "gemini.svg" },
    { name: "Grok",       file: "grok.svg" },
    { name: "Groq",       file: "groq.svg" },
    { name: "Manus",      file: "manus.svg" },
    { name: "Meta",       file: "meta.svg" },
    { name: "Mistral",    file: "mistral.svg" },
    { name: "NVIDIA",     file: "nvidia.svg" },
    { name: "Ollama",     file: "ollama.svg" },
    { name: "Perplexity", file: "perplexity.svg" },
    { name: "Vertex AI",  file: "vertex-ai.svg" }
];

function renderBrandMarquee() {
    const track = document.getElementById("brand-marquee");
    if (!track) return;

    const buildGroup = () => {
        const group = document.createElement("div");
        group.className = "flex items-center gap-20 px-12";
        group.innerHTML = AI_BRANDS.map(b =>
            `<img src="./assets/ai-brands/${b.file}" alt="${b.name}"
                  class="h-20 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300">`
        ).join("");
        return group;
    };

    // Two groups side-by-side make the marquee loop seamlessly with translateX(-50%).
    track.appendChild(buildGroup());
    track.appendChild(buildGroup());
}

function setupMobileMenu() {
    const btn  = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("mobile-menu-icon");
    if (!btn || !menu || !icon) return;

    btn.addEventListener("click", () => {
        const isHidden = menu.classList.toggle("hidden");
        icon.textContent = isHidden ? "menu" : "close";
    });

    menu.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
            menu.classList.add("hidden");
            icon.textContent = "menu";
        });
    });
}

function setupRevealObserver() {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: "0px 0px -60px 0px", threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

function setupConnectLine() {
    const archSection = document.getElementById("arquitetura");
    if (!archSection) return;

    const lineObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            document.querySelector(".connect-line")?.classList.add("active");
            lineObserver.unobserve(archSection);
        }
    }, { threshold: 0.5 });

    lineObserver.observe(archSection);
}

document.addEventListener("DOMContentLoaded", () => {
    renderBrandMarquee();
    setupMobileMenu();
    setupRevealObserver();
    setupConnectLine();
});
