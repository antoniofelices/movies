import type { SignUpErrors } from '@/types/interfaces'

const getUserData = (formData: FormData) => ({
    confirmpassword: formData.get('confirmpassword') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    username: formData.get('username') as string,
})

const initialErrors: SignUpErrors = {
    noEmailPassword: false,
    repeatEmail: false,
    register: false,
    message: '',
}

const errorHandler = (
    setErrors: React.Dispatch<React.SetStateAction<SignUpErrors>>,
    newErrors: Partial<SignUpErrors>
) => {
    setErrors((prev) => ({ ...prev, ...newErrors }))
}

export { getUserData, initialErrors, errorHandler }
