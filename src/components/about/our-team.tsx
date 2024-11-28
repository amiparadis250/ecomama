import { images } from '@/utils/constant/images'
import Image from 'next/image'
import React from 'react'



const teamMembers = [
    {
        name: 'Joie Sophia UMUHOZA',
        title: 'Chief Executive Officer of ECO-MAMA',
        image: images.Joie,
        
    }
]
function OurTeam() {
    return (
        <div className="bg-white w-full py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Meet our <span className="text-primary">Team</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto">
                        A team dedicated to empowering vulnerable women in Rwanda through AI-driven mental health support and telepsychiatry, addressing climate change's psychological impact
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="flex flex-col items-center text-center">
                        <Image
                            className="rounded-full h-32 w-32 object-cover mb-4"
                            src={images.Joie}
                            alt="Joie Sophia UMUHOZA"
                        />
                        <h3 className="text-lg font-semibold text-gray-900">
                            Joie Sophia UMUHOZA 
                        </h3>
                        <p className="text-primary font-medium mt-1">
                        Founder,and CEO of Eco-mama 
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Image
                            className="rounded-full h-32 w-32 object-cover mb-4"
                            src={images.Jospine}
                            alt="Jospine Sonia UWIMENA"
                        />
                        <h3 className="text-lg font-semibold text-gray-900">
                            Jospine Sonia UWIMENA
                        </h3>
                        <p className="text-primary font-medium mt-1">
                         Women  program lead
                        </p>
                    </div>
                 

                    <div className="flex flex-col items-center text-center">
                        <Image
                            className="rounded-full h-32 w-32 object-cover mb-4"
                            src={images.jovise}
                            alt="Jovise Solive UMUHIRE"
                        />
                        <h3 className="text-lg font-semibold text-gray-900">
                            Jovise Solive UMUHIRE
                        </h3>
                        <p className="text-primary font-medium mt-1">
                         COO of ECO-MAMA
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Image
                            className="rounded-full h-32 w-32 object-cover mb-4"
                            src={images.Paradis}
                            alt=" Ami Paradis"
                        />
                        <h3 className="text-lg font-semibold text-gray-900">
                            ISHIMWE Ami Paradis
                        </h3>
                        <p className="text-primary font-medium mt-1">
                            Software Engineer
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Image
                            className="rounded-full h-32 w-32 object-cover mb-4"
                            src={images.Speciouse}
                            alt="Speciose UZAMURANGA"
                        />
                        <h3 className="text-lg font-semibold text-gray-900">
                            Speciose UZAMURANGA
                        </h3>
                        <p className="text-primary font-medium mt-1">
                            Advisor, and community coordinator 
                        </p>
                    </div>

                    

                    <div className="flex flex-col items-center text-center">
                        <Image
                            className="rounded-full h-32 w-32 object-cover mb-4"
                            src={images.Joseph}
                            alt="MUGISHA Joseph"
                        />
                        <h3 className="text-lg font-semibold text-gray-900">
                            MUGISHA Joseph
                        </h3>
                        <p className="text-primary font-medium mt-1">
                            Software Engineer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam