import { NavAndFooter } from '../../NavAndFooter'
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon
} from '@heroicons/react/outline'
import { SectionMain } from '../../Components/Sections/Sections'
import { Button } from '../../Components/Buttons/Buttons'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon
  }
]

export function Home() {
  return (
    <NavAndFooter>
      <SectionMain>
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mt-5">
            <span className="block xl:inline">Seu </span>
            <span className="block text-indigo-600 xl:inline">Nome</span>
          </h1>
          <p className="text-center text-lg text-gray-400 w-4/5 m-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem nemo aspernatur cupiditate omnis tempore nesciunt
            totam, ex dolorem harum repudiandae quisquam laudantium officiis
            eaque, eius odit iste optio, amet quia.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex justify-center">
            <Button title="Inscreva-se" link="/Registration" color="purple" />
            <Button title="Saiba Mais!" link="#" color="white" />
          </div>
        </div>

        <div className="py-12 bg-white mt-5 rounded-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Quem somos nós?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map(feature => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </SectionMain>
    </NavAndFooter>
  )
}
