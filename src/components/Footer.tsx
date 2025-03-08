import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <div className="space-y-6 mt-8 mb-8">
      <div className="container mx-auto flex justify-center">
        <FooterIcons />
      </div>
      <div className="text-center text-gray-300 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Ang Li-Lian. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
