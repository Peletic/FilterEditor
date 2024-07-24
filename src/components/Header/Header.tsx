import Image from "next/image";

// Why can't I import a photo?
// @ts-ignore
import Logo from "../../../public/icon256.png";


export default function Header() {
    return (
        <div
            className="flex flex-row shadow-lg shadow-white/10 h-[75px] px-[20px] items-center justify-between"
        >
            <div className="flex flex-row">
                <Image src={Logo}
                       alt={"Binmaster Logo"}
                       className={"h-[50px] w-[50px]"}
                />
                <h1 className={"text-xl font-extralight h-fit my-auto ml-12"}>
                    filter editor
                </h1>
            </div>
        </div>
    )
}