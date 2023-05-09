import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export const authByGoogle = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    signInWithPopup(auth, provider)
        .then(result => {
            alert(result.user.displayName)
        })
        .catch(error => {
            console.error(error)
        })
}
