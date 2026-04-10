import React from 'react';
import { Slide } from '@/data/slides';

interface Props {
  slide: Slide;
}

// Simple keyword highlighter for bullet text (bold + code)
function renderBullet(text: string) {
  // Process **bold** and `code`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="bg-muted text-accent px-1.5 py-0.5 rounded text-[0.88em] font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// Syntax highlighting for HTML code
function highlightHtml(code: string): React.ReactNode[] {
  const lines = code.split('\n');
  return lines.map((line, lineIdx) => {
    // Tokenize the line
    const tokens: { type: string; text: string }[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      // HTML comment
      const commentMatch = remaining.match(/^(<!--[\s\S]*?-->)/);
      if (commentMatch) { tokens.push({ type: 'comment', text: commentMatch[1] }); remaining = remaining.slice(commentMatch[1].length); continue; }

      // Closing tag
      const closeTagMatch = remaining.match(/^(<\/[a-zA-Z][a-zA-Z0-9]*>)/);
      if (closeTagMatch) { tokens.push({ type: 'tag', text: closeTagMatch[1] }); remaining = remaining.slice(closeTagMatch[1].length); continue; }

      // Opening/self-closing tag start
      const openTagMatch = remaining.match(/^(<[a-zA-Z!][a-zA-Z0-9!]*)/);
      if (openTagMatch) {
        tokens.push({ type: 'tag', text: openTagMatch[1] });
        remaining = remaining.slice(openTagMatch[1].length);

        // Consume attributes until > or />
        while (remaining.length > 0 && !remaining.startsWith('>') && !remaining.startsWith('/>')) {
          // Attribute name
          const attrMatch = remaining.match(/^(\s+[a-zA-Z_:][a-zA-Z0-9_\-.:]*)/);
          if (attrMatch) { tokens.push({ type: 'attr', text: attrMatch[1] }); remaining = remaining.slice(attrMatch[1].length); continue; }
          // = sign
          const eqMatch = remaining.match(/^(=)/);
          if (eqMatch) { tokens.push({ type: 'punct', text: '=' }); remaining = remaining.slice(1); continue; }
          // Quoted value
          const valMatch = remaining.match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
          if (valMatch) { tokens.push({ type: 'value', text: valMatch[1] }); remaining = remaining.slice(valMatch[1].length); continue; }
          // anything else until space or >
          const otherMatch = remaining.match(/^([^\s>/="']+)/);
          if (otherMatch) { tokens.push({ type: 'plain', text: otherMatch[1] }); remaining = remaining.slice(otherMatch[1].length); continue; }
          // fallback single char
          tokens.push({ type: 'plain', text: remaining[0] }); remaining = remaining.slice(1);
        }
        // closing bracket
        if (remaining.startsWith('/>')) { tokens.push({ type: 'tag', text: '/>' }); remaining = remaining.slice(2); }
        else if (remaining.startsWith('>')) { tokens.push({ type: 'tag', text: '>' }); remaining = remaining.slice(1); }
        continue;
      }

      // Plain text
      const plainMatch = remaining.match(/^([^<]+)/);
      if (plainMatch) { tokens.push({ type: 'text', text: plainMatch[1] }); remaining = remaining.slice(plainMatch[1].length); continue; }

      // fallback
      tokens.push({ type: 'plain', text: remaining[0] }); remaining = remaining.slice(1);
    }

    const colorMap: Record<string, string> = {
      comment: 'text-muted-foreground italic',
      tag: 'text-accent font-medium',
      attr: 'text-chart-4',
      value: 'text-chart-2',
      text: 'text-foreground',
      punct: 'text-muted-foreground',
      plain: 'text-foreground',
    };

    return (
      <div key={lineIdx} className="leading-6">
        {tokens.map((token, i) => (
          <span key={i} className={colorMap[token.type] || 'text-foreground'}>
            {token.text}
          </span>
        ))}
        {tokens.length === 0 && <span>&nbsp;</span>}
      </div>
    );
  });
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-border/60 shadow-lg">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-muted/80 border-b border-border/40">
        <span className="w-3 h-3 rounded-full bg-destructive/70" />
        <span className="w-3 h-3 rounded-full bg-chart-4/70" />
        <span className="w-3 h-3 rounded-full bg-accent/70" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">index.html</span>
      </div>
      <pre className="p-5 overflow-x-auto bg-muted/40 text-sm font-mono leading-relaxed">
        {highlightHtml(code)}
      </pre>
    </div>
  );
}

function Callout({ kind, text }: { kind: 'tip' | 'mistake'; text: string }) {
  if (kind === 'tip') {
    return (
      <div className="mt-4 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3">
        <span className="text-xl mt-0.5 shrink-0">💡</span>
        <div>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Quick Tip</span>
          <p className="mt-0.5 text-sm text-foreground/85 leading-relaxed">{text}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-4 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3">
      <span className="text-xl mt-0.5 shrink-0">⚠️</span>
      <div>
        <span className="text-destructive font-semibold text-sm uppercase tracking-wider">Common Mistake</span>
        <p className="mt-0.5 text-sm text-foreground/85 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul className="space-y-2.5 mt-4">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-3 text-base text-foreground/90 leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <span>{renderBullet(b)}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Individual Slide Layouts ──────────────────────────────────────────────

function TitleSlide({ slide }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-12 py-10">
      {slide.badge && (
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
          {slide.badge}
        </span>
      )}
      <h1 className="text-7xl font-black tracking-tight text-foreground leading-none">
        {slide.title}
      </h1>
      {slide.subtitle && (
        <h2 className="mt-3 text-3xl font-semibold text-primary">{slide.subtitle}</h2>
      )}
      {slide.bullets && (
        <ul className="mt-8 flex flex-col items-center gap-2.5 text-lg text-muted-foreground">
          {slide.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {b}
            </li>
          ))}
        </ul>
      )}
      <div className="absolute bottom-8 right-10 text-xs text-muted-foreground font-mono opacity-50">
        HTML Bootcamp
      </div>
    </div>
  );
}

function GoalsSlide({ slide }: Props) {
  return (
    <div className="flex flex-col h-full px-12 py-10">
      <div className="mb-2">
        <span className="text-xs uppercase tracking-widest text-accent font-semibold">Learning Goals</span>
      </div>
      <h2 className="text-4xl font-bold text-foreground leading-tight">{slide.title}</h2>
      <div className="mt-6 flex-1">
        {slide.bullets && (
          <ul className="space-y-4">
            {slide.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary font-bold text-sm shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-lg text-foreground/90 leading-relaxed">{renderBullet(b)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ConceptSlide({ slide }: Props) {
  return (
    <div className="flex flex-col h-full px-12 py-10">
      <div className="mb-2">
        <span className="text-xs uppercase tracking-widest text-accent font-semibold">Concept</span>
      </div>
      <h2 className="text-4xl font-bold text-foreground leading-tight">{slide.title}</h2>
      {slide.analogy && (
        <div className="mt-4 rounded-xl border border-primary/25 bg-primary/8 px-4 py-3">
          <p className="text-base text-foreground/85 leading-relaxed italic">{slide.analogy}</p>
        </div>
      )}
      {slide.bullets && <BulletList bullets={slide.bullets} />}
      {slide.callout && <Callout kind={slide.callout.kind} text={slide.callout.text} />}
    </div>
  );
}

function CodeSlide({ slide }: Props) {
  return (
    <div className="flex flex-col h-full px-12 py-8 gap-4">
      <div>
        <span className="text-xs uppercase tracking-widest text-accent font-semibold">Code Example</span>
        <h2 className="text-3xl font-bold text-foreground mt-1">{slide.title}</h2>
      </div>
      <div className="flex gap-6 flex-1 min-h-0">
        <div className="flex-1 min-h-0 overflow-auto">
          {slide.code && <CodeBlock code={slide.code} />}
        </div>
        {slide.bullets && (
          <div className="w-64 shrink-0">
            <ul className="space-y-2.5">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{renderBullet(b)}</span>
                </li>
              ))}
            </ul>
            {slide.callout && <Callout kind={slide.callout.kind} text={slide.callout.text} />}
          </div>
        )}
      </div>
    </div>
  );
}

function ActivitySlide({ slide }: Props) {
  return (
    <div className="flex flex-col h-full px-12 py-10 gap-4">
      <div>
        <span className="text-xs uppercase tracking-widest text-primary font-semibold">Hands-On Practice</span>
        <h2 className="text-4xl font-bold text-foreground mt-1">{slide.title}</h2>
      </div>
      {slide.activity && (
        <>
          <p className="text-base text-primary font-medium">{slide.activity.prompt}</p>
          <ol className="space-y-2.5 flex-1">
            {slide.activity.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-foreground/90 leading-relaxed">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary font-bold text-sm shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{renderBullet(step)}</span>
              </li>
            ))}
          </ol>
        </>
      )}
      {slide.callout && <Callout kind={slide.callout.kind} text={slide.callout.text} />}
      {slide.preview && (
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground border-t border-border/40 pt-3">
          <span className="text-accent">→</span>
          <span>{slide.preview}</span>
        </div>
      )}
    </div>
  );
}

// ─── Speaker Notes ─────────────────────────────────────────────────────────

function SpeakerNotes({ notes }: { notes: string }) {
  return (
    <div className="mx-12 mb-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-base">🎤</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Speaker Notes</span>
      </div>
      <p className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">{notes}</p>
    </div>
  );
}

// ─── Main Dispatcher ───────────────────────────────────────────────────────

export default function SlideRenderer({ slide }: Props) {
  let content: React.ReactNode;
  switch (slide.type) {
    case 'title': content = <TitleSlide slide={slide} />; break;
    case 'goals': content = <GoalsSlide slide={slide} />; break;
    case 'activity': content = <ActivitySlide slide={slide} />; break;
    case 'code': content = <CodeSlide slide={slide} />; break;
    default: content = <ConceptSlide slide={slide} />; break;
  }
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 min-h-0 overflow-y-auto">
        {content}
      </div>
      {slide.speakerNotes && <SpeakerNotes notes={slide.speakerNotes} />}
    </div>
  );
}
