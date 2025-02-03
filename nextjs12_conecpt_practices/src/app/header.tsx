import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
        <header className="flex justify-between items-center py-4 px-7 border-b">
            <Link href="/">
                <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={50}
                    height={50}
                    className="h-[35px] w-[35px]"
                />
            </Link>
        </header>
    )
}