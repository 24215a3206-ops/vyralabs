import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "primary" | "secondary" | "outline" | "ghost" | "accent"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98]"

        const variants = {
            primary: "bg-foreground text-background hover:bg-gray-900 shadow-sm",
            secondary: "bg-subtle text-foreground hover:bg-gray-100 border border-border",
            outline: "border border-border text-foreground hover:bg-subtle hover:border-gray-700",
            ghost: "text-gray-700 hover:text-foreground hover:bg-subtle",
            accent: "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm shadow-brand-blue/20",
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
