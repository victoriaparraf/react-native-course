import React from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native'


interface CustomButtonProps extends PressableProps {
    children: string;
    color: 'Primary'|'Secondary'|'Tertiary',
    variant?: 'contained'| 'text-only',
    className?: string;
}

const CustomButton = React.forwardRef(
    ({ children, 
        color = 'Primary', 
        onPress , 
        onLongPress, 
        variant = 'contained',
        className
     }: CustomButtonProps, 
        ref: React.Ref<View>) => {

    const btnColor={
        Primary: 'bg-primary',
        Secondary: 'bg-secondary',
        Tertiary: 'bg-tertiary'
    }[color];

    const TextColor={
        Primary: 'text-primary',
        Secondary: 'text-secondary',
        Tertiary: 'text-tertiary'
    }[color];

    if (variant === 'text-only') {
        return (
            <Pressable
                onPress={onPress}
                onLongPress={onLongPress}
                className={`p-3 ${className}`}
                ref={ref}
            >
            <Text className={`text-center ${TextColor} font-work-medium`}>{children}</Text>
        </Pressable>
        )
    }
        
    return (
        <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className} `}
        ref={ref}
        >
            <Text className='text-white text-center font-work-medium'>{children}</Text>
        </Pressable>
    );
});  

export default CustomButton