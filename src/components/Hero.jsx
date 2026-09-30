import { CloudRain, Wheat } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900 text-white">
              <Wheat size={21} /> 
            </div>
            <div className="flex w-20 items-center justify-center">
              <img src="/FTL Syria.svg" alt="FTL Syria" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
              AI4Climate · Team 9
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-stone-900 lg:text-7xl">
            Syria Drought
            <span className="block text-emerald-800">
              & Grain
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Linking rainfall variability to cereal production
            in Syria through historical climate and agricultural data.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-stone-500">
            <CloudRain size={18} />
            <span>World Bank CCKP</span>
            <span>•</span>
            <span>FAOSTAT</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero