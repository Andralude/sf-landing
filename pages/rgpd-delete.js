import Head from "next/head";
import { useTranslation } from "next-export-i18n";

export default function RGPDDelete() {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>Secret Friend</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>

      <div className="bg-gray-50 text-gray-800 font-sans leading-normal">
        <header className="text-center p-6 bg-gray-500 text-white">
          <h1 className="text-3xl font-bold mb-2">{t("rgpd-delete.privacyPolicy")}</h1>
          <h2 className="text-xl">{t("rgpd-delete.personalDataDeletion")}</h2>
        </header>
        <section className="max-w-4xl mx-auto p-6">
          <p>{t("rgpd-delete.gdprComplianceIntro")}</p>
        </section>
        <section className="max-w-4xl mx-auto p-6">
          <h3 className="text-lg font-semibold mb-4">{t("rgpd-delete.deletionStepsIntro")}</h3>
          <ol className="list-decimal list-inside">
            <li>
              {t("rgpd-delete.emailDeletionRequest")}{" "}
              <a href="mailto:contact@andralude.com" className="text-blue-500 hover:text-blue-600">
                contact@andralude.com
              </a>
            </li>
            <li>{t("rgpd-delete.identityVerification")}</li>
          </ol>
        </section>
        <section className="max-w-4xl mx-auto p-6">
          <h3 className="text-lg font-semibold mb-4">{t("rgpd-delete.dataDeletionScope")}</h3>
          <ul className="list-disc list-inside">
            <li>{t("rgpd-delete.savedPersonalInfo")}</li>
            <li>{t("rgpd-delete.sentMessages")}</li>
            <li>{t("rgpd-delete.importedMedia")}</li>
            <li>{t("rgpd-delete.identityProofData")}</li>
          </ul>
        </section>
        <section className="max-w-4xl mx-auto p-6">
          <h3 className="text-lg font-semibold mb-4">{t("rgpd-delete.processingTime")}</h3>
          <p>{t("rgpd-delete.deletionConfirmation")}</p>
        </section>
      </div>
    </div>
  );
}
