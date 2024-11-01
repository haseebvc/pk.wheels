import Link from "next/link";

export default function Footer() {
    return (
        <div>
        <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2024 pak-wheels. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/usama.don.9822" className="text-white hover:text-gray-400">Facebook</a>
            <a href="https://www.instagram.com/haseeb_vc_wala/" className="text-white hover:text-gray-400">Instagram</a>
            <a href="https://pk.linkedin.com/in/haseeb-vc-wala-b8a968314?original_referer=https%3A%2F%2Fwww.google.com%2F" className="text-white hover:text-gray-400"> LinkedIn</a>
            <a href="home" className="text-white hover:text-gray-400">created by haseeb vc wala</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

