'use client '

import Button from "@/app/components/Button";
import Input from "@/app/components/Input/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BsGithub, BsGoogle } from 'react-icons/bs'
import AuthSocialButton from "./AuthSocialButton";

type variant = 'LOGIN' | 'REGISTER';


const Authform = () => {
    const [variant, setVariant] = useState<variant>('LOGIN')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        if (variant === 'REGISTER') {
            // axios regiester
        } else {
            // axios sign in
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
        //next auth social sign in
    }
    return (
        <div className="mt-8 mx-auto sm:w-full w-11/12 sm:max-w-md">
            <div className="bg-white px-5 py-8 shadow rounded-lg sm:px-10">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        {variant === 'REGISTER' && (
                            <Input
                                type="text"
                                id="name"
                                label="Name"
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                                rules={
                                    {
                                        required: true,
                                        minLength: 4
                                    }
                                }
                            />
                        )}


                        <Input
                            type="email"
                            id="email"
                            label="Email address"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                            rules={
                                {
                                    required: true,
                                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                                }
                            }


                        />
                        <Input
                            type="password"
                            id="password"
                            label="Password"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                            rules={
                                {
                                    required: true,
                                    minLength: 6
                                }
                            }

                        />
                    </div>

                    <div className="mt-3">

                        <Button disabled={isLoading} fullWidth type="submit">
                            {variant === 'LOGIN' && ( isLoading === true ? 'Sigining in' : 'Sign in')}
                            {variant === 'REGISTER' && (isLoading === true ? 'Registering' : 'Register')}
    
                        </Button>

                    </div>
                </form>


                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />

                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white p-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('github')}
                        />
                    </div>
                </div>



                <div
                    className="
                flex 
                gap-2 
                justify-center 
                text-sm 
                mt-6 
                px-2 
                text-gray-500
            "
                >
                    <div>
                        {variant === 'LOGIN' ? 'New to SociaVerse?' : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Authform 