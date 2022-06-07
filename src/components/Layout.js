import { useState } from 'react';
import Head from 'next/head';
import { c } from '../utils';
import MenuLink from './MenuLink';

export default function Layout({ children, home, colors, cats, icon }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="a personal website"
        />
        <meta
          property="og:image"
          content="/carl-framed-floral-social.png"
        />
      </Head>
      <nav
        className={c(
          'backdrop-blur',
          'bg-white/75',
          'supports-backdrop-blur:bg-white/75',
          'border-b',
          'border-gray-200',
          'fixed',
          'w-full',
          'top-0',
        )}
      >
        <div
          className={c(
            'max-w-7xl',
            'mx-auto',
            'px-4',
            'sm:px-6',
            'lg:px-8',
          )}
        >
          <div
            className={c(
              'flex',
              'items-center',
              'justify-between',
              'h-16',
            )}
          >
            <div
              className={c(
                'flex',
                'w-full',
                'justify-between',
                'items-center'
              )}
            >
              <div
                className={c(
                  'shrink-0',
                )}
              >
                <span
                  className={c(
                    'text-2xl'
                  )}
                >
                  { icon }
                </span>
              </div>
              <div
                className={c(
                  'hidden',
                  'sm:block',
                )}
              >
                <div
                  className={c(
                    'ml-10',
                    'flex',
                    'items-baseline',
                    'space-x-4',
                  )}
                >
                  <MenuLink
                    href={'/'}
                    active={home}
                    text={'home'}
                  />
                  <MenuLink
                    href={'/colors'}
                    active={colors}
                    text={'colors'}
                  />
                  <MenuLink
                    href={'/cats'}
                    active={cats}
                    text={'cats'}
                  />
                </div>
              </div>
            </div>

            <div className="-mr-2 flex sm:hidden">
              <button
                className={c(
                  'bg-white',
                  'inline-flex',
                  'items-center',
                  'justify-center',
                  'p-2',
                  'rounded-md',
                  'text-black',
                  'hover:bg-gray-100',
                  'focus:outline-none',
                  'focus:ring-2',
                  'focus:ring-offset-2',
                  'focus:ring-offset-gray-200',
                  'focus:ring-white',
                )}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className={c('sr-only')}>Open main menu</span>
                <svg
                  className={c(
                    menuOpen ? 'hidden' : 'block',
                    'h-6',
                    'w-6',
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={c(
                    menuOpen ? 'block' : 'hidden',
                    'h-6',
                    'w-6',
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={c(
          'sm:hidden',
          menuOpen ?
            '' : 'hidden',
        )}>
          <div
            className={c(
              'px-2',
              'pt-2',
              'pb-3',
              'sm:px-3',
              'flex',
              'justify-end',
              'items-center',
            )}
          >
            <MenuLink
              href={'/'}
              active={home}
              text={'home'}
            />
            <MenuLink
              href={'/colors'}
              active={colors}
              text={'colors'}
            />
            <MenuLink
              href={'/cats'}
              active={cats}
              text={'cats'}
            />
          </div>
        </div>
      </nav>
      <main className={c('pt-16')}>{children}</main>
      <footer
        className={c(
          'bg-gray-50',
        )}
      >
        <div
          className={c(
            'max-w-7xl',
            'mx-auto',
            'px-4',
            'sm:px-6',
            'lg:px-8',
          )}
        >
          <div
            className={c(
              'flex',
              'flex-col',
              'items-center',
              'justify-center',
              'h-24',
            )}
          >
            <div
              className={c(
                'flex',
                'items-center',
              )}
            >
              Built with 🍠 by Carl ©️ {(new Date()).getFullYear()}
            </div>
            <div
              className={c(
                'flex',
                'items-center',
              )}
            >
              <a
                href="https://github.com/achristmascarl/carl.so"
                target="_blank"
              >
                GitHub repo
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
