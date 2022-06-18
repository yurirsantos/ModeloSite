import { UsersThree, Wrench } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 pt-4 pb-8 xl:pt-8 mt-5">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 text-gray-300">
        <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 ext-gray-200 text-md uppercase mb-4 flex text-center w-40 m-auto">
                <span className="text-gray-500 text-2xl mr-2">
                  <Wrench />
                </span>
                Soluções
              </h2>
              <ul>
                <li className="mb-4 hover:text-white">
                  <a href="#">Aceleração de StartUps</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 ext-gray-200 text-md uppercase mb-4 flex text-center w-40 m-auto">
                <span className="text-gray-500 text-2xl mr-2">
                  <UsersThree />
                </span>
                Redes Sociais
              </h2>
              <ul>
                <li className="mb-4 hover:text-white">
                  <a href="https://github.com/yurirsantos" target="_blanck">
                    Github
                  </a>
                </li>
                <li className="mb-4 hover:text-white">
                  <a
                    href="https://www.linkedin.com/in/yurirsantos/"
                    target="_blanck"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  )
}
