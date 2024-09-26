import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Background", href: "#personal" },
  { name: "Experience", href: "#background" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="bg-white">
        <header className="fixed inset-x-0 top-0 z-50 bg-black lg:bg-opacity-30 bg-opacity-0 transition-all duration-300 ease-in-out hover:bg-opacity-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:p-8 lg:px-0"
          >
            {/* Mobile menu button - always visible on small screens */}
            <div className="flex shadow-xl bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 rounded-xl lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-6 md:p-8 text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop nav - hidden on small screens */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <div className="lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-xl text-white font-semibold transition-colors duration-300 ease-in-out hover:text-indigo-400" // Removed text resizing
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <Dialog
            open={mobileMenuOpen}
            onClose={closeMobileMenu} // Close the mobile menu when dialog is closed
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={closeMobileMenu} // Close the mobile menu when "X" is clicked
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu} // Close the mobile menu when a link is clicked
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate lg:px-0">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="mx-auto max-w-full min-h-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
