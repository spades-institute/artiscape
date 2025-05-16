// components/Header.jsx
import Image from 'next/image';
import { CallToActionButton } from './reuseable';

const Header = () => {
  return (
    <header
      className={`relative text-center bg-cover bg-center h-[500px] flex flex-col items-center justify-center rounded-xl`}
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/ca/6e/0a/ca6e0a8c892be6b9c64aa0e70b73cb42.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-xl h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Siblings Photography Studios</h1>
        <p className="text-lg text-gray-200 mb-8">Enhancing the quality of your relationships through photographic imaging.</p>
        <CallToActionButton link={'/portfolio'} title={"Explore Portfolio"} />
      </div>
    </header>
  );
};

export default Header;
