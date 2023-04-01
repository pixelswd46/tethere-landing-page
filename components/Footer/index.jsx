import { useState } from 'react'
import { H2, H6, Button, Paragraph, Caption } from '../Typography'

const Index = ({ }) => {

    return (
        <>
            <section>
                <div className="container mx-auto px-20 md:px-24 lg:px-32">
                    <section className='w-full flex flex-col lg:flex-row justify-between mx-auto mt-46 lg:-mb-162'>
                        <div className='w-full lg:pt-20'>
                            <H2 className='mb-6'>Test free beta</H2>
                            <H6 className='w-full lg:w-4/5 font-normal mb-32'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</H6>
                        </div>

                        <div className='w-full relative z-10'>
                            <div className='relative'>
                                <img className='hidden lg:block absolute -scale-75 -top-18 -right-[88px]' src='/assets/svg/graphic-dots.svg' alt="" />
                                <img className='hidden lg:block absolute -scale-75 translate-y-2/4 bottom-99 lg:bottom-220 -left-120 -z-10' src='/assets/svg/graphic-dots.svg' alt="" />
                                <main className='bg-[#FAFAFA] relative flex flex-col lg:rounded-lg p-26 lg:p-46'>
                                    <Caption className='text-[#343434] mb-28'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</Caption>
                                    <div className='flex flex-col lg:flex-row justify-between lg:gap-14'>
                                        <div className='w-full mb-18'>
                                            <Input label='First name' placeholder='first name' forId='fistname' />
                                        </div>
                                        <div className='w-full mb-18'>
                                            <Input label='Last name' placeholder='last name' forId='lastname' />
                                        </div>
                                    </div>

                                    <div className='w-full mb-18'>
                                        <Input label='Phone number' placeholder='00 000 000' forId='phone' />
                                    </div>

                                    <div className='w-full mb-18'>
                                        <Input label='Work email' placeholder='Your email address' forId='email' />
                                    </div>

                                    <div className='flex flex-col lg:flex-row justify-between lg:gap-14'>
                                        <div className='w-full mb-18'>
                                            <Input label='Password' placeholder='***********' forId='password' type='password' />
                                        </div>
                                        <div className='w-full mb-18'>
                                            <Input label='Confirm password' placeholder='***********' forId='confirm_password' type='password' />
                                        </div>
                                    </div>
                                    <Button className='self-end !text-16 lg::self-center !rounded lg:!rounded-full mt-12'>Register Now</Button>
                                </main>
                            </div>
                        </div>
                    </section>
                </div>

                <div className=' hidden lg:block w-full bg-black'>
                    <img className='w-full object-cover opacity-50' src='/assets/lg-register.png' alt="" />
                </div>

                <div className='block lg:hidden container mx-auto px-20 md:px-24 lg:px-32 mb-136'>
                    <img className='w-full object-cover opacity-60' src='/assets/sm-register.png' alt="" />
                </div>

            </section>
            <footer className='bg-primary'>
                <div className="container mx-auto px-20 md:px-24 lg:px-32">
                    <div className='pt-64'>
                        <section>
                            <img className='mb-14 mx-auto' src="/assets/svg/logo-footer.svg" alt="" />
                            <ul className='w-full flex flex-row items-center justify-center flex-wrap gap-16 md:gap-20 lg:gap-26 2xl:gap-32'>
                                {['Product', 'Use Case', 'Workflow', 'Pricing']?.map((item, _index) => (
                                    <li key={_index} className='text-xs text-white font-normal transition-all cursor-pointer hover:underline hover:opacity-90 mb-12'>{item}</li>
                                ))}
                            </ul>
                            <Paragraph className='text-white font-normal text-center pb-26 lg:pb-46 mt-36 md:mt-64'>All Rights Reserved @ 2023 | <span className='transition-all cursor-pointer hover:underline hover:opacity-90'>Terms and Conditions</span> | <span className='transition-all cursor-pointer hover:underline hover:opacity-90'>Privacy Policy</span></Paragraph>
                        </section>
                    </div>
                </div>
            </footer >
        </>
    )
}

const Input = ({ label, placeholder, forId, type }) => {
    const [code, setCode] = useState(null)
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <label className='block text-12 text-[#222222] font-normal mb-12' for={forId}>{label}</label>
            <div className='relative w-full h-46'>
                <input className={`w-full h-full focus:outline-none text-2xs rounded placeholder:text-2xs ${label === 'Phone number' ? 'pl-84 pr-16' : 'px-16'}`} type={type ? type : 'text'} id={forId} placeholder={placeholder} />
                {label === 'Phone number' && (
                    <>
                        <div onClick={() => setToggle(!toggle)} className='absolute w-80 left-0 top-0 flex items-center justify-center gap-6 h-full rounded-tl rounded-bl cursor-pointer pb-2'>
                            <span className='relative top-2 text-2xs text-gray opacity-80'>+{code ? code : '00'}</span>
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M8 0L3.97 6L0 0H8Z" fill="black" />
                            </svg>
                        </div>
                        {toggle && (
                            <div className='absolute bg-white top-46 w-80 shadow-sm rounded-bl rounded-br z-50 pb-6'>
                                <ul>
                                    {[{ id: 1, code: 353 }, { id: 2, code: 354 }, { id: 3, code: 355 }]?.map(({ code }, _index) => (
                                        <li key={_index} onClick={() => { setCode(code); setToggle(false) }} className='flex items-center justify-center gap-6 transition-all cursor-pointer hover:bg-[#FBFBFB] hover:opacity-90 first:border-t border-b border-[#F8F8F8] py-6 px-4'>
                                            <img className='w-20 object-cover' src={`/assets/countries/${code}.svg.webp`} alt="" />
                                            <span className='text-12 text-gray font-medium'>{`+${code}`}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default Index;