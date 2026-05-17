export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          For Restaurant Owners &amp; Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Throwing Money<br />in the Trash
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Photograph food waste daily. WasteLens uses AI to estimate costs, track patterns by menu item, and recommend portion adjustments — so you keep more profit.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Saving — $16/mo
        </a>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📸</div>
            <h3 className="font-semibold text-white mb-1">Photo Waste Logging</h3>
            <p className="text-sm text-[#8b949e]">Staff snap a photo of waste. AI identifies items and estimates quantities instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-white mb-1">Real Cost Estimates</h3>
            <p className="text-sm text-[#8b949e]">Matches waste to your menu pricing data to calculate exact dollar losses per item.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Actionable Analytics</h3>
            <p className="text-sm text-[#8b949e]">Daily and weekly dashboards surface which dishes waste most and suggest portion fixes.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li>✓ Unlimited photo waste logs</li>
            <li>✓ AI cost estimation engine</li>
            <li>✓ Daily &amp; weekly analytics</li>
            <li>✓ Per-menu-item waste reports</li>
            <li>✓ Portion adjustment recommendations</li>
            <li>✓ Up to 5 staff accounts</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the photo analysis work?</h3>
            <p className="text-sm text-[#8b949e]">Staff photograph waste at the end of service. Our AI identifies food items, estimates weight and quantity, then cross-references your menu pricing to calculate the dollar cost of each waste event.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need special hardware or equipment?</h3>
            <p className="text-sm text-[#8b949e]">No. Any smartphone camera works. Staff log in via browser — no app download required. Setup takes under 10 minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How quickly will I see cost savings?</h3>
            <p className="text-sm text-[#8b949e]">Most restaurants identify their top 3 waste culprits within the first week. Portion adjustments based on the data typically reduce food costs by 8–15% within 30 days.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} WasteLens. All rights reserved.
      </footer>
    </main>
  )
}
