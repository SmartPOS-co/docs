import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Navigation({ navigation, className }) {
  let router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-dark-900 dark:text-white">
              {section.title}
            </h2>
            <ul className="mt-2 space-y-2 border-l-2 border-dark-100 dark:border-dark-800 lg:mt-4 lg:space-y-4 lg:border-dark-200">
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link href={link.href} className={clsx(
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        {
                          'font-semibold text-primary-500 before:bg-primary-500':
                            link.href === router.pathname,
                          'text-dark-500 before:hidden before:bg-dark-300 hover:text-dark-600 hover:before:block dark:text-dark-400 dark:before:bg-dark-700 dark:hover:text-dark-300':
                            link.href !== router.pathname,
                        }
                      )}
                    >
                      {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
