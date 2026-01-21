import { useEffect, useState } from 'react'

interface CountUpProps {
    end: number
    duration?: number
    suffix?: string
}

export function CountUp({ end, duration = 2, suffix = "" }: CountUpProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const increment = end / (duration * 60)
        const handle = setInterval(() => {
            start += increment
            if (start >= end) {
                setCount(end)
                clearInterval(handle)
            } else {
                setCount(Math.floor(start))
            }
        }, 1000 / 60)

        return () => clearInterval(handle)
    }, [end, duration])

    return (
        <span>
            {count.toLocaleString()}
            {suffix}
        </span>
    )
}
