
import dicts from '@/app/i18n.json';
import ServiceHeader from '@/components/ServiceHeader';

const DATA = (d)=>({ 
  'gestion-de-patrimoine': { title: d.svc_wm_title, subtitle: d.wealth_sub, bullets: d.wealth_bullets },
  'asset-management': { title: d.svc_am_title, subtitle: d.am_sub, bullets: d.am_bullets },
  'immobilier': { title: d.svc_re_title, subtitle: d.re_sub, bullets: d.re_bullets },
  'capital-a-risque': { title: d.svc_alt_title, subtitle: d.alt_sub, bullets: d.alt_bullets, risk: d.alt_risk }
});

export default function Page({ params, searchParams }){
  const lang = searchParams?.lang === 'en' ? 'en' : 'fr';
  const d = dicts[lang];
  const copy = DATA(d)[params.slug];
  if (!copy) return <div className='container py-20'>Not found</div>;
  return (
    <main className='container py-10 md:py-16'>
      <ServiceHeader title={copy.title} subtitle={copy.subtitle} />
      <div className='grid md:grid-cols-3 gap-6 mt-10'>
        {copy.bullets.map((b,i)=>(
          <div key={i} className='card'><div className='text-white font-medium'>{b}</div></div>
        ))}
      </div>
      {params.slug==='capital-a-risque' && copy.risk && (
        <div className='mt-8 text-sm text-white/70'>{copy.risk}</div>
      )}
      <div className='mt-10 border-t border-white/10 pt-6 text-sm text-white/60'>
        UBS · HSBC · CREDIT SUISSE · Bitcoin · Ethereum — <span className='text-white/40'>{d.disclaimer}</span>
      </div>
    </main>
  );
}
