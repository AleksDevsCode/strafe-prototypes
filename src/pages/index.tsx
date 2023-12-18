import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from "@/pages/components/Button";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="">
          <div className="bg-black text-white h-screen">
              <div className="flex flex-col justify-center items-center h-screen">
                  <div>
                      <Image src="/logo_white_black.png" width="256" height="256" alt="Hydro Interactive Entertainment Logo" />
                  </div>
                  <div className="text-center mt-4">
                      <h1 className="text-2xl">Scroll Down</h1>
                  </div>
              </div>
              <div className="bg-white text-black h-[50vh]">
                  <div className="text-center pt-[20px] text-6xl">Buttons</div>
                  <div className="flex justify-center">
                  {/* Grid with three evenly spaced black boxes */}
                  <div className="pt-[100px]">
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', justifyContent: 'space-between', marginTop: '20px' }}>
                          <Button type="main" content="Primary" />
                          <Button type="secondary" content="Secondary" />
                      </div>
                  </div>
              </div>
          </div>
              <div className="bg-black text-white h-[50vh]">
                  <div className="text-center pt-[20px] text-6xl">Buttons</div>
                  <div className="flex justify-center">
                      {/* Grid with three evenly spaced black boxes */}
                      <div className="pt-[100px]">
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', justifyContent: 'space-between', marginTop: '20px' }}>
                              <Button type="main" content="Primary" />
                              <Button type="secondary" content="Secondary" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="bg-white text-black h-[100vh]">
                  <div className="text-center pt-[20px] text-6xl">Just Talk</div>
                  <div className="flex justify-center">
                      <div className="pt-[100px]">
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '0px', justifyContent: 'space-between', marginTop: '20px' }}>
                              <div className="bg-[#0f0f0f] rounded-[5px] w-[700px] h-[600px] text-white">
                                      <div className="pt-[20px]">
                                          <div className="text-center">Today</div>
                                      </div>
                                  <div className="pt-[10px]">
                                      <div className="flex flex-col">
                                          <div className="flex items-start">
                                              <div className="px-[3px]">
                                                  <Image src="/logo_white_crystal.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                  <div className="pt-[3px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                      Hey you! You won free Nitro! Just give me your social security number!
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex items-end justify-end">
                                              <div className="px-[3px]">
                                                  <div className="flex flex-col items-end">
                                                      <Image src="/logo_white_peach.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                      <div className="pt-[5px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                          Okay! 55555555
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex items-start justify-start">
                                              <div className="px-[3px]">
                                                  <div className="flex flex-col items-start">
                                                      <Image src="/logo_white_crystal.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                      <div className="pt-[5px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                          GET SCAMMED!
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex items-end justify-end">
                                              <div className="px-[3px]">
                                                  <div className="flex flex-col items-end">
                                                      <Image src="/logo_white_peach.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                      <div className="pt-[5px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                          I respectfully reject.
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex items-start justify-start">
                                              <div className="px-[3px]">
                                                  <div className="flex flex-col items-start">
                                                      <Image src="/logo_white_crystal.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                      <div className="pt-[5px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                          Alright...
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>





                              </div>
                              </div>
                          </div>
                      </div>
                  </div>
              <div className="bg-black text-white h-[100vh]">
                  <div className="text-center pt-[20px] text-6xl">Just Talk</div>
                  <div className="flex justify-center">
                      <div className="pt-[100px]">
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '0px', justifyContent: 'space-between', marginTop: '20px' }}>
                              <div className="bg-[#0f0f0f] rounded-[5px] w-[700px] h-[600px] text-white">
                                  <div className="pt-[20px]">
                                      <div className="text-center">Today</div>
                                  </div>
                                  <div className="pt-[10px]">
                                      <div className="flex flex-col">
                                          <div className="flex items-start">
                                              <div className="px-[3px]">
                                                  <Image src="/logo_white_crystal.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                  <div className="pt-[3px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                      Hey you! You won free Nitro! Just give me your social security number!
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex items-end justify-end">
                                              <div className="px-[3px]">
                                                  <div className="flex flex-col items-end">
                                                      <Image src="/logo_white_peach.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                      <div className="pt-[5px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                          Okay! 55555555
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex items-start justify-start">
                                              <div className="px-[3px]">
                                                  <div className="flex flex-col items-start">
                                                      <Image src="/logo_white_crystal.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                      <div className="pt-[5px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                          GET SCAMMED!
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex items-end justify-end">
                                              <div className="px-[3px]">
                                                  <div className="flex flex-col items-end">
                                                      <Image src="/logo_white_peach.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                      <div className="pt-[5px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                          I respectfully reject.
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex items-start justify-start">
                                              <div className="px-[3px]">
                                                  <div className="flex flex-col items-start">
                                                      <Image src="/logo_white_crystal.png" alt="Hydro Interactive Entertainment" width="32" height="32" />
                                                      <div className="pt-[5px] rounded-lg bg-[#161616] shadow-2xl p-2">
                                                          Alright...
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>





                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="bg-black text-white h-screen">
                  <div className="flex justify-center items-center h-screen">
                      <h1 className="text-5xl font-bold">NOT FINAL DESIGNS, LITERALLY JUST MESSING AROUND, NEED OPINIONS.</h1>
                  </div>
              </div>
              <div className="bg-black text-white h-[20vh] flex flex-col justify-center items-center">
                  <div className="flex items-center">
                      <h1 className="text-3xl">Hydro Interactive Entertainment</h1>
                      <h1 className="ml-3 text-6xl">X</h1>
                      <h1 className="ml-3 text-3xl">Strafe</h1>
                  </div>
              </div>

              </div>
      </div>
  )
}
