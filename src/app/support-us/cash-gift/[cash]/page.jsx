import { supportData } from "@/app/components/data"


export default function CashGift({params}) {
    const gifts = supportData.find(gift => gift.title.split(' ').join('-') == params.cash)
  return (
    <div className="font-mono h-screen py-4 md:w-3/4 w-5/6 m-auto">
        
        <h1 className="uppercase text-center md:text-2xl py-4">{gifts.title}</h1>
        <h2>{gifts.amount.toLocaleString()}</h2>

        
    </div>
  )
}
