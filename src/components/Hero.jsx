import { Fragment } from 'react'
// import Image from 'next/image'
import Image from './Image.js'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { ButtonLink } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'
import smartPOSImage from '@/images/smartpos.png'

const codeLanguage = 'javascript'
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`

const tabs = [
  { name: 'cache-advance.config.js', isActive: true },
  { name: 'package.json', isActive: false },
]

export function Hero() {
  return (
    <div className="overflow-hidden bg-dark-900 dark:-mb-32 dark:-mt-[4.5rem] dark:pb-32 dark:pt-[4.75rem] dark:lg:-mt-[5rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="absolute bottom-full right-full -mr-72 -mb-56 hidden opacity-50 lg:block">
              <Image
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
            </div>
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-primary-400 to-indigo-200 bg-clip-text font-display text-3xl tracking-tight text-transparent">
                Easy, Fast & Smart Point of Sale Solution
              </p>
              <p className="mt-3 text-xl tracking-tight text-dark-400">
                A user-friendly interface that&apos;s fast to learn and easy to
                use, minimizing training time. Works seamlessly with your
                existing or new hardware. All your data is synced to the cloud
                and accessible from anywhere.
              </p>
              <div className="mt-8 flex space-x-4 md:justify-center lg:justify-start">
                <ButtonLink
                  target="_blank"
                  href="https://www.smartpos.co/#app-pricing"
                >
                  Buy License
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  variant="secondary"
                  href="https://www.smartpos.co/#cloud-pricing"
                >
                  Check Cloud Plans
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="relative lg:static">
            <div className="absolute opacity-50 inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-translate-y-[60%]" />
            </div>
            <div className="relative">
              <div className="absolute opacity-25 -right-64 -top-64">
                <Image
                  src={blurCyanImage}
                  alt=""
                  width={530}
                  height={530}
                  unoptimized
                  priority
                />
              </div>
              <div className="absolute opacity-25 -bottom-40 -right-44">
                <Image
                  src={blurIndigoImage}
                  alt=""
                  width={567}
                  height={567}
                  unoptimized
                  priority
                />
              </div>
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-300 via-primary-300/70 to-blue-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-300 via-primary-300/70 to-blue-300 opacity-10" />
              <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-primary-300/0 via-primary-300/70 to-primary-300/0" />
                <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
                <div className="pl-4 pt-4">
                  <svg
                    aria-hidden="true"
                    className="h-2.5 w-auto stroke-dark-500/30"
                    fill="none"
                  >
                    <circle cx="5" cy="5" r="4.5" />
                    <circle cx="21" cy="5" r="4.5" />
                    <circle cx="37" cy="5" r="4.5" />
                  </svg>
                  <div className="mt-4 flex space-x-2 text-xs">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx('flex h-6 rounded-full', {
                          'bg-gradient-to-r from-primary-400/30 via-primary-400 to-primary-400/30 p-px font-medium text-primary-300':
                            tab.isActive,
                          'text-dark-500': !tab.isActive,
                        })}
                      >
                        <div
                          className={clsx(
                            'flex items-center rounded-full px-2.5',
                            { 'bg-dark-800': tab.isActive }
                          )}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-start px-1 text-sm">
                    <div
                      aria-hidden="true"
                      className="select-none border-r border-dark-300/5 pr-4 font-mono text-dark-600"
                    >
                      {Array.from({
                        length: code.split('\n').length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, '0')}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                    <Highlight
                      {...defaultProps}
                      code={code}
                      language={codeLanguage}
                      theme={undefined}
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={clsx(
                            className,
                            'flex overflow-x-auto pb-6'
                          )}
                          style={style}
                        >
                          <code className="px-4">
                            {tokens.map((line, index) => (
                              <div key={index} {...getLineProps({ line })}>
                                {line.map((token, index) => (
                                  <span
                                    key={index}
                                    {...getTokenProps({ token })}
                                  />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="w-full text-center relative z-10">
              <Image
                src={smartPOSImage}
                width={603}
                height={360}
                alt="SmartPOS"
                placeholder="blur"
                unoptimized
                className="mx-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
