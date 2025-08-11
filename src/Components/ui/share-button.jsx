import React, { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"

const ShareButton = ({
  className,
  links,
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Button
        className={cn(
          "relative min-w-40 rounded-3xl ",
          "sm:bg-white bg-black",
          "hover:bg-gray-500",
          "sm:text-black text-white",
          "border border-black/10 dark:border-white/10",
          "transition-all duration-300",
          isHovered ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}>
        <span className="flex items-center gap-2">{children}</span>
      </Button>
      <div className="absolute left-0 top-0 flex h-10">
        {links.map((link, index) => {
          const Icon = link.icon
          return (
            <button
              type="button"
              key={index}
              onClick={link.onClick}
              className={cn(
                "h-10",
                "w-10",
                "flex items-center justify-center cursor-pointer",
                "sm:bg-white bg-black",
                "sm:text-black text-white hover:text-black",
                "transition-all duration-300",
                index === 0 && "rounded-l-3xl",
                index === links.length - 1 && "rounded-r-3xl",
                "border-r border-white/10 last:border-r-0",
                "hover:bg-gray-300",
                "",
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0",
                index === 0 && "transition-all duration-200",
                index === 1 && "delay-[50ms] transition-all duration-200",
                index === 2 && "transition-all delay-100 duration-200",
                index === 3 && "transition-all delay-150 duration-200"
              )}>
              <Icon className="size-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ShareButton
