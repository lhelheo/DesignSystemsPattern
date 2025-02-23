import classNames from "classnames"
import { UserIcon } from "@heroicons/react/24/outline"
import AvatarIcon from "./AvatarIcon"
import AvatarImage from "./AvatarImage"

export type AvatarProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg'
    image?: string 
    descricao?: string
} & React.HTMLAttributes<HTMLDivElement>

const avatarSizeMap = {
    xs: 'w-5 h-5',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-9 h-9'
}

const Avatar = ({
    size = 'xs', 
    className, 
    image,
    descricao='',
    ...rest
}: AvatarProps) => {
    const avatarSizeClass = avatarSizeMap[size]
    const avatarComponent = image ? (
        <AvatarImage src={image} altDescription={descricao} />
    ) : (
        <AvatarIcon />
    )

    return (
        <div 
            className={classNames(
                'relative rounded-full bg-slate-100 flex items-center justify-center',
                avatarSizeClass,
                className
            )} 
            {...rest}
        >
            {avatarComponent}
        </div>
    )
}

export default Avatar