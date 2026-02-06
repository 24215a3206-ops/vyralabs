import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Slot } from "@radix-ui/react-slot"

// Utility function (can be moved to lib/utils.ts later)
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "primary" | "secondary" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        const baseStyles = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none"

        const variants = {
            primary: "bg-foreground text-background hover:bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.1)]",
            secondary: "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/10",
            outline: "border border-border text-foreground hover:bg-white/5",
            ghost: "text-muted-foreground hover:text-foreground hover:bg-white/5",
        }

        return (
            <Comp
                className={cn(baseStyles, variants[variant], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
