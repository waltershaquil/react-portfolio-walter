import logo1 from "../resources/circular logo website-01.png";

function HeaderTop() {
  return (
    <div>
      <div class="min-h-full  min-w-screen sticky top-0 pb-10">
        <header class="w-full text-gray-700 body-font">
          <div class="container flex flex-col items-start p-6 mx-auto md:flex-row">
            <img
              src={logo1}
              alt="Logo"
              className="h-16 w-16 object-contain -mt-2"
            />
            <nav class="flex items-center justify-center text-base text-white md:ml-auto">
              <a href="#_" class="mr-5 font-medium hover:text-[#493091]">
                Home
              </a>
              <a href="#_" class="mr-5 font-medium hover:text-[#493091]">
                projects
              </a>
              <a href="#_" class="font-medium hover:text-[#493091]">
                Education
              </a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
export default HeaderTop;
