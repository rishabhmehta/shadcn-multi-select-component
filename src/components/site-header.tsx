import Link from "next/link";

import ModeToggle from "@/components/mode-toggle";
import { ColorModeToggle } from "@/components/color-mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export async function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <div className='flex flex-1 items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Link href='/' className='text-lg font-semibold'>
              Multi-Select
            </Link>
            <Link
              href='/tags-test'
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Tags Test
            </Link>
          </div>
          <nav className='flex items-center space-x-1'>
            <Link
              href='https://github.com/sersavan/shadcn-multi-select-component'
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link>
            <ModeToggle />
            <ColorModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
