import { useState } from 'react';
import Head from 'next/head';
import { c } from '../utils';
import MenuLink from './MenuLink';

export default function Layout({ children, home, contact }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div
        className={c(
          'flex',
          'flex-col',
          'h-screen',
          'justify-between',
        )}
      >
        <nav
          className={c(
            'bg-white',
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
                  'items-center'
                )}
              >
                <div
                  className={c(
                    'flex-shrink-0',
                  )}
                >
                  <img
                    className={c(
                      'h-14',
                      'w-14',
                    )}
                    src="/icon.png"
                    alt="Carl"
                  />
                </div>
                <div
                  className={c(
                    'hidden',
                    'md:block',
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
                      text={'Home'}
                    />
                    <MenuLink
                      href={'/contact'}
                      active={contact}
                      text={'Contact'}
                    />
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
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
            'md:hidden',
            menuOpen ?
              '' : 'hidden',
          )}>
            <div
              className={c(
                'px-2',
                'pt-2',
                'pb-3',
                'space-y-1',
                'sm:px-3',
              )}
            >
              <MenuLink
                href={'/'}
                active={home}
                text={'Home'}
              />
              <MenuLink
                href={'/contact'}
                active={contact}
                text={'Contact'}
              />
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer
          className={c(
            'bg-white',
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
                'justify-center',
                'h-16',
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
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}