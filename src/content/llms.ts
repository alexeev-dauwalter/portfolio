import { getDictionary, formatMonthYear, type Locale } from '@i18n';
import { getContent, buildTimeline } from '@content';

/**
 * Strip HTML tags from a string. Used for hero intro which contains
 * inline <code> elements for rendering.
 */
function stripHtml(input: string): string {
  return input.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

/**
 * Collapse multiline experience/project descriptions into a single
 * paragraph for compact LLM consumption.
 */
function flattenDescription(input: string | undefined): string {
  if (!input) return '';
  return input
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join(' ');
}

function dateRange(
  begin: string,
  end: string | undefined,
  locale: Locale,
  presentTime: string
): string {
  const beginLabel = formatMonthYear(begin, locale);
  const endLabel = end ? formatMonthYear(end, locale) : presentTime;
  return `${beginLabel} — ${endLabel}`;
}

export function buildLlmsTxt(locale: Locale, origin = ''): string {
  const dict = getDictionary(locale);
  const content = getContent(locale);
  const timeline = buildTimeline(content);

  const base = origin.replace(/\/+$/, '');
  const home = `${base}/${locale}/`;

  const tagline = stripHtml(content.hero.introHtml);
  const desiredRoles = content.desiredPositions.join(' / ');
  const navHandles = content.nav
    .map((n) => `${n.title}: ${n.href}`)
    .join(' · ');

  const lines: string[] = [];

  // Header
  lines.push(`# ${content.fullName}`);
  lines.push('');
  lines.push(`> ${tagline}`);
  lines.push('');
  lines.push(`Email: ${content.email}`);
  if (desiredRoles) lines.push(`Open to: ${desiredRoles}`);
  lines.push(`Links: ${navHandles}`);
  lines.push('');
  lines.push(`Canonical: ${home}`);
  lines.push('');

  // About
  if (content.about[0]) {
    lines.push(`## ${dict.sections.about}`);
    lines.push('');
    const intro = content.about[0]
      .split('\n')
      .slice(0, 2)
      .map((s) => s.trim())
      .filter(Boolean)
      .join(' ');
    lines.push(intro);
    lines.push('');
  }

  // Experience
  if (content.experience.length > 0) {
    lines.push(`## ${dict.sections.experience}`);
    lines.push('');
    for (const item of content.experience) {
      const period = dateRange(
        item.begin,
        item.end,
        locale,
        dict.duration.presentTime
      );
      const head = `- **${item.company}** — ${item.position} (${period})`;
      lines.push(head);
      const desc = flattenDescription(item.description);
      if (desc) lines.push(`  ${desc}`);
      if (item.skills && item.skills.length > 0) {
        const stack = item.skills.map((s) => s.title).join(', ');
        lines.push(`  Stack: ${stack}`);
      }
    }
    lines.push('');
  }

  // Projects
  if (content.projects.length > 0) {
    lines.push(`## ${dict.sections.projects}`);
    lines.push('');
    for (const project of content.projects) {
      const link = project.github ?? project.gitlab;
      const stack = project.stack.map((s) => s.title).join(', ');
      const head = link
        ? `- [${project.name}](${link})`
        : `- ${project.name}`;
      lines.push(head);
      lines.push(`  ${project.description}`);
      if (stack) lines.push(`  Stack: ${stack}`);
    }
    lines.push('');
  }

  // Long road (programming path)
  if (content.about[0]) {
    const yearKeyword = dict.parse.yearKeyword;
    const yearPrefix = yearKeyword ? `\\s*${yearKeyword}` : '';
    const re = new RegExp(`^(\\d{4})${yearPrefix}:\\s*(.+)$`, 'i');
    const entries: { year: number; body: string; bullets: string[] }[] = [];
    let current: { year: number; body: string; bullets: string[] } | null =
      null;
    for (const block of content.about) {
      for (const line of block.split('\n')) {
        const m = line.match(re);
        if (m) {
          if (current) entries.push(current);
          current = {
            year: Number(m[1]),
            body: m[2].trim(),
            bullets: []
          };
        } else if (current) {
          const trimmed = line.trim();
          if (!trimmed) continue;
          if (trimmed.startsWith('- ')) {
            current.bullets.push(trimmed.slice(2));
          } else {
            current.body = `${current.body} ${trimmed}`;
          }
        }
      }
    }
    if (current) entries.push(current);
    entries.sort((a, b) => a.year - b.year);

    if (entries.length > 0) {
      lines.push(`## ${dict.sections.longPath}`);
      lines.push('');
      for (const entry of entries) {
        lines.push(`- **${entry.year}**: ${entry.body}`);
        for (const bullet of entry.bullets) {
          lines.push(`  - ${bullet}`);
        }
      }
      lines.push('');
    }
  }

  // Stack
  if (content.skills.main.length > 0) {
    lines.push(`## ${dict.sections.stack}`);
    lines.push('');
    lines.push(
      `${dict.stack.main}: ${content.skills.main.map((s) => s.title).join(', ')}`
    );
    if (content.skills.hard.languages.length > 0) {
      lines.push('');
      lines.push(
        `Languages: ${content.skills.hard.languages.map((s) => s.title).join(', ')}`
      );
    }
    if (content.skills.hard.technologies.length > 0) {
      lines.push('');
      lines.push(
        `Technologies: ${content.skills.hard.technologies.map((s) => s.title).join(', ')}`
      );
    }
    if (content.skills.hard.patterns.length > 0) {
      lines.push('');
      lines.push(
        `${dict.stack.patterns}: ${content.skills.hard.patterns.join(', ')}`
      );
    }
    lines.push('');
  }

  // Education / Timeline
  if (timeline.length > 0) {
    lines.push(`## ${dict.sections.timeline}`);
    lines.push('');
    for (const row of timeline) {
      lines.push(`- **${row.year}** — ${row.title}: ${row.subtitle}`);
    }
    lines.push('');
  }

  // Reading & languages
  if (content.languages.length > 0 || content.books.length > 0) {
    lines.push(`## ${dict.sections.reading}`);
    lines.push('');
    if (content.languages.length > 0) {
      lines.push(`### ${dict.reading.languages}`);
      lines.push('');
      for (const lang of content.languages) {
        lines.push(`- ${lang.title}: ${lang.level}`);
      }
      lines.push('');
    }
    if (content.books.length > 0) {
      lines.push(`### ${dict.reading.books}`);
      lines.push('');
      for (const book of content.books) {
        lines.push(`- ${book.name} — ${book.author}`);
      }
      lines.push('');
    }
  }

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}
