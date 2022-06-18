import Swal from 'sweetalert2'
import { Button } from '../../Components/Buttons/Buttons'
import { SectionMain } from '../../Components/Sections/Sections'
import { Title } from '../../Components/Texts/Texts'
import { NavAndFooter } from '../../NavAndFooter'

export function Registration() {
  function Register() {
    Swal.fire(
      'Inscrição enviada com Sucesso!',
      'Fique de olho em seu e-mail ou aqui na plataforma!',
      'success'
    )
  }

  return (
    <NavAndFooter>
      <SectionMain>
        <Title text="Inscrições" color="text-white" />
        <div className="md:mt-0 md:col-span-2 w-auto sm:w-4/5 m-auto">
          <form method="POST">
            <div className=" sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-b-md">
                <Title text="Dados Pessoais" color="text-gray-800" />
                <div className="rounded-md">
                  <form>
                    <div className="m-2">
                      <label>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700 text-start">
                          Nome Completo
                        </span>
                        <input
                          type="text"
                          name="name"
                          className="mt-1 px-3 border-slate-300 placeholder-slate-400 focus:outline-none focus: focus:ring-indigo-600 selection:block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder="Seu Nome"
                        />
                      </label>
                    </div>
                    <div className="m-2 mt-5">
                      <label>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700 text-start">
                          E-mail
                        </span>
                        <input
                          type="email"
                          name="email"
                          className="mt-1 px-3 border-slate-300 placeholder-slate-400 focus:outline-none focus: focus:ring-indigo-600 selection:block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>
                    <div className="m-2 mt-5">
                      <label>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700 text-start">
                          E-mail
                        </span>
                        <input
                          type="email"
                          name="email"
                          className="mt-1 px-3 border-slate-300 placeholder-slate-400 focus:outline-none focus: focus:ring-indigo-600 selection:block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>
                  </form>
                  <div className="mt-5" onClick={Register}>
                    <Button title="Inscreva-se" link="#" color="purple" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SectionMain>
    </NavAndFooter>
  )
}
