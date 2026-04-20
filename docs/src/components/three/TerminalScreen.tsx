export default function TerminalScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#050508', overflow: 'hidden', position: 'relative' }}>
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80&auto=format&fit=crop"
        alt="Code"
        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(5,5,20,0.55) 0%, transparent 60%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '10px 12px',
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: '7px', color: '#00ff88', lineHeight: 1.6, opacity: 0.9 }}>
          <div>$ npm run build</div>
          <div style={{ color: 'rgba(255,255,255,0.5)' }}>✓ built in 8.93s</div>
          <div>$ git push origin main</div>
          <div style={{ color: 'rgba(255,255,255,0.5)' }}>✓ Live: keystonesoftware.dev</div>
        </div>
      </div>
    </div>
  );
}
