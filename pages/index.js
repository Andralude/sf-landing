import Head from 'next/head'

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Step from '../components/Step';
import BottomLead from '../components/BottomLead';
import Footer from '../components/Footer';

export default function Home() {
  const data = {
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.hevelmc.secret_friend_flutter',
      login: 'https://app.secretfriend.fr',
      appStore: 'https://apps.apple.com/us/app/secretfriend/id1590651048'
    },
    hero: {
      appType: 'SECRET-FRIEND',
      tagLine: 'REMETTRE L’HUMAIN AU CENTRE DE VOTRE ENTREPRISE',
      description: '‟ Utilisez SecretFriend et encouragez les actes bienveillants entre collaborateurs ”',
    },
    bottomLead: {
      actionText: "Téléchargez l'application dès maintenant",
      description: 'Disponible dans votre store préféré ou bien en ligne',
    },
  }

  return (
    <div>
      <Head>
        <title>Secret Friend</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <div className="box-border">
        <div className="flex flex-col">

          <Navbar logo="/assets/logo.png" />
          <Hero
            appType={data.hero.appType}
            tagLine={data.hero.tagLine}
            description={data.hero.description}
            playStoreLink={data.links.playStore}
            loginLink={data.links.login}
            appStoreLink={data.links.appStore}
          />

          <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>

          <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-slate-800 lg:font-bold">Notre concept</div>
          <ul className="mx-auto pb-16 text-2xl w-2/3 lg:w-1/2" style={{ listStyleType: "'★ '" }}>
            <li className="pb-4 text-center">
              Notre solution invite les collaborateurs à activer la bienveillance qui sommeille en eux et à la manifester par des actes prévenants.
            </li>
            <li className='text-center'>
              SECRET FRIEND libère les freins à la bienveillance par des encouragements dynamiques, ludiques et variés.
            </li>
          </ul>

          <div className='container flex flex-wrap justify-center mx-auto rounded-full bg-white max-width-xl pb-20 gap-8'>
            <div className='max-w-sm bg-white shadow-lg rounded-xl grid items-center gap-6 p-2'>
              <img className='mx-auto stroke-secondary-500' src="/assets/wings.svg" width="180" height="90" />
              <p className='text-center w-64 mx-auto font-bold text-secondary-500'>Chaque participant est choyé par un « Ange Gardien »</p>
            </div>
            <div className='max-w-sm bg-white shadow-lg rounded-xl grid items-center gap-6 p-2'>
              <img className='mx-auto fill-secondary-500' src="/assets/shield.svg" width="90" height="90" />
              <p className='text-center w-64 mx-auto font-bold text-secondary-500'>Il est en même temps l'Ange Gardien de quelqu'un d'autre</p>
            </div>
          </div>

          <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>

          <BottomLead
            actionText={data.bottomLead.actionText}
            description={data.bottomLead.description}
            playStoreLink={data.links.playStore}
            loginLink={data.links.login}
            appStoreLink={data.links.appStore}
          />

          <Footer logo="/assets/logo.png" />
        </div>
      </div>
    </div>
  );
}
