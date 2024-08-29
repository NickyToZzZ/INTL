'use client';
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

function LocaleSwitcher() {    

    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e) => {
        const nextLocale = e.target.value;
        router.replace(`/${nextLocale}`);
    }

    return ( 
        <>
            <label className="border-2 rounded">
                <select defaultValue={localActive} className="bg-transparent py-2" onChange={onSelectChange}>
                    <option value="ru">русский</option>
                    <option value="en">english</option>
                </select>
            </label>
        </>
     );
}

export default LocaleSwitcher;