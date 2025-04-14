"use client"
import React, { useEffect, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle(){
  const { theme, setTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  
  useEffect(() => {
    const button = buttonRef.current
    if (button) {
      const icons = button.querySelectorAll('svg')
      icons.forEach((icon: SVGElement) => {
        icon.classList.add('mode-icon')
        icon.style.transition = 'all 0.5s cubic-bezier(0.5, 0, 0, 1)'
      })
    }
    
    // Add animation class to trigger animation on theme change
    const handleThemeChange = (): void => {
      if (button) {
        const icons = button.querySelectorAll('svg')
        icons.forEach((icon: SVGElement) => {
          icon.classList.remove('animate-theme')
          icon.classList.add('animate-theme')
        })
      }
    }
    
    // Listen for theme changes
    window.addEventListener('themeChange', handleThemeChange)
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange)
    }
  }, [])
  
  // Dispatch custom event on theme change
  useEffect(() => {
    const themeChangeEvent = new Event('themeChange')
    window.dispatchEvent(themeChangeEvent)
  }, [theme])
  
  return (
    <Button 
      ref={buttonRef}
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="relative overflow-hidden mode-toggle"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transform rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transform rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
      
      <style jsx global>{`
        .mode-icon {
          transform-origin: center;
        }
        
        .animate-theme {
          animation: iconPulse 0.5s cubic-bezier(0.5, 0, 0, 1);
        }
        
        @keyframes iconPulse {
          0% { transform: scale(0.8); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .dark .mode-toggle:hover .mode-icon {
          animation: moonFloat 2s ease-in-out infinite;
        }
        
        .mode-toggle:hover .mode-icon:not(.dark .mode-icon) {
          animation: sunRotate 4s linear infinite;
        }
        
        @keyframes moonFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes sunRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Button>
  )
}