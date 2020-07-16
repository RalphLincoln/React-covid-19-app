import React from 'react'

// IMPORTING IMAGES
import Image1 from '../images/Group1.png';
import Image2 from '../images/Group3.png';
import Image3 from '../images/Group4.png';
import Image4 from '../images/Group5.png';



export default function DashBoard4() {
    return (
        <div className='container text-secondary'>
            <div className="row mx-auto mb-5 mt-3">
                <div data-aos="zoom-out-down" className="col-sm-6" style={{ overflowY: 'scroll', height: '500px' }}>
                    <div className="">
                        <h4 style={{ color: '#574b90' }} className="pb-2">COVID-19 Knowledge Box</h4>
                        <div className="">
                            <div className="">
                                <div className="font-weight-bold">Coronavirus vs COVID-19</div>
                                <div className="">
                                    <p>Coronaviruses (according to WHO) are a family of viruses that cause illnesses ranging from
                                    the common cold to more severe diseases such as severe acute respiratory syndrome (SARS) and
                                    the Middle East respiratory syndrome (MERS).
                                </p>
                                    <p>Their original mode of transmission were Animal to human</p>
                                    <p>COVID-19 is an acronym.</p>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li> <strong>'CO'</strong> stands for Coronavirus</li>
                                        <li> <strong>'VI'</strong> stands for Virus</li>
                                        <li> <strong>'D'</strong> stands for Disease</li>
                                        <li> <strong>'19'</strong> stands for the year it was first discovered, 2019</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="font-weight-bold pt-3">COVID-19 Symptoms</div>
                            <div className="">
                                <p>Some COVID-19 symptoms includes;</p>
                                <ul style={{ listStyle: 'none' }}>
                                    <li className='row'>
                                        <div className="col" style={{ width: '14rem', height: '19rem' }}>
                                            <img src={Image1} className="card-img-top img-fluid" alt="Images" />
                                            <div className="">
                                                <p className="font-weight-normal text-center">FEVER</p>
                                            </div>
                                        </div>
                                        <div className="col" style={{ width: '14rem', height: '19rem' }}>
                                            <img src={Image2} className="card-img-top img-fluid" alt="Images" />
                                            <div className="">
                                                <p className="text-center font-weight-normal">DIFFICULTY BREATHING</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='row'>
                                        <div className="col" style={{ width: '14rem', height: '19rem' }}>
                                            <img src={Image3} className="card-img-top img-fluid" alt="Images" />
                                            <div className="">
                                                <p className="text-center font-weight-normal">SORE THROAT</p>
                                            </div>
                                        </div>
                                        <div className="col" style={{ width: '14rem', height: '19rem' }}>
                                            <img src={Image4} className="card-img-top img-fluid" alt="Images" />
                                            <div className="">
                                                <p className="text-center font-weight-normal">PESISTENT COUGHING</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <p>It can lead to pneumonia, multiple organ failure and even death in severe cases</p>
                                <p> <strong>Estimates of the incubation period:</strong> the time between infection and the
                            onset of symptoms - range from one to 14 days. Most infected people show symptoms within
                            five to six days.
                        </p>
                                <p> <strong>Asymptomatic:</strong> Infected patients that do not display any symptoms despite
                            having the virus in their systems are considered to be asymptomatic.
                        </p>
                            </div>


                            <div className="">
                                <div className="font-weight-bold pt-3">Face mask vs. face covering: What's the difference?</div>
                                <div className="card-body">
                                    <p>The CDC stresses the use of "face coverings" in its recommendation, not necessarily "face
                                    masks." So what's the difference? A face covering can be any cloth that covers the nose and
                                    mouth, including a scarf or bandana wrapped around the face.
                                    </p>
                                    <p>A face mask refers to a more specific shape that usually involves material that's more fitted
                                    to the nose, mouth and skull, as through the use of ear straps.
                                    </p>
                                    <p>It's possible that "face covering" is used to differentiate coverings from surgical and N95
                                    respirator masks that are so critically low in hospitals in New York and the rest of the
                                    country.
                                    </p>
                                </div>

                                <div className="font-weight-bold pt-3">Personal Protective Equipments(PPEs)</div>
                                <div className="card-body">
                                    <p> <strong>What are PPEs ?</strong> </p>
                                    <p>PPEs are Personal Protective Equipments or specialized clothing to keep one safe while
                                    working. PPE include items like gloves, masks, gowns and goggles.
                        </p>
                                    <p> <strong>How Does PPE Protect me?</strong> </p>
                                    <p>Your PPE gear protects you from infection by creating a barrier between you and the
                                    infection. This barrier reduces the chance of touching, being exposed to, and spreading
                                    germs.
                        </p>
                                    <p>PPE gear is effective protection for health workers/ people with close contact with infected
                                    person if worn, removed, and disposed off correctly and appropriately.
                        </p>
                                    <p>As we learned earlier, COVID-19 is primarily transmitted through droplets and direct /
                                    indirect contact with contaminated surfaces.
                        </p>
                                    <p> <strong>Do I need any Personal Protective Equipment (PPE) for myself ?</strong> </p>
                                    <p>No, so far you ain't an health worker, not in close range (less than 2m) with an infected
                                    person or suspected case and it's not recommended by the local authorities of your community
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className="col-md-6 marg mb-5 text-secondary" style={{ overflowY: 'scroll', height: '500px' }}>
                    <div className="mb-5">
                        <h4 style={{ color: '#574b90' }} className="pb-2">COVID-19 Helplines (Click to call)</h4>
                        <div className="card-body text-left">
                            <div className="content">
                                <div className="card mb-1 rounded">
                                    <div className=" px-3 py-2 font-semibold">Abia</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2347002242362" className="hover:underline">07002242362, </a><a
                                            href="tel:+234700ABIADOC" className="hover:underline">0700ABIADOC</a></div>
                                </div>
                                <div className="border  mb-1 rounded">
                                    <div className="border-b  px-3 py-2 font-semibold">Adamawa</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348031230359" className="hover:underline">08031230359, </a><a
                                            href="tel:+2347080601139" className="hover:underline">07080601139</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold"></div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348028442194" className="hover:underline">08028442194, </a><a
                                            href="tel:+2348037934966" className="hover:underline">08037934966, </a><a
                                                href="tel:+2349023330092" className="hover:underline">09023330092</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Anambra</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348145434416" className="hover:underline">08145434416, </a><a
                                            href="tel:+2348030953771" className="hover:underline">08030953771, </a><a
                                                href="tel:+2348117567363" className="hover:underline">08117567363</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Bauchi</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348023909309" className="hover:underline">08023909309, </a><a
                                            href="tel:+2348032717887" className="hover:underline">08032717887, </a><a
                                                href="tel:+2348059600898" className="hover:underline">08059600898, </a><a
                                                    href="tel:+234803368036" className="hover:underline">0803368036, </a><a
                                                        href="tel:+2348080330216" className="hover:underline">08080330216, </a><a
                                                            href="tel:+2348036911698" className="hover:underline">08036911698</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Bayelsa</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348039216821" className="hover:underline">08039216821, </a><a
                                            href="tel:+2347019304970" className="hover:underline">07019304970, </a><a
                                                href="tel:+2348151693570" className="hover:underline">08151693570</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b-300 px-3 py-2 font-semibold">Benue</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2349018602439" className="hover:underline">09018602439, </a><a
                                            href="tel:+2347025031214" className="hover:underline">07025031214</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Borno</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348088159881" className="hover:underline">08088159881, </a><a
                                            href="tel:+2348009999999" className="hover:underline">08009999999</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Cross River</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2349036281412" className="hover:underline">09036281412, </a><a
                                            href="tel:+2348050907736-WhatsApp" className="hover:underline">08050907736-WhatsApp</a>
                                    </div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Delta</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348033521961" className="hover:underline">08033521961, </a><a
                                            href="tel:+2348035078541" className="hover:underline">08035078541, </a><a
                                                href="tel:+2348030758179" className="hover:underline">08030758179, </a><a
                                                    href="tel:+2349065031241" className="hover:underline">09065031241</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Ebonyi</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348037433129" className="hover:underline">08037433129, </a><a
                                            href="tel:+2348125915350" className="hover:underline">08125915350, </a><a
                                                href="tel:+2349020332489" className="hover:underline">09020332489</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Edo</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348084096723" className="hover:underline">08084096723, </a><a
                                            href="tel:+2348064258163" className="hover:underline">08064258163, </a><a
                                                href="tel:+23480358385529" className="hover:underline">080358385529</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Ekiti</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a href="tel:+23412"
                                        className="hover:underline">112, </a><a href="tel:+2349062970434"
                                            className="hover:underline">09062970434, </a><a href="tel:+2349082970435"
                                                className="hover:underline">09082970435, </a><a href="tel:+2349062970436"
                                                    className="hover:underline">09062970436</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Enugu</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a href="tel:+23417"
                                        className="hover:underline">117, </a><a href="tel:+23412" className="hover:underline">112,
                            </a><a href="tel:+2348182555550" className="hover:underline">08182555550</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">FCT - Abuja</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348099936312" className="hover:underline">08099936312, </a><a
                                            href="tel:+2347080631500" className="hover:underline">07080631500</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Gombe</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2347025116657" className="hover:underline">07025116657, </a><a
                                            href="tel:+2347026256569" className="hover:underline">07026256569</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Imo</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348099555577" className="hover:underline">08099555577, </a><a
                                            href="tel:+2347087110839" className="hover:underline">07087110839</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Jigawa</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348069323005" className="hover:underline">08069323005, </a><a
                                            href="tel:+2348036440532" className="hover:underline">08036440532, </a><a
                                                href="tel:+2348038806682" className="hover:underline">08038806682, </a><a
                                                    href="tel:+2347035188486" className="hover:underline">07035188486</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Kaduna</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348025088304" className="hover:underline">08025088304, </a><a
                                            href="tel:+2348032401473" className="hover:underline">08032401473, </a><a
                                                href="tel:+2348035871662" className="hover:underline">08035871662, </a><a
                                                    href="tel:+2348037808191" className="hover:underline">08037808191, </a><a
                                                        href="tel:+2348036045755" className="hover:underline">08036045755, </a><a
                                                            href="tel:+2348097000010" className="hover:underline">08097000010</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Kano</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2349093995333" className="hover:underline">09093995333, </a><a
                                            href="tel:+2349093995444" className="hover:underline">09093995444</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Katsina</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2349035037114" className="hover:underline">09035037114, </a><a
                                            href="tel:+2349047092428" className="hover:underline">09047092428</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Kebbi</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348036782507" className="hover:underline">08036782507, </a><a
                                            href="tel:+2348036074588" className="hover:underline">08036074588, </a><a
                                                href="tel:+2348032907601" className="hover:underline">08032907601, </a><a
                                                    href="tel:+2348067677723" className="hover:underline">08067677723</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Kogi</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2347088292249" className="hover:underline">07088292249, </a><a
                                            href="tel:+2348150953486" className="hover:underline">08150953486, </a><a
                                                href="tel:+2348095227003" className="hover:underline">08095227003, </a><a
                                                    href="tel:+2347043402122" className="hover:underline">07043402122</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Kwara</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348064369063" className="hover:underline">08064369063, </a><a
                                            href="tel:+2349029397826" className="hover:underline">09029397826</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Lagos</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348000CORONA" className="hover:underline">08000CORONA, </a><a
                                            href="tel:+234800027662" className="hover:underline">0800027662</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Nasarawa</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348036018579" className="hover:underline">08036018579, </a><a
                                            href="tel:+2348035871718" className="hover:underline">08035871718, </a><a
                                                href="tel:+2348033254549" className="hover:underline">08033254549, </a><a
                                                    href="tel:+2348121243191" className="hover:underline">08121243191, </a><a
                                                        href="tel:+2348032910826" className="hover:underline">08032910826, </a><a
                                                            href="tel:+23480097000010" className="hover:underline">080097000010</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Niger</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348038246018" className="hover:underline">08038246018, </a><a
                                            href="tel:+2349093093642" className="hover:underline">09093093642, </a><a
                                                href="tel:+2348077213070" className="hover:underline">08077213070</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Ogun</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348188978393" className="hover:underline">08188978393, </a><a
                                            href="tel:+2348188978392" className="hover:underline">08188978392</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Ondo</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+234800COVID19" className="hover:underline">0800COVID19, </a><a
                                            href="tel:+2348002684319" className="hover:underline">08002684319, </a><a
                                                href="tel:+234700COVID19" className="hover:underline">0700COVID19, </a><a
                                                    href="tel:+2347002684319" className="hover:underline">07002684319, </a><a
                                                        href="tel:+23470012684319" className="hover:underline">070012684319</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Osun</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a href="tel:+23493"
                                        className="hover:underline">293, </a><a href="tel:+2348035025692"
                                            className="hover:underline">08035025692, </a><a href="tel:+2348033908772"
                                                className="hover:underline">08033908772, </a><a href="tel:+2348056546250"
                                                    className="hover:underline">08056546250</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Oyo</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348095394000" className="hover:underline">08095394000, </a><a
                                            href="tel:+2348095963000" className="hover:underline">08095963000, </a><a
                                                href="tel:+2348078288999" className="hover:underline">08078288999, </a><a
                                                    href="tel:+2348078288800" className="hover:underline">08078288800</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Plateau</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2347032864444" className="hover:underline">07032864444, </a><a
                                            href="tel:+2348035422711" className="hover:underline">08035422711, </a><a
                                                href="tel:+2348065486416" className="hover:underline">08065486416, </a><a
                                                    href="tel:+2348035779917" className="hover:underline">08035779917</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Rivers</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348056109538" className="hover:underline">08056109538, </a><a
                                            href="tel:+2348031888093" className="hover:underline">08031888093, </a><a
                                                href="tel:+2348033124314" className="hover:underline">08033124314</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Sokoto</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2347031936037" className="hover:underline">07031936037, </a><a
                                            href="tel:+2348022069567" className="hover:underline">08022069567, </a><a
                                                href="tel:+2348035074228" className="hover:underline">08035074228, </a><a
                                                    href="tel:+2348036294462" className="hover:underline">08036294462</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Taraba</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348032501165" className="hover:underline">08032501165, </a><a
                                            href="tel:+2348065508675" className="hover:underline">08065508675, </a><a
                                                href="tel:+2348039359368" className="hover:underline">08039359368, </a><a
                                                    href="tel:+2348037450227" className="hover:underline">08037450227</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Yobe</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348131834764" className="hover:underline">08131834764, </a><a
                                            href="tel:+2347041116027" className="hover:underline">07041116027</a></div>
                                </div>
                                <div className="border mb-1 rounded">
                                    <div className="border-b px-3 py-2 font-semibold">Zamfara</div>
                                    <div className="px-4 py-2 text-2xl font-light max-w-full flex flex-wrap"><a
                                        href="tel:+2348035626731" className="hover:underline">08035626731, </a><a
                                            href="tel:+2348035161538" className="hover:underline">08035161538, </a><a
                                                href="tel:+2348161330774" className="hover:underline">08161330774, </a><a
                                                    href="tel:+2348066408606" className="hover:underline">08066408606</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
