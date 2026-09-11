import type { DesignSystem, SlideTransition } from '@open-slide/core';
import type { ReactNode } from 'react';

export const design: DesignSystem = {
  palette: {
    bg: '#080a0d',
    text: '#f4f0e6',
    accent: '#ffd21c',
  },
  fonts: {
    display: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  typeScale: {
    hero: 176,
    body: 40,
  },
  radius: 18,
};

export const colors = {
  surface: '#12161c',
  surfaceHigh: '#1a2028',
  muted: '#9aa3ad',
  red: '#e5484d',
  redSoft: '#36171b',
  green: '#70b77e',
  greenSoft: '#13291a',
  line: 'rgba(244,240,230,0.16)',
};

export const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative' as const,
  overflow: 'hidden',
};

export const display = {
  fontFamily: 'var(--osd-font-display)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.015em',
  lineHeight: 0.94,
};

const transitionEaseOut = 'cubic-bezier(0, 0, 0.2, 1)';
const transitionEaseIn = 'cubic-bezier(0.4, 0, 1, 1)';

export const transition: SlideTransition = {
  duration: 220,
  exit: {
    duration: 150,
    easing: transitionEaseIn,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-4px)' },
    ],
  },
  enter: {
    duration: 220,
    delay: 80,
    easing: transitionEaseOut,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

export const Eyebrow = ({
  children,
  color = 'var(--osd-accent)',
}: {
  children: ReactNode;
  color?: string;
}) => (
  <div
    style={{
      color,
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '0.19em',
      textTransform: 'uppercase',
    }}
  >
    {children}
  </div>
);

export const Rule = ({
  color = 'var(--osd-accent)',
  width = 110,
}: {
  color?: string;
  width?: number;
}) => <div style={{ width, height: 10, background: color, marginTop: 30 }} />;

export const Footer = ({ section }: { section: string }) => (
  <div
    style={{
      position: 'absolute',
      left: 120,
      right: 120,
      bottom: 48,
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      color: colors.muted,
      fontSize: 22,
      letterSpacing: '0.05em',
    }}
  >
    <span style={{ width: 42, height: 4, background: 'var(--osd-accent)' }} />
    Batman’s No-Kill Rule
    <span style={{ opacity: 0.45 }}>·</span>
    {section}
  </div>
);

export const Portrait = ({
  src,
  alt,
  accent = 'var(--osd-accent)',
}: {
  src: string;
  alt: string;
  accent?: string;
}) => (
  <div style={{ position: 'relative', width: 500, height: 650 }}>
    <div
      style={{
        position: 'absolute',
        inset: '36px -36px -36px 36px',
        borderRadius: 'var(--osd-radius)',
        background: accent,
        opacity: 0.22,
      }}
    />
    <img
      src={src}
      alt={alt}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center top',
        borderRadius: 'var(--osd-radius)',
        border: `3px solid ${colors.line}`,
        filter: 'contrast(1.08) saturate(0.8)',
      }}
    />
  </div>
);

export const Bullet = ({
  children,
  accent = 'var(--osd-accent)',
}: {
  children: ReactNode;
  accent?: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 24,
      fontSize: 38,
      lineHeight: 1.38,
    }}
  >
    <span
      style={{
        width: 13,
        height: 13,
        marginTop: 19,
        flex: '0 0 auto',
        background: accent,
      }}
    />
    <span>{children}</span>
  </div>
);

export const CoinCard = ({
  title,
  children,
  accent = 'var(--osd-accent)',
}: {
  title: string;
  children: ReactNode;
  accent?: string;
}) => (
  <div
    style={{
      flex: 1,
      minHeight: 470,
      padding: '58px 56px',
      background: colors.surface,
      borderTop: `12px solid ${accent}`,
      borderRadius: '0 0 var(--osd-radius) var(--osd-radius)',
    }}
  >
    <h3 style={{ ...display, margin: 0, color: accent, fontSize: 58 }}>{title}</h3>
    <div
      style={{
        marginTop: 42,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}
    >
      {children}
    </div>
  </div>
);
