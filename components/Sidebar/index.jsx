import { useEffect } from 'react'

const Index = ({
    className,
    toggle,
    setToggle,
    children,
    ...props
}) => {
    useEffect(() => {
        const body = document?.querySelector('body')

        toggle
            ? body.classList?.add('overflow-hidden')
            : body.classList?.remove('overflow-hidden')
    }, [toggle])

    return (
        <>
            <main {...props} className={`block lg:hidden fixed bottom-0 right-0 left-0 z-20 transition-all overflow-hidden opacity-90 ${toggle ? 'sidebar-container' : 'bg-transparent pointer-events-none'}`}
                style={{ marginLeft: '0px', top: '80px' }}
            >
                <aside className={`overflow-hidden !bg-primary flex flex-col justify-between ${toggle ? 'sidebar-open' : 'sidebar-close'} ${className}`}>
                    {children}
                    <ul className="flex flex-col items-center gap-30 pt-64">
                        {['Product', 'Use Case', 'Workflow', 'Pricing', 'Sign in']?.map((item, _index) => (
                            <li key={_index} className='text-sm text-white font-medium transition-all cursor-pointer hover:underline hover:opacity-90'>{item}</li>
                        ))}
                    </ul>
                </aside>
            </main>
        </>
    )
}

export default Index
