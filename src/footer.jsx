import { FaFacebookF, FaInstagram, FaYoutube, FaPhone, FaEnvelope} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#01415F] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        
        <div>
          <h2 className="text-xl font-bold mb-4"></h2>
          <div className="flex space-x-3 mb-4 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="text-sm space-y-2">
            <div className="flex items-center gap-2"><FaPhone /> 100</div>
            <div className="flex items-center gap-2"><FaEnvelope /> info@telecomarmenia.am</div>
          </div>
          <img src="./src/assets/connection.png" alt=""  className='mt-[50px] -ml-[40px]'/>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl"></span> Ընկերության մասին
          </h3>
          <ul className="text-sm space-y-1">
            <li>Մեր մասին</li>
            <li>Կառավարման թիմ</li>
            <li>Նորություններ</li>
            <li>Աշխատանք Team-ում</li>
            <li>Առողջություն և անվտանգություն</li>
            <li>Գործունեության էթիկա</li>
            <li>Կայքի օգտագործման կանոններ</li>
            <li>Բառարան</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl"></span> Տեղեկատվություն
          </h3>
          <ul className="text-sm space-y-1">
            <li>Օգտագործման պայմաններ</li>
            <li>Լիցենզավորումներ</li>
            <li>E-shop պայմաններ</li>
            <li>Վճարման պայմաններ</li>
            <li>Առաքում</li>
            <li>Վերադարձի պայմաններ</li>
            <li>Team խելացի քարտերի պայմաններ</li>
            <li>Օգնություն</li>
            <li>Գործընկերներ և համագործակցություն</li>
            <li>22 ծառայություն կետեր</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl"></span> Team հավելվածներ
          </h3>
          <ul className="text-sm space-y-1">
            <li>TeamTV</li>
            <li>My Team</li>
            <li>Team Pay</li>
            <li>Team Energy</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
