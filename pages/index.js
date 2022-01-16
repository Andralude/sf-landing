import Head from 'next/head'
import { useTranslation } from "next-export-i18n";

import { data } from "../data.js";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Step from '../components/Step';
import BottomLead from '../components/BottomLead';
import Footer from '../components/Footer';


export default function Home() {
  const { t } = useTranslation();
  return (
    
    <div>
      <Head>
        <title>Secret Friend</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        
        {/* Font */}
        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"/> 
        
        {/* Fix for mobile */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="box-border">
        <div className="flex flex-col">

          <Navbar logo="/assets/logo.png" />
          <section id="hero">
            <Hero
              appType={t("hero.appType")}
              tagLine={t("hero.tagLine")}
              description={t("hero.description")}
              playStoreLink={data.links.playStore}
              loginLink={data.links.login}
              appStoreLink={data.links.appStore}
            />
          </section>

          <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto"></div>
          <section id="concept">
            
          <div className="pt-20 mb-20 text-3xl font-semibold text-center text-slate-800 lg:font-bold">
            {t("concept.title")}
          </div>

            <ul className="mx-auto pb-16 text-2xl w-2/3 lg:w-1/2" style={{ listStyleType: "'★ '" }}>
              <li className="pb-4 text-center titlefont">
                {t("concept.desc1")}
              </li>
              <li className='text-center titlefont'>
                {t("concept.desc2")}
              </li>
            </ul>

            <div className='container flex flex-wrap justify-center mx-4 w-10/12 rounded-full bg-white max-width-xl pb-20 gap-8 md:mx-auto'>
              <div className='max-w-sm bg-white shadow-lg rounded-xl grid items-center gap-6 p-2 w-96'>
                <img className='mx-auto' src="/assets/gift.png" width="90" height="90" />
                <p className='text-center mx-auto font-bold text-secondary-500 titlefont whitespace-pre-line'>{t("concept.protege")}</p>
              </div>
              <div className='max-w-sm bg-white shadow-lg rounded-xl grid items-center gap-6 p-2 w-96'>
                <img className='mx-auto' src="/assets/wings.png" width="180" height="90" />
                <p className='text-center mx-auto font-bold text-secondary-500 titlefont whitespace-pre-line'>{t("concept.angel")}</p>
              </div>
            </div>
          </section>

          <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto mb-8"></div>

          <section id="steps">
            <Step
              title={t("step1.title")}
              heading={t("step1.heading")}
              description={t("step1.description")}
              img={data.step1.img}
              alternate={data.step1.alternate}
            />
            <Step
              title={t("step2.title")}
              heading={t("step2.heading")}
              description={t("step2.description")}
              img={data.step2.img}
              alternate={data.step2.alternate}
            />
            <Step
              title={t("step3.title")}
              heading={t("step3.heading")}
              description={t("step3.description")}
              img={data.step3.img}
              alternate={data.step3.alternate}
            />

          </section>

          <section id="bottomLead">
            <BottomLead
              actionText={t("bottomLead.actionText")}
              description={t("bottomLead.description")}
              playStoreLink={data.links.playStore}
              loginLink={data.links.login}
              appStoreLink={data.links.appStore}
            />
          </section>

          <section id="footer">
            <Footer logo="/assets/logo.png" />
          </section>
        </div>
      </div>
    </div>
  );
}
