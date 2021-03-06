import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  FilePlus,
  House,
  PhoneCall,
  Wrench,
  Gauge,
  Person,
  Password
} from 'phosphor-react'
import Swal from 'sweetalert2'
import { Button } from '../Buttons/Buttons'

const itensMenuMobile = [
  {
    name: 'Home',
    href: '/Home',
    icon: House
  },
  {
    name: 'Contatos',
    href: '/Contacts',
    icon: PhoneCall
  },
  {
    name: 'Inscrição',
    href: '/Registration',
    icon: FilePlus
  }
]

const solutions = [
  {
    name: 'Aceleração de StartUps',
    href: '/',
    icon: Gauge
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {
  const [login, setLogin] = useState(true)

  async function SignUp() {
    const email = await Swal.fire({
      title: 'Informe seu  E-mail',
      input: 'email',
      inputLabel: 'Seu e-mail',
      inputPlaceholder: 'seu@email.com'
    })

    const password = await Swal.fire({
      title: 'Senha',
      input: 'password',
      inputLabel: 'Senha',
      inputPlaceholder: 'Informe sua senha'
    })

    if (password) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: toast => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Login com Sucesso!'
      })

      setLogin(false)
    }
  }

  function SignIn() {
    Swal.fire({
      title: 'Realmente deseja sair do sistema?',
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Cancelar`
    }).then(result => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Saiu com Sucesso!'
        })
        setLogin(true)
      }
    })
  }

  return (
    <header>
      <Popover className="relative bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/Home">
                {/* Local onde ficara a Logomarca */}
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <a
                href="/Home"
                className="group rounded-md inline-flex items-center text-base font-medium text-white focus:outline-none hover:text-gray-800 hover:bg-gray-100 p-2"
              >
                <House className="mr-2 text-2xl" />
                <span className="text-xl">Home</span>
              </a>

              <a
                href="/Registration"
                className="group rounded-md inline-flex items-center text-base font-medium text-white focus:outline-none hover:text-gray-800 hover:bg-gray-100 p-2"
              >
                <FilePlus className="mr-2 text-2xl" />
                <span className="text-xl">Inscrição</span>
              </a>

              <a
                href="/Contacts"
                className="group rounded-md inline-flex items-center text-base font-medium text-white focus:outline-none hover:text-gray-800 hover:bg-gray-100 p-2"
              >
                <PhoneCall className="mr-2 text-2xl" />
                <span className="text-xl">Contatos</span>
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        'group rounded-md inline-flex items-center text-base font-medium text-white focus:outline-none hover:text-gray-800 hover:bg-gray-100 p-2'
                      )}
                    >
                      <Wrench className="mr-2 text-2xl" />
                      <span className="text-xl">Soluções</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map(item => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-8 w-8 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-100"
                  onClick={SignIn}
                >
                  {login ? '' : 'Sair'}
                </a>
                {login ? (
                  <a
                    href="#"
                    onClick={SignUp}
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Login
                  </a>
                ) : (
                  <div className="flex -space-x-1 overflow-hidden">
                    <img
                      className="inline-block h-12 w-12 rounded-full ml-10"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8 mb-10">
                    {itensMenuMobile.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                  <div>
                    {login ? (
                      <span onClick={SignUp}>
                        <Button title="Login" color="purple" />
                      </span>
                    ) : (
                      <div className="flex -space-x-1 overflow-hidden">
                        <img
                          className="inline-block h-12 w-12 rounded-full ml-10"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                    )}

                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      {login ? (
                        ''
                      ) : (
                        <span onClick={SignIn}>
                          <Button title="Sair" color="white" />
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}
