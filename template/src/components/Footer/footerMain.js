import DocConfig from "../../config/DocConfig"
import PrivacyModal from "../Modals/privacy/PrivacyModal"
import TermsModal from "../Modals/terms/TermsModal"
import LegalModal from "../Modals/legal/LegalModal"

export default function Footer() {
  return (
    <footer
      tag="footer"
      className="flex flex-wrap items-center justify-center space-x-6 text-center text-xs text-sky-900">
      <div className="container mx-auto my-3 grid gap-1 text-center text-xs justify-center">
        <div className="flex justify-center">
          Copyright&nbsp;&copy;&nbsp;{DocConfig.copyright}&nbsp;
          <a
            href={DocConfig.magLink}
            className="font-medium text-sky-900 hover:underline"
            target="_blank"
            rel="noreferrer">
            Maricopa Association of Governments
          </a>
        </div>
        <ul className="flex list-none justify-center divide-x md:order-2 divide-slate-700">
          <li className="px-1">{DocConfig.version}</li>
          <li className="px-1">{DocConfig.date}</li>
          <li className="px-1 text-sky-900 hover:underline">
            <PrivacyModal />
          </li>
          <li className="px-1 text-sky-900 hover:underline">
            <TermsModal />
          </li>
          <li className="px-1 text-sky-900 hover:underline">
            <LegalModal />
          </li>
        </ul>
      </div>
    </footer>
  )
}
