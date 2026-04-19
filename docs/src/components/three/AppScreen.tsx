export default function AppScreen() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#050505',
      fontFamily: "'Geist Variable', 'Inter', system-ui, sans-serif",
      fontSize: '9px',
      color: 'rgba(255,255,255,0.85)',
      padding: '10px 8px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
        <span style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '-0.3px' }}>Keystone</span>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff88', display: 'inline-block' }} />
      </div>
      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>
        Dashboard
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '2px 0' }} />

      {/* Stats */}
      {[
        { label: 'Projects', value: '5', icon: '◈' },
        { label: 'Shipped', value: '✓', icon: '◉' },
        { label: 'Clients', value: '3', icon: '◎' },
      ].map(s => (
        <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>{s.icon}</span>
            {s.label}
          </span>
          <span style={{ fontWeight: 600, color: '#fff' }}>{s.value}</span>
        </div>
      ))}

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '2px 0' }} />

      {/* Revenue */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>Revenue</span>
        <span style={{ fontWeight: 600 }}>$4.2k</span>
      </div>

      {/* Progress bar */}
      <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 99, height: 3, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: '84%',
          background: 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.5) 100%)',
          borderRadius: 99,
          animation: 'grow 1.5s ease-out forwards',
        }} />
      </div>
      <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '8px', textAlign: 'right' }}>84% of target</div>

      <div style={{ flex: 1 }} />

      {/* CTA button */}
      <div style={{
        background: '#fff',
        color: '#000',
        textAlign: 'center',
        borderRadius: 99,
        padding: '5px 0',
        fontWeight: 600,
        fontSize: '8px',
        letterSpacing: '0.05em',
      }}>
        Start Build →
      </div>

      <style>{`
        @keyframes grow {
          from { width: 0%; }
          to { width: 84%; }
        }
      `}</style>
    </div>
  );
}
