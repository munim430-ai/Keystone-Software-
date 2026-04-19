export default function TerminalScreen() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#0a0a0a',
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: '11px',
      padding: '12px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '2px',
    }}>
      {/* Scanline overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Title bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 8, fontSize: '10px' }}>keystone — studio</span>
      </div>

      {/* Terminal lines */}
      <div style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7' }}>
        <div>
          <span style={{ color: '#00ff88' }}>keystone</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>@studio</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}> ~ </span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>$ npm run build</span>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.35)', paddingLeft: '2px' }}>
          <div>vite v6.4.1 building for production...</div>
          <div><span style={{ color: '#00ff88' }}>✓</span> 2089 modules transformed.</div>
          <div><span style={{ color: '#00ff88' }}>✓</span> built in 8.93s</div>
        </div>

        <div style={{ marginTop: '6px' }}>
          <span style={{ color: '#00ff88' }}>keystone</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>@studio</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}> ~ </span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>$ git push origin main</span>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.35)', paddingLeft: '2px' }}>
          <div><span style={{ color: '#60a5fa' }}>→</span> Deploying to GitHub Pages...</div>
          <div><span style={{ color: '#00ff88' }}>✓</span> Live: keystonesoftware.dev</div>
        </div>

        <div style={{ marginTop: '6px' }}>
          <span style={{ color: '#00ff88' }}>keystone</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>@studio</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}> ~ </span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>$ </span>
          <span style={{
            display: 'inline-block',
            width: '6px',
            height: '12px',
            background: '#00ff88',
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
