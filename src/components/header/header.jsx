import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "../locale-switcher/locale-switcher";

function Header() {

    const t = useTranslations('Navigation')

    return (
        <>
            <header className="header">i18n test:</header>
            <nav className="flex items-center">
                <Link className="navig" href={'/'}>{t('text')}</Link>
                <LocaleSwitcher/>
            </nav>
        </>
     );
}

export default Header;