export const H1 = ({ className, children, ...props }) => {
    return (
        <h1 {...props} className={`${className} text-[#031F4F] font-bold text-xl md:text-2xl leading-60 md:leading-80`}>
            {children}
        </h1>
    )
}

export const H2 = ({ className, children, ...props }) => {
    return (
        <h2 {...props} className={`${className} text-lg md:text-xl font-semibold leading-55 md:leading-60`}>
            {children}
        </h2>
    )
}

export const H3 = ({ className, children, ...props }) => {
    return (
        <h3 {...props} className={`${className} text-secondary leading-34 md:leading-55 text-25 md:lg:text-lg`}>
            {children}
        </h3>
    )
}

export const H4 = ({ className, children, ...props }) => {
    return (
        <h4 {...props} className={`${className} font-normal text-sm md:first-letter:text-24 text-[#6D6D6D] leading-40`}>
            {children}
        </h4>
    )
}

export const H5 = ({ className, children, ...props }) => {
    return (
        <h4 {...props} className={`${className} text-md`}>
            {children}
        </h4>
    )
}

export const H6 = ({ className, children, ...props }) => {
    return (
        <h5 {...props} className={`${className} text-gray leading-9 text-sm`}>
            {children}
        </h5>
    )
}

export const Paragraph = ({ className, children, ...props }) => {
    return (
        <p {...props} className={`${className} text-xs`}>
            {children}
        </p>
    )
}

export const Caption = ({ className, children, ...props }) => {
    return (
        <span {...props} className={`${className} text-gray leading-6 text-2xs`}>
            {children}
        </span>
    )
}

export const Button = ({ className, children, ...props }) => {
    return (
        <button {...props} className={`${className} bg-primary hover:bg-black text-white h-50 transition-all whitespace-nowrap text-xs rounded-full px-36`}>
            {children}
        </button>
    )
}