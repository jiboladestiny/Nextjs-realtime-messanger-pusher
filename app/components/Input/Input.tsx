'use client'
import clsx from "clsx"
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form'

interface FormRules {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
}
interface InputProps {
    label: string;
    id: string;
    type?: string;
    rules?: FormRules;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({
    label, id, type, rules, register, errors, disabled
}) => {
    return (
        <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { ...rules })}
                    className={clsx(`
                    form-input
                    block
                    w-full
                    rounded-md
                    border-0
                    py-1.5
                    text-gray-900
                    shadow-sm
                    ring-1
                    ring-inset
                    ring-gray-300
                    placeholder:text-gray-400
                    focus:ring-inset
                    focus:ring-gray-400
                    sm:text-sm
                    sm:leading-6    
                    `,
                        errors[id] && "focus:ring-rose-500",
                        disabled && "opacity-50 cursor-defualt"
                    )}
                />
                <div className={clsx(errors[id]?.type ? "visible" : "invisible")}>
                    {errors[id]?.type ? "" : (<span className={clsx(`text-rose-500 text-[12.5px]`)}> zaza selman</span>)}                  
                    {errors[id]?.type === 'required' && <span className={clsx(`text-rose-500 text-[12.5px]`)}>{id} is required</span>} 
                    {errors[id]?.type === 'pattern' && <span className={clsx(`text-rose-500 text-[12.5px]`)}>{id} is not valid</span>}      
                    {errors[id]?.type === 'minLength' && <span className={clsx(`text-rose-500 text-[12.5px]`)}>{id} is should be at-least {rules?.minLength} characters</span>}                  
                </div>

               

         
            </div>
        
        </div>
    )
}

export default Input