import clsx from 'clsx'

import { Icon } from '@/components/Icon'

const styles = {
  note: {
    container:
      'bg-primary-50 dark:bg-dark-800/60 dark:ring-1 dark:ring-dark-300/10',
    title: 'text-primary-900 dark:text-primary-400',
    body: 'text-primary-800 prose-code:text-primary-900 dark:text-dark-300 dark:prose-code:text-dark-300 prose-a:text-primary-900 [--tw-prose-background:theme(colors.sky.50)]',
  },
  warning: {
    container:
      'bg-amber-50 dark:bg-dark-800/60 dark:ring-1 dark:ring-dark-300/10',
    title: 'text-amber-900 dark:text-amber-500',
    body: 'text-amber-800 prose-code:text-amber-900 prose-a:text-amber-900 [--tw-prose-underline:theme(colors.amber.400)] dark:[--tw-prose-underline:theme(colors.sky.700)] [--tw-prose-background:theme(colors.amber.50)] dark:text-dark-300 dark:prose-code:text-dark-300',
  },
}

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="warning" color="amber" {...props} />,
}

export function Callout({ type = 'note', title, children }) {
  let IconComponent = icons[type]

  return (
    <div className={clsx('my-8 flex rounded-3xl p-6', styles[type].container)}>
      <IconComponent className="h-8 w-8 flex-none" />
      <div className="ml-4 flex-auto">
        <p className={clsx('m-0 font-display text-xl', styles[type].title)}>
          {title}
        </p>
        <div className={clsx('prose mt-2.5', styles[type].body)}>
          {children}
        </div>
      </div>
    </div>
  )
}
