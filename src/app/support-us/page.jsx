'use client'
import Link from "next/link"
import { supportData } from "../components/data"
import Image from "next/image"
import { motion } from "framer-motion"

const supportFiles = supportData.map((data, index) => (
  <motion.section
    initial={{ x: "0%", opacity: 0 }}
    transition={{ duration: 1.0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.5 }}
    key={index} className="bg-white flex flex-col items-center justify-center p-4 rounded-md text-center">

    <Link href={`/support-us/cash-gift/${data.title.split(' ').join('-')}`} target="_blank">
      <Image src={`/support/${data.title.split(' ').join('-')}.jpg`} alt={data.title} width='300' height='300' />
      <h2 className="uppercase text-xl py-2 ">{data.title}</h2>
    </Link>
    <button className="capitalize bg-slate-950 text-white hover:bg-slate-800 rounded-md m-2 py-2 px-2 ">
      <Link href={data.link} target="_blank">
        buy from store
      </Link>
    </button>

    <button className="capitalize bg-slate-950 text-white hover:bg-slate-800 rounded-md m-2 py-2 px-2 ">
      <Link href={`/support-us/cash-gift/${data.title.split(' ').join('-')}`} target="_blank">
        send cash gift
      </Link>
    </button>

  </motion.section>
))

export default function SupportPage() {
  return (
    <div className="py-8">

      <div className="m-auto md:w-3/4 w-5/6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 font-mono">
        {supportFiles}
      </div>
    </div>
  )
}
