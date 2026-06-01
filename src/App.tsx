import { useEffect, useMemo, useState } from "react";

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        const initialIsDark = storedTheme
            ? storedTheme === "dark"
            : prefersDark;
        setIsDark(initialIsDark);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const infraTags = useMemo(
        () => [
            "AWS",
            "GCP",
            "Linux",
            "Windows",
            "TypeScript",
            "React",
            "Python",
        ],
        [],
    );

    const projects = useMemo(
        () => [
            {
                name: "社内FAQ AI検索システム",
                summary:
                    "ローカルLLMを用いた社内FAQ基盤。要件定義から運用設計までをリードし、現場の検索体験を改善。",
                tech: ["Python", "Gemma3", "RAG", "Vector DB", "Linux"],
            },
            {
                name: "インフラ・開発環境構築",
                summary: "Linux/Windowsを横断した提案～障害対応の経験。",
                tech: [
                    "Bash",
                    "PowerShell",
                    "AWS",
                    "GCP",
                    "Docker",
                    "Terraform",
                ],
            },
            {
                name: "本ポートフォリオサイト",
                summary:
                    "短時間で強みを理解できる情報設計を重視。静的配信に最適化。",
                tech: [
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Vite",
                    "GitHub Pages",
                ],
            },
        ],
        [],
    );

    const skillGroups = useMemo(
        () => [
            { category: "Cloud", values: ["GCP", "AWS"] },
            { category: "OS / Env", values: ["Linux", "Windows", "Docker"] },
            {
                category: "Languages",
                values: ["TypeScript", "Python", "SQL", "Lua"],
            },
            { category: "Frontend", values: ["React", "Vite", "Tailwind CSS"] },
        ],
        [],
    );

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
            <main className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-2xl shadow-cyan-950/10 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/60 dark:shadow-black/40">
                <section className="relative border-b border-slate-200/70 px-6 py-14 sm:px-10 dark:border-slate-700/70">
                    <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />

                    <div className="relative flex flex-wrap items-start justify-between gap-6">
                        <div className="max-w-3xl">
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-600/25 bg-cyan-500/10 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-300/40 dark:text-cyan-200">
                                Software Engineer(web) / DX Promotion Leader
                            </p>
                            <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl dark:text-white">
                                藤田 基寛{" "}
                                <span className="text-cyan-700 dark:text-cyan-300">
                                    (Motohiro Fujita)
                                </span>
                            </h1>
                            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200">
                                マルチクラウドからOSレイヤー、さらに生成AI活用まで。現場課題を技術で解決する、フルスタック志向エンジニア。
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsDark((value) => !value)}
                            className="rounded-xl border border-slate-300/80 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
                        >
                            {isDark ? "Light Mode" : "Dark Mode"}
                        </button>
                    </div>

                    <ul className="relative mt-8 flex flex-wrap gap-2">
                        {infraTags.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-full border border-slate-300/70 bg-slate-100/85 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="grid gap-8 border-b border-slate-200/70 px-6 py-12 sm:px-10 lg:grid-cols-[1.25fr_0.75fr] dark:border-slate-700/70">
                    <div>
                        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                            About Me / Core Strengths
                        </h2>
                        <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-200">
                            AWS/GCPのクラウド構築だけでなく、Linux/Windows運用を含むインフラ全体を理解したうえで、業務課題をプロダクトに落とし込む実装力が強みです。社内DX推進においても、要件定義・システム開発・運用保守までを一気通貫で担当し、技術導入を成果へ接続してきました。
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/60 dark:shadow-black/20">
                        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                            Value Proposition
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                            <li>Cloud to On-Premを横断する設計視点</li>
                            <li>要件整理から実装までの高速推進</li>
                            <li>開発者体験を改善する自動化と標準化</li>
                        </ul>
                    </div>
                </section>

                <section className="border-b border-slate-200/70 px-6 py-12 sm:px-10 dark:border-slate-700/70">
                    <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                        Projects
                    </h2>
                    <div className="mt-6 grid gap-4 lg:grid-cols-3">
                        {projects.map((project) => (
                            <article
                                key={project.name}
                                className="group rounded-2xl border border-slate-200/80 bg-linear-to-br from-white/80 to-slate-50/70 p-5 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-900/15 dark:border-slate-700 dark:from-slate-900/75 dark:to-slate-800/70 dark:shadow-black/25"
                            >
                                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                                    {project.name}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                                    {project.summary}
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded-md bg-slate-900/90 px-2 py-1 font-mono text-xs text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-8 border-b border-slate-200/70 px-6 py-12 sm:px-10 lg:grid-cols-2 dark:border-slate-700/70">
                    <div>
                        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                            Skills
                        </h2>
                        <div className="mt-5 space-y-4">
                            {skillGroups.map((group) => (
                                <div
                                    key={group.category}
                                    className="rounded-xl border border-slate-200/80 bg-white/75 p-4 dark:border-slate-700 dark:bg-slate-800/65"
                                >
                                    <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                                        {group.category}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                                        {group.values.join(" / ")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-600/25 bg-cyan-500/10 p-6 backdrop-blur-sm dark:border-cyan-300/35 dark:bg-cyan-400/10">
                        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                            Contact / Links
                        </h2>
                        <ul className="mt-5 space-y-3 text-sm sm:text-base">
                            <li className="text-slate-700 dark:text-slate-100">
                                GitHub:{" "}
                                <a
                                    href="https://github.com/m-fujita"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-semibold text-cyan-700 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200"
                                >
                                    github.com/mochi7415
                                </a>
                            </li>
                            <li className="text-slate-700 dark:text-slate-100">
                                Email:{" "}
                                <a
                                    href="mailto:m-fujita@example.com"
                                    className="font-semibold text-cyan-700 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200"
                                >
                                    moto4685@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <footer className="px-6 py-6 text-center text-xs text-slate-500 sm:px-10 dark:text-slate-400">
                    mochi7415 portfolio / Built with React + TypeScript +
                    Tailwind CSS + Vite
                </footer>
            </main>
        </div>
    );
}

export default App;
