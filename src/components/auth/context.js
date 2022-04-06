import { useContext } from "react"
import { UserContext } from "."

export const withAuthContext = (Child) => {
    const auth = useContext(UserContext)
    return <Child auth />
}