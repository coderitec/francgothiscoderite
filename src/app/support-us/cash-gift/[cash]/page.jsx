import { supportData } from "@/app/components/data"
import { TbCurrencyNaira } from "react-icons/tb";
import Image from "next/image"
import Link from "next/link"


export default function CashGift({params}) {
    const gifts = supportData.find(gift => gift.title.split(' ').join('-') == params.cash)
  return (
    <div className="min-h-screen md:p-16 p-8 flex flex-col items-center gap-y-3">
    <div className="font-mono py-4 md:w-3/4 w-5/6 m-auto text-center">
        <h1 className="uppercase  md:text-4xl text-2xl py-4">{gifts.title}</h1>
        <h2 className="text-3xl bg-slate-950 text-slate-300  py-4 my-2 flex flex-row items-center justify-center">
            <TbCurrencyNaira />
            <span>{Number(gifts.amount).toLocaleString()}</span>
            </h2>
    </div>

    <div className="flex md:flex-row flex-col justify-evenly items-start gap-x-3">
        <Image src={`/support/${gifts.title.split(' ').join('-')}.jpg`} alt={gifts.title} width='400' height='400' className="rounded-md shadow-xl border-8 border-slate-900"/>
        <div>


    <div className="rounded-md border-8 border-slate-950 p-8 font-mono my-4">
        <p className="flex md:flex-row flex-col justify-between space-x-6 py-4 text-2xl">
            <span className="bg-slate-950/75 text-slate-300 p-2">Send to Nassy:</span> 
            <span  className="bg-slate-950/75 text-slate-300 p-2">0253339628</span>
            <span className="bg-slate-950/75 text-slate-300 p-2">GTB</span>
        </p>
        <p className="flex md:flex-row flex-col justify-between space-x-6 py-4 text-2xl">
            <span className="bg-slate-950/75 text-slate-300 p-2">Send to Franc:</span> 
            <span className="bg-slate-950/75 text-slate-300 p-2">3028799170</span>
            <span className="bg-slate-950/75 text-slate-300 p-2">First Bank</span>
        </p>
    </div>
        <div className="bg-slate-950/75 text-slate-300 p-2 my-2 text-3xl capitalize font-mono hover:bg-slate-700">
        <Link href={gifts.link} target="_blank">
        buy from store instead
        </Link>
        </div>
        <div className="bg-slate-950/25 text-slate-300 p-2 my-2 text-3xl">
            <p>Thank You For Your Support</p>
        </div>

        </div>
    </div>
    </div>
  )
}
