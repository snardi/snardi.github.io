class SkillWidget extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const skill = this.getAttribute('skill') || '';
        const level = this.getAttribute('level') || '';
        const link = this.getAttribute('link') || '';
        const normalizedLvl = level.toLowerCase();

        let filledCount = 0;
        if (normalizedLvl === 'beginner') filledCount = 1;
        else if (normalizedLvl === 'intermediate') filledCount = 3;
        else if (normalizedLvl === 'advanced') filledCount = 4;
        else if (normalizedLvl === 'expert') filledCount = 5;

        const totalStars = 5;
        let starDisplay = '';

        for (let i = 0; i < totalStars; i++) {
            if (i < filledCount) {
                starDisplay += `<span class="text-[var(--black)]">★</span>`;
            } else {
                starDisplay += `<span class="text-[var(--base1)]">☆</span>`;
            }
        }

        const tag = link ? 'a' : 'span';
        const hrefAttr = link ? `href="${link}" target="_blank"` : '';
        const cursorClass = link ? 'cursor-pointer' : 'cursor-default';
        const borderReset = link ? 'border-none no-underline hover:border-none' : '';

        this.innerHTML = `
            <${tag} ${hrefAttr} class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--base2)] mx-1 align-middle text-sm font-sans shadow-sm shadow-[var(--blue)]/10 hover:bg-[var(--base3)] transition-colors ${cursorClass} whitespace-nowrap ${borderReset}" style="border-bottom: none !important;">
                <span class="font-semibold text-[var(--base03)]">${skill}</span>
                <span class="tracking-tighter select-none" aria-label="${filledCount} out of 5 stars">
                    ${starDisplay}
                </span>
                <span class="text-[var(--base01)] text-xs font-medium">(${level})</span>
            </${tag}>
        `;
    }
}

customElements.define('skill-widget', SkillWidget);
