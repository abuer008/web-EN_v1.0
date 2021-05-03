import { useState, useEffect } from 'react'

export const usePhoneVersion = () => {
    const [phoneVersion, setPhoneVersion] = useState(false)

    useEffect(() => {
        const w = window.innerWidth || window.clientWidth


        if (w <= 835) {
            setPhoneVersion(true)
        } else {
            setPhoneVersion(false)
        }
    }, [])

    return phoneVersion
}