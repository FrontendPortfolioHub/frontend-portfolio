import { useTranslation } from "react-i18next";

export const DownloadCvButton = () => {
  const { t } = useTranslation();
  return (
    <a
      href="/files/CV Frontend Dev Pavlo Maistrenko.pdf"
      download="CV Frontend Dev Pavlo Maistrenko.pdf"
      className="cv-button text-accent"
    >
      {t('download cv')}
    </a>
  );
};
