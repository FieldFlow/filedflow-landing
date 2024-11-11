import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/howard.jpg";
import Avatar02 from "@/public/images/filippo.jpg";
import Avatar03 from "@/public/images/egor.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              A Web3 platform enabling certification
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                FieldFlow: Empowering Certification, Enhancing Compliance — Your Gateway to Streamlined ESG and Agricultural Certification through Advanced Web3 Technology
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay={450}
                >
                  <a
                      className="btn group block mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      href="#contactForm"
                  >
                      <span className="relative inline-flex items-center justify-center w-full h-full">
                      Book a call{" "}
                        <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                        </span>
                      </span>
                  </a>
                  <a
                      className="btn group block w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                      href="https://esg.fieldflow.lu/"
                      target="_blank"
                  >
                      <span className="relative inline-flex items-center justify-center w-full h-full">
                          Demo
                          <span className="ml-1 tracking-normal text-gray-500 transition-transform group-hover:translate-x-0.5">
                              -&gt;
                          </span>
                      </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
              className="mx-auto max-w-3xl"
              data-aos="zoom-y-out"
              data-aos-delay={600}
              style={{display: 'flex', justifyContent: 'center'}}
          >
            <img
                src="/field.gif"
                alt="Field"
                style={{ borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
