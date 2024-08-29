// 'use client';
import { useTranslations } from "next-intl";
import Jokes from "@/components/jokes/jokes";

export default function Home() {

  const t = useTranslations('Index');

  return (
    <>
      <p className="text">{t('text')}</p>
      <Jokes 
        setup={''} 
        punchline={''}
      />
    </>
  );
}
