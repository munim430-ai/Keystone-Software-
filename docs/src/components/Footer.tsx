export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-black rotate-45" />
              </div>
              <span className="text-xl font-display font-medium tracking-tighter text-white">KEYSTONE</span>
            </div>
            <p className="text-white/40 max-w-sm font-light leading-relaxed">
              Architecting intelligent systems for the next generation of digital infrastructure. Based in the future of software.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Work', 'About', 'Careers'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">hello@keystone.io</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <p className="text-xs text-white/20 uppercase tracking-widest">
            © 2026 Keystone Software Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs text-white/20 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/20 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
