export default function AppScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#030308', overflow: 'hidden', position: 'relative' }}>
      <img
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&q=80&auto=format&fit=crop"
        alt="App UI"
        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '10px 8px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', opacity: 0.9 }} />
          <span style={{ fontFamily: 'sans-serif', fontSize: '6px', color: '#fff', opacity: 0.9, fontWeight: 600 }}>Keystone</span>
        </div>
        <div style={{ fontFamily: 'sans-serif', fontSize: '5px', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
          keystonesoftware.dev
        </div>
      </div>
    </div>
  );
}
