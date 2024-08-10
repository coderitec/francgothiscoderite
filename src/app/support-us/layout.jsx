export const metadata = {
  title: "Nassy & Franc",
  description: "A Story of Love",
};

export default function SupportLayout({children}) {
  return (
    <div>
      <div className='bg-[url(/support/banner.png)] md:h-80 h-64 bg-contain md:bg-repeat bg-no-repeat'>

      </div>
      {children}
      </div>
  )
}
