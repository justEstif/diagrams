import type { Page, SlideMeta } from '@open-slide/core';

import bane from './assets/bane.jpg';
import batman from './assets/batman.jpg';
import gotham from './assets/gotham.png';
import greenArrow from './assets/green-arrow.jpg';
import joker from './assets/joker.jpg';

import {
  Bullet,
  CoinCard,
  colors,
  display,
  Eyebrow,
  fill,
  Footer,
  Portrait,
  Rule,
} from './components';

export { design, transition } from './components';

const Cover: Page = () => (
  <div style={fill}>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(circle at 78% 44%, rgba(255,210,28,0.13), transparent 25%), linear-gradient(115deg, transparent 62%, rgba(255,255,255,0.035) 62%, rgba(255,255,255,0.035) 63%, transparent 63%)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: -170,
        right: -110,
        width: 780,
        height: 780,
        border: '80px solid rgba(255,210,28,0.08)',
        borderRadius: '50%',
      }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '120px 140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Eyebrow>Power · restraint · responsibility</Eyebrow>
      <div>
        <h1
          style={{
            ...display,
            margin: 0,
            maxWidth: 1320,
            fontSize: 'var(--osd-size-hero)',
          }}
        >
          Batman’s
          <br />
          no-kill rule
        </h1>
        <div
          style={{
            marginTop: 34,
            display: 'flex',
            alignItems: 'center',
            gap: 28,
          }}
        >
          <span style={{ width: 120, height: 10, background: 'var(--osd-accent)' }} />
          <span style={{ fontSize: 42, color: colors.muted }}>Two sides of the coin</span>
        </div>
      </div>
      <div style={{ color: colors.muted, fontSize: 25 }}>A conversation, not a verdict</div>
    </div>
  </div>
);

const SimpleRule: Page = () => (
  <div style={{ ...fill, display: 'grid', gridTemplateColumns: '1.18fr 0.82fr' }}>
    <div
      style={{
        padding: '110px 100px 110px 130px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Eyebrow>The moral boundary</Eyebrow>
      <h2 style={{ ...display, margin: '34px 0 0', fontSize: 92 }}>The rule sounds simple.</h2>
      <blockquote
        style={{
          margin: '60px 0 0',
          paddingLeft: 34,
          borderLeft: '10px solid var(--osd-accent)',
          fontSize: 52,
          lineHeight: 1.2,
          fontWeight: 750,
        }}
      >
        “If I kill, I become like them.”
      </blockquote>
      <div
        style={{
          marginTop: 56,
          fontSize: 58,
          fontWeight: 800,
          lineHeight: 1.08,
          maxWidth: 780,
        }}
      >
        But who is the rule really for?
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 130,
      }}
    >
      <Portrait src={batman} alt="Batman standing in a dark costume" />
    </div>
    <Footer section="The boundary" />
  </div>
);

const WhoBenefits: Page = () => (
  <div style={{ ...fill, padding: '120px 140px' }}>
    <Eyebrow>Who benefits?</Eyebrow>
    <h2 style={{ ...display, margin: '30px 0 0', fontSize: 106 }}>Three possible answers.</h2>
    <div
      style={{
        marginTop: 74,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 34,
      }}
    >
      <div
        style={{
          background: colors.surface,
          padding: 46,
          borderRadius: 'var(--osd-radius)',
          borderBottom: '8px solid var(--osd-accent)',
        }}
      >
        <div
          style={{
            ...display,
            fontSize: 110,
            color: 'var(--osd-accent)',
            opacity: 0.35,
          }}
        >
          01
        </div>
        <div style={{ marginTop: 34, fontSize: 42, fontWeight: 750 }}>Gotham’s victims</div>
      </div>
      <div
        style={{
          background: colors.surface,
          padding: 46,
          borderRadius: 'var(--osd-radius)',
          borderBottom: `8px solid ${colors.muted}`,
        }}
      >
        <div
          style={{
            ...display,
            fontSize: 110,
            color: colors.muted,
            opacity: 0.35,
          }}
        >
          02
        </div>
        <div style={{ marginTop: 34, fontSize: 42, fontWeight: 750 }}>The criminals he fights</div>
      </div>
      <div
        style={{
          background: colors.surfaceHigh,
          padding: 46,
          borderRadius: 'var(--osd-radius)',
          borderBottom: `8px solid ${colors.red}`,
        }}
      >
        <div
          style={{
            ...display,
            fontSize: 110,
            color: colors.red,
            opacity: 0.45,
          }}
        >
          03
        </div>
        <div style={{ marginTop: 34, fontSize: 42, fontWeight: 750 }}>Batman himself</div>
      </div>
    </div>
    <Footer section="The boundary" />
  </div>
);

