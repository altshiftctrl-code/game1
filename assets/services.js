const SERVICES = [
  {
    icon: '📈',
    name: 'Sector Nexus',
    desc: 'セクター分析を軸にしたトレード支援アプリ。市場の流れを可視化し、投資判断をサポートします。リアルタイムデータをもとに、自分だけの分析環境を構築できます。',
    status: 'dev',
    href: '#'
  },
  {
    icon: '🎵',
    name: 'Sound Studio',
    desc: '誰でも直感的に音楽制作を楽しめるWebアプリ。作曲・編曲からシェアまでをワンストップで。専門知識がなくても、アイデアをすぐに形にできます。',
    status: 'dev',
    href: '#'
  },
  {
    icon: '📚',
    name: 'Book Store',
    desc: '厳選された書籍をオンラインで購入できるブックストア。技術書・ビジネス書を中心に、知識を深めるための一冊を見つけられます。',
    status: 'dev',
    href: '#'
  }
];

const BADGE_LABELS = { dev: 'In Development' };

function renderServices(containerId, { placeholder = false } = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = SERVICES.map(s => `
    <a class="service-card" href="${s.href}">
      <div class="service-icon">${s.icon}</div>
      <div class="service-name">${s.name}</div>
      <p class="service-desc">${s.desc}</p>
      <span class="badge badge-${s.status}">${BADGE_LABELS[s.status]}</span>
    </a>`).join('') + (placeholder ? `
    <div class="service-card placeholder">
      <span style="font-size:22px;">＋</span>
      <span>More coming soon</span>
    </div>` : '');
}
