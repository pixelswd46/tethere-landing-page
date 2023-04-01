import { H2, H6, Button, Paragraph, Caption } from '../Typography'

const Index = ({ }) => {
    const list = [{ type: 'Basic', amount: 20 }, { type: 'Intermediate', amount: 50 }, { type: 'Professional', amount: 60 }, { type: 'Enterprise', amount: 100 }]

    return (
        <>
            <section>
                <main className='bg-theme rounded-2xl pt-64 lg:pt-99 pb-84 lg:pb-120'>
                    <div className="container mx-auto px-20 md:px-24 lg:px-32">
                        <H2 className='text-center leading-55 mb-6'>Our pricing</H2>
                        <H6 className='w-full lg:w-11/12 lg:max-w-[600px] font-normal text-center mx-auto mb-42'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</H6>

                        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-16 md:gap-28'>
                            {list?.map((item, _index) => (
                                <Card key={_index} item={item} active={_index === 2} />
                            ))}
                        </section>
                    </div>
                </main>
            </section>
        </>
    )
}

const Card = ({ item, active }) => {
    const list = ['Lorem ipsum dolor', 'Lorem ipsum ', 'Lorem ipsum dolor ', 'Lorem ipsum dolor sit']

    return (
        <>
            <div className={`${active && ''} relative w-full bg-white flex flex-col rounded-lg overflow-hidden transition-all hover:shadow-card px-36 pt-26 md:pt-40 pb-40 md:pb-52`}>
                {active && (<div className='bg-[#052F74] absolute top-0 right-0 text-white' style={{ writingMode: 'vertical-lr' }}><Paragraph className='font-medium leading-34 py-16'>Most Popular</Paragraph></div>)}
                <h3 className='text-black font-medium text-25 text-center lg:text-left leading-42 mb-8'>{item?.type}</h3>
                <div className='w-full flex items-center justify-center lg:justify-start gap-13 mb-18'>
                    <H2 className='!text-black'>${item?.amount}</H2>
                    <Caption className='!text-black'>/ month</Caption>
                </div>
                <Caption className='!text-[#363636] text-center lg:text-left leading-6 mb-18'>A private tutoring session with your dedicated mentor</Caption>
                <ul className='mb-40 md:mb-72'>
                    {list?.map((item, _index) => (
                        <li key={_index} className='flex first:border-t border-b border-[#F8F8F8] items-center text-[#363636] font-normal text-13 py-13'>
                            <img className='mr-13' src='/assets/svg/tick-green.svg' alt="" />
                            {item}
                        </li>
                    ))}
                    {active && (
                        <>
                            <li className='flex first:border-t border-b border-[#F8F8F8] items-center text-[#363636] font-normal text-13 py-13'>
                                <img className='mr-13' src='/assets/svg/tick-green.svg' alt="" />
                                Lorem ipsum dolor sit
                            </li>
                            <li className='flex first:border-t border-b border-[#F8F8F8] items-center text-[#363636] font-normal text-13 py-13'>
                                <img className='mr-13' src='/assets/svg/tick-green.svg' alt="" />
                                Lorem ipsum dolor sit
                            </li>
                        </>
                    )}
                </ul>
                <Button className={`${!active && '!bg-[#000] hover:!bg-primary'} !h-54 !text-md self-center mt-12`}>Book Now</Button>
            </div>
        </>
    )
}

export default Index;