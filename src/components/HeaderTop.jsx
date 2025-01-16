import logo1 from "../resources/circular logo website-01.png";


function HeaderTop() {
  return (
    <div>
      <div class="min-h-full bg-[#1A1A2A] min-w-screen sticky top-0 pb-10">
        <header class="w-full text-gray-700 bg-[#1A1A2A] body-font">
          <div class="container flex flex-col items-start p-6 mx-auto md:flex-row">
            <img
              src={logo1}
              alt="Logo"
              className="h-16 w-16 object-contain -mt-2"
            />
            <nav class="flex items-center justify-center text-base text-white md:ml-auto">
              <a href="#_" class="mr-5 font-medium hover:text-[#705FD1]">
                Home
              </a>
              <a href="#_" class="mr-5 font-medium hover:text-[#705FD1]">
                projectos
              </a>
              <a href="#_" class="font-medium hover:text-[#705FD1]">
                Formação
              </a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
export default HeaderTop;
