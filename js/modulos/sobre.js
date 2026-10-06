/* ===================== SOBRE A THREEBYTES ===================== */
const EQUIPE_THREEBYTES = [
  { nome: 'Pablo Neris Santiago',    cargo: 'CEO · Product Owner',            desc: 'Visão de produto e direção da empresa' },
  { nome: 'Danillo Fernandes Gomes', cargo: 'CTO · Desenvolvedor Full Stack', desc: 'Arquitetura e desenvolvimento' },
  { nome: 'Daniel Baldini',          cargo: 'COO · Qualidade e Projetos',     desc: 'Gestão de projetos e garantia de qualidade' },
];

RENDERERS.sobre = function (c) {
  c.innerHTML = '';
  const hero = div(c, 'tb-hero');
  hero.innerHTML = `
    <div class="tb-hero-top">
      <img src="assets/img/logo.svg" alt="">
      <div><div class="tb-tag">Technology</div><h1>ThreeBytes</h1></div>
    </div>
    <p>“Do problema à solução, através da tecnologia.”</p>`;

  const t1 = div(c, ''); t1.innerHTML = '<h2 class="tb-section-title">Equipe</h2>';
  const team = div(c, 'tb-team');
  team.innerHTML = EQUIPE_THREEBYTES.map(p => {
    const ini = p.nome.split(' ').filter(Boolean);
    const sigla = (ini[0][0] + ini[ini.length - 1][0]).toUpperCase();
    return `<div class="tb-member"><div class="tb-avatar">${sigla}</div><div>
      <h3>${esc(p.nome)}</h3><div class="tb-role">${esc(p.cargo)}</div><div class="tb-desc">${esc(p.desc)}</div></div></div>`;
  }).join('');

  const t2 = div(c, ''); t2.innerHTML = '<h2 class="tb-section-title">Sobre este projeto</h2>';
  const b = div(c, 'tb-block');
  b.innerHTML = `ERP do ciclo de suprimentos de ponta a ponta — requisição, liberação de verba, cotação, pedido de compra,
    recebimento, nota fiscal e contas a pagar — com controle de acesso por perfil e indicadores por área e centro de custo.
    Feito em HTML, CSS e JavaScript puro, sem framework e sem dependências.
    <div class="tb-chips"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>localStorage</span><span>RBAC por perfil</span></div>`;
};

document.getElementById('tb-credit').addEventListener('click', () => { state = { modulo: 'sobre' }; renderAll(); });
