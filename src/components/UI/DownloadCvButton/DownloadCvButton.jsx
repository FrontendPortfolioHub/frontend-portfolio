import './DownloadCvButton';

export const DownloadCvButton = () => {
  return (
    <a
      href="/files/CV Frontend Dev Pavlo Maistrenko.pdf"
      download="CV Frontend Dev Pavlo Maistrenko.pdf"
      className="cv-button text-accent"
    >
      download cv
    </a>
  );
};