const JokerCycle: Page = () => (
  <div style={{ ...fill, display: 'grid', gridTemplateColumns: '0.78fr 1.22fr' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 120,
      }}
    >
      <Portrait src={joker} alt="The Joker in a purple suit" accent={colors.red} />
    </div>
    <div
      style={{
        padding: '110px 130px 110px 100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Eyebrow color={colors.red}>The recurring test</Eyebrow>
      <h2 style={{ ...display, margin: '30px 0 0', fontSize: 92 }}>The Joker makes it concrete.</h2>
      <div
        style={{
          marginTop: 55,
          display: 'flex',
          flexDirection: 'column',
          gap: 26,
        }}
      >
        <Bullet accent={colors.red}>He escapes.</Bullet>
        <Bullet accent={colors.red}>He kills again.</Bullet>
        <Bullet accent={colors.red}>Batman captures him alive.</Bullet>
        <Bullet accent={colors.red}>
          <strong>The cycle restarts.</strong>
        </Bullet>
      </div>
      <div
        style={{
          marginTop: 46,
          alignSelf: 'flex-start',
          background: colors.red,
          color: '#fff',
          padding: '16px 24px',
          fontSize: 34,
          fontWeight: 850,
        }}
      >
        ONE LIFE VS. HUNDREDS?
      </div>
    </div>
    <Footer section="The recurring test" />
  </div>
);

const JasonQuestion: Page = () => (
  <div style={{ ...fill, padding: '110px 140px' }}>
    <div
      style={{
        position: 'absolute',
        right: 90,
        top: 70,
        ...display,
        fontSize: 290,
        color: '#fff',
        opacity: 0.035,
        transform: 'rotate(-8deg)',
      }}
    >
      WHY?
    </div>
    <Eyebrow color={colors.red}>Under the Red Hood</Eyebrow>
    <h2 style={{ ...display, margin: '30px 0 0', fontSize: 98 }}>
      Jason asks the obvious question.
    </h2>
    <div
      style={{
        marginTop: 54,
        maxWidth: 1460,
        display: 'flex',
        flexDirection: 'column',
        gap: 23,
      }}
    >
      <Bullet accent={colors.red}>Batman knows exactly what the Joker will do.</Bullet>
      <Bullet accent={colors.red}>Batman has the power to end the cycle.</Bullet>
      <Bullet accent={colors.red}>By refusing, he makes everyone else pay for his line.</Bullet>
    </div>
    <div
      style={{
        marginTop: 54,
        padding: '30px 38px',
        background: colors.surface,
        borderLeft: '10px solid var(--osd-accent)',
        fontSize: 42,
        lineHeight: 1.25,
      }}
    >
      Bruce’s answer: killing would not be impossible. It would be{' '}
      <strong style={{ color: 'var(--osd-accent)' }}>too easy</strong>.
    </div>
    <Footer section="The obvious question" />
  </div>
);

const Leash: Page = () => (
  <div style={{ ...fill, padding: '105px 140px' }}>
    <Eyebrow>The rule as restraint</Eyebrow>
    <h2 style={{ ...display, margin: '28px 0 0', fontSize: 98 }}>The rule is a leash.</h2>
    <div
      style={{
        marginTop: 58,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 72,
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
        <Bullet>A private citizen</Bullet>
        <Bullet>Heavily armed and highly capable</Bullet>
        <Bullet>Outside courts and elections</Bullet>
        <Bullet>Certain he knows what Gotham needs</Bullet>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        <div
          style={{
            background: 'var(--osd-accent)',
            color: 'var(--osd-bg)',
            padding: '28px 34px',
            fontSize: 46,
            fontWeight: 900,
          }}
        >
          Batman may intervene.
        </div>
        <div
          style={{
            background: colors.redSoft,
            border: `3px solid ${colors.red}`,
            padding: '28px 34px',
            fontSize: 46,
            fontWeight: 900,
          }}
        >
          Batman may not own life and death.
        </div>
      </div>
    </div>
    <Footer section="The leash" />
  </div>
);

const Identity: Page = () => (
  <div
    style={{
      ...fill,
      padding: '110px 140px',
      background: `linear-gradient(135deg, ${colors.surface}, var(--osd-bg) 58%)`,
    }}
  >
    <Eyebrow>The psychological defense</Eyebrow>
    <h2 style={{ ...display, margin: '28px 0 0', fontSize: 96 }}>The rule protects an identity.</h2>
    <div
      style={{
        marginTop: 55,
        color: colors.muted,
        fontSize: 39,
        lineHeight: 1.5,
        maxWidth: 1450,
      }}
    >
      Batman will sacrifice his body, wealth, relationships, freedom—
      <span style={{ color: 'var(--osd-text)' }}>even his life</span>.
    </div>
    <div
      style={{
        marginTop: 68,
        maxWidth: 1400,
        fontSize: 72,
        lineHeight: 1.12,
        fontWeight: 880,
      }}
    >
      Dying is acceptable.
      <br />
      <span style={{ color: 'var(--osd-accent)' }}>Becoming someone who kills is not.</span>
    </div>
    <Rule />
    <Footer section="Identity" />
  </div>
);

const Ras: Page = () => (
  <div
    style={{
      ...fill,
      padding: '110px 140px',
      background: `radial-gradient(circle at 84% 20%, rgba(112,183,126,0.14), transparent 30%), var(--osd-bg)`,
    }}
  >
    <Eyebrow color={colors.green}>Ra’s al Ghul</Eyebrow>
    <h2 style={{ ...display, margin: '28px 0 0', fontSize: 94 }}>Sacrifice without restraint.</h2>
    <div
      style={{
        marginTop: 56,
        display: 'grid',
        gridTemplateColumns: '0.95fr 1.05fr',
        gap: 70,
      }}
    >
      <div
        style={{
          background: colors.greenSoft,
          borderTop: `10px solid ${colors.green}`,
          padding: '42px 46px',
        }}
      >
        <div
          style={{
            fontSize: 31,
            color: colors.green,
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Ra’s will sacrifice
        </div>
        <div
          style={{
            marginTop: 36,
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
          }}
        >
          <Bullet accent={colors.green}>His humanity and identity</Bullet>
          <Bullet accent={colors.green}>His body</Bullet>
          <Bullet accent={colors.green}>Entire populations</Bullet>
          <Bullet accent={colors.green}>Civilization itself</Bullet>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 53,
          fontWeight: 780,
          lineHeight: 1.25,
        }}
      >
        Restraint matters because total commitment can become{' '}
        <span style={{ color: colors.green }}>&nbsp;total control.</span>
      </div>
    </div>
    <Footer section="Total commitment" />
  </div>
);

const BaneAttack: Page = () => (
  <div
    style={{
      ...fill,
      display: 'grid',
      gridTemplateColumns: '0.78fr 1.22fr',
      background: `linear-gradient(120deg, ${colors.redSoft}, var(--osd-bg) 42%)`,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 120,
      }}
    >
      <Portrait src={bane} alt="Bane wearing his mask" accent={colors.red} />
    </div>
    <div
      style={{
        padding: '115px 130px 115px 100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Eyebrow color={colors.red}>Knightfall</Eyebrow>
      <h2 style={{ ...display, margin: '30px 0 0', fontSize: 94 }}>
        Bane finds the attack surface.
      </h2>
      <p
        style={{
          margin: '52px 0 0',
          fontSize: 44,
          lineHeight: 1.42,
          maxWidth: 880,
        }}
      >
        He does not defeat Batman’s morality. He weaponizes Batman’s willingness to suffer.
      </p>
      <div
        style={{
          marginTop: 52,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          color: colors.muted,
          fontSize: 31,
          fontWeight: 720,
        }}
      >
        <span>RELEASE THE ROGUES</span>
        <span style={{ color: colors.red }}>→</span>
        <span>FORCE RESCUES</span>
        <span style={{ color: colors.red }}>→</span>
        <span>WAIT</span>
      </div>
    </div>
    <Footer section="The attack surface" />
  </div>
);

const GothamSystem: Page = () => (
  <div style={{ ...fill, padding: '105px 130px' }}>
    <div
      style={{
        position: 'absolute',
        right: 115,
        top: 80,
        width: 500,
        height: 500,
        opacity: 0.18,
      }}
    >
      <img
        src={gotham}
        alt="Gotham City skyline at night"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
          filter: 'grayscale(1) contrast(1.25)',
        }}
      />
    </div>
    <Eyebrow>Beyond individual villains</Eyebrow>
    <h2 style={{ ...display, margin: '28px 0 0', fontSize: 98, maxWidth: 1120 }}>
      Gotham is the bigger villain.
    </h2>
    <div
      style={{
        marginTop: 58,
        maxWidth: 1120,
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
      }}
    >
      <Bullet>Corruption manufactures crime.</Bullet>
      <Bullet>Inequality manufactures desperation.</Bullet>
      <Bullet>Institutions recycle the same villains.</Bullet>
      <Bullet>Private violence cannot repair public systems.</Bullet>
    </div>
    <div
      style={{
        marginTop: 52,
        display: 'inline-block',
        background: 'var(--osd-accent)',
        color: 'var(--osd-bg)',
        padding: '18px 28px',
        fontSize: 37,
        fontWeight: 900,
      }}
    >
      YOU CANNOT MURDER YOUR WAY OUT OF A SYSTEM.
    </div>
    <Footer section="The system" />
  </div>
);

const GreenArrowContrast: Page = () => (
  <div
    style={{
      ...fill,
      display: 'grid',
      gridTemplateColumns: '0.78fr 1.22fr',
      background: `linear-gradient(120deg, ${colors.greenSoft}, var(--osd-bg) 42%)`,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 120,
      }}
    >
      <Portrait src={greenArrow} alt="Green Arrow holding his bow" accent={colors.green} />
    </div>
    <div
      style={{
        padding: '110px 130px 110px 100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Eyebrow color={colors.green}>A useful contrast</Eyebrow>
      <h2 style={{ ...display, margin: '30px 0 0', fontSize: 90 }}>
        Green Arrow believes rot can be removed.
      </h2>
      <div
        style={{
          marginTop: 54,
          display: 'flex',
          flexDirection: 'column',
          gap: 25,
        }}
      >
        <div
          style={{
            padding: '26px 32px',
            background: colors.surface,
            borderLeft: '9px solid var(--osd-accent)',
            fontSize: 42,
          }}
        >
          <strong>Batman:</strong> hold the line, forever.
        </div>
        <div
          style={{
            padding: '26px 32px',
            background: colors.greenSoft,
            borderLeft: `9px solid ${colors.green}`,
            fontSize: 42,
          }}
        >
          <strong>Green Arrow:</strong> expose, shame, reform.
        </div>
      </div>
      <p
        style={{
          margin: '48px 0 0',
          color: colors.muted,
          fontSize: 35,
          lineHeight: 1.4,
        }}
      >
        Bruce fears the person holding the knife becomes the next problem.
      </p>
    </div>
    <Footer section="A different response" />
  </div>
);

const TwoSides: Page = () => (
  <div style={{ ...fill, padding: '100px 130px' }}>
    <Eyebrow>The unresolved tension</Eyebrow>
    <h2 style={{ ...display, margin: '26px 0 0', fontSize: 92 }}>Two sides of the coin.</h2>
    <div style={{ marginTop: 54, display: 'flex', gap: 38 }}>
      <CoinCard title="Admirable">
        <Bullet>Limits an unaccountable vigilante</Bullet>
        <Bullet>Refuses execution as a shortcut</Bullet>
        <Bullet>Keeps Batman from becoming Ra’s</Bullet>
        <Bullet>Points toward systemic solutions</Bullet>
      </CoinCard>
      <CoinCard title="Troubling" accent={colors.red}>
        <Bullet accent={colors.red}>Others pay for Bruce’s boundary</Bullet>
        <Bullet accent={colors.red}>The Joker exposes its consequences</Bullet>
        <Bullet accent={colors.red}>Self-image may outrank public safety</Bullet>
        <Bullet accent={colors.red}>Sacrifice is not responsibility</Bullet>
      </CoinCard>
    </div>
    <Footer section="Two sides" />
  </div>
);

const Verdict: Page = () => (
  <div
    style={{
      ...fill,
      padding: '120px 140px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Eyebrow>So… is Batman right?</Eyebrow>
    <h2 style={{ ...display, margin: '38px 0 0', fontSize: 115, maxWidth: 1600 }}>
      A moral rule can protect others, restrain power, and defend the self—
      <span style={{ color: 'var(--osd-accent)' }}>all at once.</span>
    </h2>
    <div
      style={{
        marginTop: 62,
        paddingLeft: 34,
        borderLeft: `10px solid ${colors.red}`,
        color: colors.muted,
        fontSize: 45,
        lineHeight: 1.35,
        maxWidth: 1380,
      }}
    >
      The harder question is which purpose wins when they conflict.
    </div>
    <Footer section="No simple verdict" />
  </div>
);

const Conversation: Page = () => (
  <div style={{ ...fill, padding: '100px 130px' }}>
    <Eyebrow>Pick one</Eyebrow>
    <h2 style={{ ...display, margin: '26px 0 0', fontSize: 98 }}>Your turn.</h2>
    <div
      style={{
        marginTop: 52,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
      }}
    >
      <div
        style={{
          padding: '30px 34px',
          background: colors.surface,
          borderLeft: '8px solid var(--osd-accent)',
          fontSize: 32,
          lineHeight: 1.35,
        }}
      >
        <strong style={{ color: 'var(--osd-accent)' }}>01</strong>
        <br />
        Would you trust Batman more or less if he killed only the Joker?
      </div>
      <div
        style={{
          padding: '30px 34px',
          background: colors.surface,
          borderLeft: `8px solid ${colors.red}`,
          fontSize: 32,
          lineHeight: 1.35,
        }}
      >
        <strong style={{ color: colors.red }}>02</strong>
        <br />
        Is distrust of himself enough when others remain at risk?
      </div>
      <div
        style={{
          padding: '30px 34px',
          background: colors.surface,
          borderLeft: `8px solid ${colors.green}`,
          fontSize: 32,
          lineHeight: 1.35,
        }}
      >
        <strong style={{ color: colors.green }}>03</strong>
        <br />
        Does Bane prove Batman needs a rule about stopping?
      </div>
      <div
        style={{
          padding: '30px 34px',
          background: colors.surface,
          borderLeft: `8px solid ${colors.muted}`,
          fontSize: 32,
          lineHeight: 1.35,
        }}
      >
        <strong style={{ color: colors.muted }}>04</strong>
        <br />
        If Gotham is the villain, what does justice look like?
      </div>
    </div>
    <Footer section="Conversation" />
  </div>
);

const Credits: Page = () => (
  <div
    style={{
      ...fill,
      padding: '120px 140px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Eyebrow>Credits & context</Eyebrow>
    <h2 style={{ ...display, margin: '30px 0 0', fontSize: 90 }}>
      Stories built to test the rule.
    </h2>
    <div
      style={{
        marginTop: 58,
        maxWidth: 1450,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        color: colors.muted,
        fontSize: 34,
        lineHeight: 1.42,
      }}
    >
      <div>
        <strong style={{ color: 'var(--osd-text)' }}>Batman:</strong> created by Bob Kane and Bill
        Finger.
      </div>
      <div>
        <strong style={{ color: 'var(--osd-text)' }}>Ra’s al Ghul:</strong> created by Denny O’Neil,
        Neal Adams, and Julius Schwartz.
      </div>
      <div>
        <strong style={{ color: 'var(--osd-text)' }}>Character portraits:</strong> DC.com.
      </div>
      <div>
        <strong style={{ color: 'var(--osd-text)' }}>Gotham image:</strong> DC Comics, sourced
        through Wikimedia Commons.
      </div>
      <div>
        <strong style={{ color: 'var(--osd-text)' }}>Discussion:</strong> adapted from the
        accompanying nb-vault note.
      </div>
    </div>
    <Rule />
  </div>
);

export const meta: SlideMeta = {
  title: 'Batman’s No-Kill Rule: Two Sides of the Coin',
  createdAt: '2026-09-11T17:03:32.355Z',
};

export const notes: (string | undefined)[] = [
  'Open by framing this as a conversation about power, restraint, and responsibility—not a trivia quiz or final verdict.',
  'Begin with the familiar explanation, then redirect attention toward the rule’s intended beneficiary.',
  'Invite the audience to hold all three answers in mind. The deck will test each one.',
  'The utilitarian case appears strongest with the Joker: one death seems capable of preventing hundreds.',
  'Jason reframes inaction as a decision with victims. Bruce reframes killing as a path he cannot trust himself to walk.',
  'The rule is not only compassion. It is a constraint on unaccountable power.',
  'This is the psychological defense: the rule preserves Bruce’s identity as rescuer rather than executioner.',
  'Ra’s treats willingness to sacrifice as proof of conviction. Batman suggests restraint is the more important test.',
  'Bane proves that sacrifice without limits is predictable and exploitable.',
  'If Gotham is the disease, individual villains are symptoms. The rule admits the limits of vigilantism.',
  'The cities shape their ethics: Gotham is cyclical; Star City is political and potentially fixable.',
  'Both readings remain credible. That tension is why the rule continues to generate stories.',
  'Do not force a verdict. Clarify what is actually in conflict.',
  'Use one question at a time. Let the conversation choose the next thread.',
  'Close with context and attribution. The characters function as fictional tests of Batman’s mission.',
];

export default [
  Cover,
  SimpleRule,
  WhoBenefits,
  JokerCycle,
  JasonQuestion,
  Leash,
  Identity,
  Ras,
  BaneAttack,
  GothamSystem,
  GreenArrowContrast,
  TwoSides,
  Verdict,
  Conversation,
  Credits,
] satisfies Page[];
